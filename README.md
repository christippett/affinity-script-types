# Affinity Type Definitions

This repository includes a set of TypeScript definition files for Affinity's scripting SDK.

Type definitions are generated programmatically by combining Affinity's official `affinity.d.ts` native SDK declarations with AST parsing of the `JSLib` wrapper modules packaged inside Affinity's application bundle and live runtime introspection via Affinity's MCP server.

All told, the package ships:

- **71 modular JSLib `.d.ts` declarations** covering the high-level scripting modules (`/document`, `/nodes`, `/geometry`, `/story`, `/dialog`, `/network`, etc.).
- **20 native `affinity:*` module declarations** with 453 nominal `*Handle` interfaces, 146 runtime-augmented enums, 56 structs, and 465 `*Api` interfaces (4,461 methods) enriched with JSDoc parameter and struct bounds.

## How This Compares to Affinity's Official `affinity.d.ts`

Affinity's official `affinity.d.ts` only declares the low-level C++ binding layer (`affinity:*` modules, opaque `*Handle` interfaces, and raw `*Api` procedural objects). In practice, Affinity scripts are written against the object-oriented **`JSLib` wrapper modules** (`require('/document.js')`, `require('/nodes.js')`, `require('/geometry.js')`, etc.), which are plain `.js` files inside the app bundle with no official `.d.ts` definitions.

| Feature | Official `affinity.d.ts` | `affinity-script-types` |
| --- | --- | --- |
| **Native `affinity:*` modules** | 20 modules, 453 `*Handle` interfaces, 465 `*Api` interfaces | 100% of the official native declarations included verbatim |
| **JSLib `/<module>` declarations** | Not included (`require('/document.js')` is untyped) | **All 71 `/<module>` wrapper modules** (`Document`, `Node`, `Story`, `Dialog`, `Collection<T>`, etc.) |
| **Object-oriented wrapper typing** | Raw `*Api` functions take and return opaque `*Handle` markers | Propagates official `*Api` signatures onto JSLib classes (`Document`, `Glyph`, `Curve`, `Promise<T>`, `Collection<T>`) |
| **Augmented native structs** | Bare struct fields only; no constructors (`Point`, `Rectangle`, `Transform`, `Vector`, `CubicBezier`, `StoryRange`, `UnitValue`) | Merges JSLib prototype/static helper methods (`.translate()`, `.scale()`, `.reversed`, `Point.zero`, etc.) and constructors onto the native structs |
| **Runtime enum capabilities** | Bare TypeScript `enum` declarations with member names only | Preserves TS `enum` assignability while merging runtime `AffinityEnumValue` methods (`.value`, `.equals()`, `Enum.keys`, `Enum.values`, `Enum.parse()`) and exact numeric values |
| **Global host environment** | Not included | Declares global functions (`alert`, `confirm`, `prompt`, `quit`), `environment`, and `TextDecoder` |
| **Numeric parameter & struct bounds** | Not included | JSDoc range (`/** [0.0, 1.0] */`) and fixed array size annotations on `*Api` methods and struct properties |

## Usage

Install the `affinity-script-types` package in the directory where you develop your scripts prior to saving them into Affinity.

```bash
npm install affinity-script-types --save-dev
```

The package includes a `postinstall` script whose only function is to create the file `jsconfig.json` in the workspace root (if it doesn't already exist). You can also run:

```bash
npm run init
```

If you'd prefer to create the configuration file yourself instead of automatically via npm's `postinstall`, refer to the template below and save it as `jsconfig.json` in the root of your project (or `tsconfig.json` if you intend to write scripts in TypeScript):

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "checkJs": true,
    "allowJs": true,
    "noEmit": true,
    "skipLibCheck": true,
    "types": [],
    "paths": {
      "/*": ["./node_modules/affinity-script-types/types/*"],
      "/*.js": ["./node_modules/affinity-script-types/types/*"]
    }
  },
  "include": [
    "**/*.js",
    "**/*.ts",
    "./node_modules/affinity-script-types/types/**/*.d.ts"
  ]
}
```

## Data sources

The type generator (`generate-types.mjs`) draws from the following inputs:

| Source | Where | Purpose |
| --- | --- | --- |
| Official native `.d.ts` | `resources/affinity.d.ts` (`--official-dts` overrides) | Canonical foundation for all 20 `affinity:*` modules, 453 nominal `*Handle` interfaces, 146 enums, 56 structs, and 465 `*Api` interfaces |
| JSLib sources | `/Applications/Affinity.app/Contents/Resources/JSLib/*.js` (`--jslib` overrides) | High-level classes, prototype augmentations, getters/setters, and module exports — parsed directly and typed by propagating official `*Api` signatures |
| Enum catalog | `resources/affinity_catalog.json` | Runtime numeric values for `affinity:*` enum members |
| Param ranges | `resources/affinity_param_ranges.json` | Numeric bounds for native `*Api` method parameters (emitted as JSDoc) |
| Struct ranges | `resources/affinity_struct_ranges.json` | Numeric bounds for native struct properties (emitted as JSDoc) |
| Array sizes | `resources/affinity_struct_array_sizes.json` | Fixed array sizes and element types for struct properties (emitted as JSDoc) |

The `affinity_*.json` catalogs are captured snapshots of the live `affinity:*` runtime and SDK documentation (`param_ranges`, `struct_ranges`, and `struct_array_sizes` come from Affinity's MCP documentation topics).

## AI agents: LSP vs. MCP-only

When paired with an AI agent that supports LSP usage (Pi, Claude Code, Cursor, etc), the types included in this package are able to provide the agent immediate, authoritative code intelligence through its local TypeScript language server rather than querying Affinity's MCP server across multiple turns.

| Capability | Static Types + LSP (`affinity-script-types`) | MCP Server alone (`affinity-mcp`) |
| --- | --- | --- |
| **Feedback loop** | Instant in-process diagnostics (`tsc`, hover signatures, jump-to-definition) | Multi-second LLM round trips per tool call (`search_sdk_hints`, doc lookups) |
| **Error detection** | Catches typos, missing properties, and wrong types _before_ script execution | Errors only surface at runtime when script is evaluated in the app |
| **App dependency** | Affinity does not need to be running while authoring or editing | Affinity app must be running, unlocked, and responsive |
| **Token & context cost** | Zero token overhead for local type checking; compact JSDoc signatures on hover | Dumps verbose SDK doc chunks and hint snippets into model context |
| **Safety & state** | Purely static; no document modification while iterating on code | Testing scripts via MCP `execute_script` can mutate or corrupt active documents |

### The ideal workflow

Use both together:

1. **LSP + `affinity-script-types`** guides the authoring loop: the agent autocompletes exact method names across the 71 JSLib modules, reads parameter bounds (`/** [0.0, 1.0] */`) and array types (`SelectiveColourWeights[]`), and resolves diagnostics before saving.
2. **Affinity MCP** executes the finished script against the live application (`execute_script`) and reads active document state.
