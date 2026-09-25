#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

/**
 * Fetches and parses Sphinx searchindex.js into a structured canonical SDK catalog.
 * Acts as the single source of truth for all functionality exposed by Affinity's Scripting SDK.
 */

const DEFAULT_DOCS_URL = "https://sdk.affinity.studio/33000/js/searchindex.js";
const HERE = dirname(fileURLToPath(import.meta.url));
const RESOURCE_DIR = resolve(HERE, "./resources");
const PARSED_DOCS_OUTPUT = join(RESOURCE_DIR, "affinity_sdk_docs.json");

export async function fetchSearchIndex(url = DEFAULT_DOCS_URL) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

export function extractJsonFromSearchIndex(content) {
  const trimmed = content.trim();
  // Strip Search.setIndex(...) wrapper if present
  const match = trimmed.match(/^Search\.setIndex\s*\(([\s\S]*)\)\s*;?$/);
  const jsonStr = match ? match[1].trim() : trimmed;
  return JSON.parse(jsonStr);
}

export async function parseSearchIndex(source = DEFAULT_DOCS_URL) {
  let content;
  if (/^https?:\/\//i.test(source)) {
    content = await fetchSearchIndex(source);
  } else if (fs.existsSync(source)) {
    content = fs.readFileSync(source, "utf8");
  } else {
    // Fallback: fetch from online if local file not found
    content = await fetchSearchIndex(DEFAULT_DOCS_URL);
  }

  const rawIndex = extractJsonFromSearchIndex(content);
  const { docnames, objects, terms } = rawIndex;

  // 1. Identify modules
  const moduleDocMap = new Map(); // docIndex -> moduleName
  const modules = [];

  for (let i = 0; i < docnames.length; i++) {
    const doc = docnames[i];
    if (doc.startsWith("modules/")) {
      const shortName = doc.replace("modules/", "");
      const fullName = "affinity:" + shortName;
      moduleDocMap.set(i, fullName);
      modules.push({
        id: fullName,
        name: shortName,
        docIndex: i,
        docPath: doc,
      });
    }
  }

  // Build reverse term posting map for module doc indices
  const termToModules = new Map();
  for (const [term, postings] of Object.entries(terms)) {
    const list = typeof postings === "number" ? [postings] : postings;
    for (const docIdx of list) {
      if (moduleDocMap.has(docIdx)) {
        const modName = moduleDocMap.get(docIdx);
        if (!termToModules.has(term)) termToModules.set(term, new Set());
        termToModules.get(term).add(modName);
      }
    }
  }

  // Known module mappings for terms whose Sphinx stem doesn't cleanly hit module index
  const KNOWN_MODULE_OVERRIDES = {
    BlendMode: "affinity:common",
    CurveNode: "affinity:geometry",
    CornerStrategy: "affinity:brushes",
    PackageResourcesPolicy: "affinity:dom",
    RasterBrushSubSyncMode: "affinity:brushes",
    TaskCallbackReason: "affinity:timers",
    UnitCategory: "affinity:common",
  };

  function resolveModuleForSymbol(sym) {
    if (KNOWN_MODULE_OVERRIDES[sym]) return KNOWN_MODULE_OVERRIDES[sym];
    const lower = sym.toLowerCase();
    if (termToModules.has(lower) && termToModules.get(lower).size === 1) {
      return Array.from(termToModules.get(lower))[0];
    }
    // Try prefix / substring match
    const candidates = new Set();
    for (const [t, mods] of termToModules.entries()) {
      if (lower.startsWith(t) || t.startsWith(lower)) {
        for (const m of mods) candidates.add(m);
      }
    }
    if (candidates.size === 1) return Array.from(candidates)[0];
    // Fallback: if ends with RasterNode or similar, route to dom
    if (
      /Node(Api|DefinitionApi)?$/.test(sym) ||
      /Adjustment/.test(sym) ||
      /Filter/.test(sym)
    ) {
      return "affinity:dom";
    }
    return null;
  }

  // 2. Extract Enums
  const enums = {};
  for (let i = 0; i < docnames.length; i++) {
    const doc = docnames[i];
    if (doc.startsWith("enums/")) {
      const name = doc.replace("enums/", "");
      const mod = resolveModuleForSymbol(name) || "affinity:common";
      enums[name] = {
        name,
        docIndex: i,
        docPath: doc,
        module: mod,
      };
    }
  }

  // 3. Extract Classes / Structs
  const structs = {};
  for (let i = 0; i < docnames.length; i++) {
    const doc = docnames[i];
    if (doc.startsWith("classes/")) {
      const name = doc.replace("classes/", "");
      const mod = resolveModuleForSymbol(name) || "affinity:common";
      structs[name] = {
        name,
        docIndex: i,
        docPath: doc,
        module: mod,
        methods: [],
      };
    }
  }

  // Check if objects dictionary contains methods on structs (e.g., CurveNode.assign, Rectangle.clone)
  for (const [prefix, methodList] of Object.entries(objects)) {
    if (structs[prefix]) {
      for (const item of methodList) {
        structs[prefix].methods.push(item[4]);
      }
    }
  }

  // 4. Extract Handles
  const handles = {};
  for (let i = 0; i < docnames.length; i++) {
    const doc = docnames[i];
    if (doc.startsWith("handles/")) {
      const name = doc.replace("handles/", "");
      const baseApi = name.replace(/Handle$/, "Api");
      const mod =
        resolveModuleForSymbol(baseApi) ||
        resolveModuleForSymbol(name) ||
        "affinity:dom";
      handles[name] = {
        name,
        docIndex: i,
        docPath: doc,
        module: mod,
      };
    }
  }

  // 5. Extract Api Objects and Methods
  const apis = {};
  for (let i = 0; i < docnames.length; i++) {
    const doc = docnames[i];
    if (doc.startsWith("apis/")) {
      const parts = doc.split("/");
      if (parts.length === 3 && parts[2] !== "index") {
        const apiName = parts[1];
        const methodName = parts[2];
        if (!apis[apiName]) {
          const mod = resolveModuleForSymbol(apiName) || "affinity:dom";
          apis[apiName] = {
            name: apiName,
            module: mod,
            methods: {},
          };
        }
        apis[apiName].methods[methodName] = {
          name: methodName,
          docIndex: i,
          docPath: doc,
        };
      }
    }
  }

  // Cross-reference with objects dictionary in case any methods only appear in objects
  for (const [prefix, methodList] of Object.entries(objects)) {
    if (prefix && prefix.endsWith("Api")) {
      if (!apis[prefix]) {
        const mod = resolveModuleForSymbol(prefix) || "affinity:dom";
        apis[prefix] = {
          name: prefix,
          module: mod,
          methods: {},
        };
      }
      for (const item of methodList) {
        const methodName = item[4];
        if (!apis[prefix].methods[methodName]) {
          apis[prefix].methods[methodName] = {
            name: methodName,
            docIndex: item[0],
            docPath: docnames[item[0]],
          };
        }
      }
    }
  }

  // 6. Build Module-Centric View
  const moduleCatalog = {};
  for (const mod of modules) {
    moduleCatalog[mod.id] = {
      name: mod.name,
      id: mod.id,
      docIndex: mod.docIndex,
      docPath: mod.docPath,
      enums: {},
      structs: {},
      handles: {},
      apis: {},
    };
  }

  for (const [name, e] of Object.entries(enums)) {
    if (moduleCatalog[e.module]) {
      moduleCatalog[e.module].enums[name] = e;
    }
  }
  for (const [name, s] of Object.entries(structs)) {
    if (moduleCatalog[s.module]) {
      moduleCatalog[s.module].structs[name] = s;
    }
  }
  for (const [name, h] of Object.entries(handles)) {
    if (moduleCatalog[h.module]) {
      moduleCatalog[h.module].handles[name] = h;
    }
  }
  for (const [name, a] of Object.entries(apis)) {
    if (moduleCatalog[a.module]) {
      moduleCatalog[a.module].apis[name] = a;
    }
  }

  const parsedOutput = {
    metadata: {
      generatedAt: new Date().toISOString(),
      source: /^https?:\/\//i.test(source) ? source : "Sphinx searchindex.js",
      counts: {
        modules: modules.length,
        enums: Object.keys(enums).length,
        structs: Object.keys(structs).length,
        handles: Object.keys(handles).length,
        apiObjects: Object.keys(apis).length,
        apiMethods: Object.values(apis).reduce(
          (acc, a) => acc + Object.keys(a.methods).length,
          0,
        ),
      },
    },
    modules: moduleCatalog,
    all: {
      enums,
      structs,
      handles,
      apis,
    },
  };

  return parsedOutput;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    path.resolve(new URL(import.meta.url).pathname)
) {
  const target = process.argv[2] || DEFAULT_DOCS_URL;
  console.log(
    `[parse-sdk-index] Fetching and parsing SDK index from ${target}...`,
  );
  const result = await parseSearchIndex(target);
  fs.writeFileSync(PARSED_DOCS_OUTPUT, JSON.stringify(result, null, 2));
  console.log("Successfully generated SDK catalog JSON at", PARSED_DOCS_OUTPUT);
  console.log("Catalog stats:", result.metadata.counts);
}
