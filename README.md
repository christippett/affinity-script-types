# affinity-script-types

This package contains TypeScript definitions for the [Affinity v3](https://affinity.serif.com/) scripting SDK, generated automatically from source files included in Affinity's application bundle.

## What it does

`npm install` (or `pnpm add`) runs a `postinstall` script that reads the JSLib sources shipped inside the Affinity application and adds the following files to your project's workspace:

- `types/` — 62 modular `.d.ts` declarations, the 19 native `affinity:*`
  modules, and a bundled reference.
- `jsconfig.json` — a `paths` mapping that makes `require('/document')`,
  `require('/geometry.js')` and `require('affinity:common')` resolve.

Open the project folder as your editor workspace root and your `.js` scripts get autocomplete, hover signatures and type checking immediately.

## Usage

```bash
cd my-affinity-scripts
npm install affinity-script-types     # generates types/ + jsconfig.json
```

Then open `my-affinity-scripts` in Zed, VS Code, or Cursor as the workspace root. No further configuration.

### Regenerating manually

```bash
npx affinity-types
# or
node node_modules/affinity-script-types/generate-types.mjs
```

Flags:

| Flag               | Default                                               | Purpose                                     |
| ------------------ | ----------------------------------------------------- | ------------------------------------------- |
| `--out-dir <path>` | the directory `npm install` was run from              | Where to write `types/` and `jsconfig.json` |
| `--jslib <path>`   | `/Applications/Affinity.app/Contents/Resources/JSLib` | Override the JSLib source directory         |

## How it works

`generate-types.mjs` parses Affinity's internal JSLib source files and combines them with captured snapshots of the native `affinity:*` namespace (enums, structs, `*Api` method names, numeric bounds, and fixed array sizes with element types) shipped alongside this package, plus hand-pinned type overrides.

## Requirements

- Affinity by Canva installed at the default macOS path (override with
  `--jslib` otherwise).
- Node.js (for the install-time generator). The generated `.d.ts` files
  themselves are consumed by your editor's TypeScript language server — no Node
  is needed at edit time.

If Affinity is not installed (or its `JSLib` directory is missing or empty), the `postinstall` still exits `0` so your `npm install` never fails. It prints a message explaining that the package is inert without a local Affinity install — it has no runtime functionality and can be uninstalled — plus the command to generate types later (`npx affinity-types` once Affinity is present).

## AI agents: LSP vs. MCP-only

When using an AI coding agent (such as Claude Code, Cursor, or harnesses with Language Server Protocol tools), installing this package gives the agent immediate, authoritative code intelligence through its local TypeScript language server rather than querying Affinity's MCP server across multiple turns.

| Capability | Static Types + LSP (`affinity-script-types`) | MCP Server alone (`affinity-mcp`) |
|---|---|---|
| **Feedback loop** | Instant in-process diagnostics (`tsc`, hover signatures, jump-to-definition) | Multi-second LLM round trips per tool call (`search_sdk_hints`, doc lookups) |
| **Error detection** | Catches typos, missing properties, and wrong types *before* script execution | Errors only surface at runtime when script is evaluated in the app |
| **App dependency** | Affinity does not need to be running while authoring or editing | Affinity app must be running, unlocked, and responsive |
| **Token & context cost** | Zero token overhead for local type checking; compact JSDoc signatures on hover | Dumps verbose SDK doc chunks and hint snippets into model context |
| **Safety & state** | Purely static; no document modification while iterating on code | Testing scripts via MCP `execute_script` can mutate or corrupt active documents |

### The ideal workflow

Use both together:

1. **LSP + `affinity-script-types`** guides the authoring loop: the agent autocompletes exact method names across the 62 JSLib modules, reads parameter bounds (`/** [0.0, 1.0] */`) and array types (`SelectiveColourWeights[]`), and resolves diagnostics before saving.
2. **Affinity MCP** executes the finished script against the live application (`execute_script`) and reads active document state.
