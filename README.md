# affinity-script-types

This package contains TypeScript definitions for the [Affinity v3](https://affinity.serif.com/) scripting SDK, generated automatically from source files included in Affinity's application bundle.

## What it does

This package ships **pre-generated TypeScript definitions** inside the package itself (`node_modules/affinity-script-types/types/`):

- 62 modular `.d.ts` declarations covering Affinity's JSLib.
- 19 native `affinity:*` module definitions with exact enums, parameter ranges, and struct types.
- A bundled ambient reference.

When you run `npm install` (or `pnpm add`), the `postinstall` script automatically creates a `jsconfig.json` in your workspace root (if one doesn't exist) with path mappings that point to the package's type definitions:

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

Because the type definitions live inside `node_modules`, your repository remains clean — no 60+ `.d.ts` files dumped into your project root.

## Usage

```bash
cd my-affinity-scripts
npm install affinity-script-types
```

Open `my-affinity-scripts` in Zed, VS Code, Cursor, or any LSP-enabled editor as your workspace root. Autocomplete, hover signatures, and type checking work immediately.

### Initializing or restoring `jsconfig.json`

If you installed with `--ignore-scripts`, or deleted your `jsconfig.json`, run:

```bash
npx affinity-types init
# or overwrite an existing config
npx affinity-types init --force
```

### Regenerating types locally (optional)

The types shipped with the package are pre-built from Affinity's SDK. If Affinity releases an update and you want to regenerate types directly from your locally installed app bundle:

```bash
npx affinity-types
```

Flags:

| Flag               | Default                                               | Purpose                                      |
| ------------------ | ----------------------------------------------------- | -------------------------------------------- |
| `init`             | —                                                     | Create/restore `jsconfig.json` in project    |
| `--force`          | `false`                                               | Overwrite existing `jsconfig.json`           |
| `--out-dir <path>` | Current directory / `~/AffinityScripts`               | Output directory for regenerated types files |
| `--jslib <path>`   | `/Applications/Affinity.app/Contents/Resources/JSLib` | Override the JSLib source directory          |

## Requirements

- **To use types:** Node.js and any editor or AI agent harness supporting TypeScript / JavaScript LSP (VS Code, Zed, Cursor, Claude Code, etc.). Affinity does *not* need to be installed or running.
- **To regenerate types from local app bundle (optional):** Affinity by Canva installed at the default macOS path (or passed via `--jslib`).
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
