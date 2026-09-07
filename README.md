# Affinity Type Definitions

This repository includes a set of TypeScript definition files for Affinity's scripting SDK.

Type definitions are generated programmatically from source files located in the `JSLib` directory included in Affinity's application bundle, as well as from live introspection of the script runtime environment via Affinity's MCP server.

All told, there are approximately:

- 62 modular `.d.ts` declarations covering parts of Affinity's scripting SDK (`/document`, `/geometry`, `/dialog`, etc).
- 19 native `affinity:*` module definitions with exact enums, parameter ranges, and struct types.

## Usage

Install the `affinity-script-types` package in the directory where you develop your scripts prior to saving them into Affinity.

```bash
npm install affinity-script-types --save-dev
```

The package includes a `postinstall` script that's only function is to create the file `jsconfig.json` in the workspace root (if it doesn't already exist). This file includes the path mappings to the type definitions installed by this package and configures their use by IDEs and language servers.

If you'd prefer not to allow the `postinstall` script to generate this file for you automatically, you can instead manually configure the file yourself using the following template:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "preserve",
    "moduleResolution": "bundler",
    "checkJs": true,
    "allowJs": true,
    "noEmit": true,
    "types": [],
    "paths": {
      "/*": ["./node_modules/affinity-script-types/types/*"],
      "/*.js": ["./node_modules/affinity-script-types/types/*"]
    }
  },
  "include": ["**/*.js", "./node_modules/affinity-script-types/types/**/*.d.ts"]
}
```

## Data sources

The type generator draws from the following inputs:

| Source | Where | Purpose |
| --- | --- | --- |
| JSLib sources | `/Applications/Affinity.app/Contents/Resources/JSLib/*.js` (read at run time; `--jslib` overrides) | Classes, methods, getters/setters, exports — parsed directly |
| Enum catalog | `affinity_catalog.json` | Exact `affinity:*` enum members and numeric values |
| Struct catalog | `affinity_structs.json` | Native struct field names (top-level exports + nested structs like `ColourStop`, `SelectiveColourWeights`) |
| Export inventory | `affinity_exports.json` | Non-enum/non-struct export names per native module |
| Api method catalog | `affinity_api.json` | `*Api` object method names (380 objects, ~3.5k methods) |
| Param ranges | `affinity_param_ranges.json` | Numeric bounds for native `*Api` method parameters |
| Struct ranges | `affinity_struct_ranges.json` | Numeric bounds for struct properties |
| Array sizes | `affinity_struct_array_sizes.json` | Fixed array sizes **and element types** for struct properties |
| TypeScript overrides | `overrides/*.d.ts` | Hand-authored `.d.ts` definitions and interfaces for members inference can't reach |

The `affinity_*.json` catalogs are captured snapshots of the live `affinity:*` namespace (the three `param_ranges`/`struct_ranges`/`struct_array_sizes` files come straight from Affinity's MCP `read_sdk_documentation_topic`).

Manual overrides and supplementary interfaces live directly in `overrides/*.d.ts`.

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

1. **LSP + `affinity-script-types`** guides the authoring loop: the agent autocompletes exact method names across the 62 JSLib modules, reads parameter bounds (`/** [0.0, 1.0] */`) and array types (`SelectiveColourWeights[]`), and resolves diagnostics before saving.
2. **Affinity MCP** executes the finished script against the live application (`execute_script`) and reads active document state.
