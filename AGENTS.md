# Project

**Plumeria** — A React + Vite static website for Plumeria Home guesthouse in Chiang Mai, Thailand.

## DUAL-LAYER PERSISTENT MEMORY ARCHITECTURE

Three distinct memory subsystems. Isolate read/write by data origin and scope.

### 1. opencode-mem (Episodic Session Memory)
- **Purpose:** Session context, user preferences, multi-turn transactions, error-solution patches
- **Data Origin:** Direct commands, terminal failures, code style decisions
- **Read when:** Starting a session, recalling past decisions, debugging repeats
- **Write when:** User says "remember this", pattern resolved, decision finalized
- `memory({ mode: "search", query })` / `memory({ mode: "add", content })` / `memory({ mode: "list", limit })` / `memory({ mode: "profile" })`

### 2. graph-memory (Static Codebase Graph) — port 3333
- **Purpose:** Structural class/function hierarchies, AST code mapping, dependency trees
- **Data Origin:** Source code tree — files, imports, cross-module dependencies
- **Read when:** Blast-radius analysis, multi-file refactoring, dependency navigation
- **Write when:** Code structure changes (manual trigger)
- `notes_search` / `notes_create` / `notes_create_link` / `tasks_list` / `tasks_create`

### 3. opencode-brain (Institutional/Cross-Source Memory)
- **Purpose:** Global truth, design docs, cross-repo knowledge, architecture decisions
- **Data Origin:** Markdown notes, design specs, architectural documents, team comms
- **Read when:** Investigating business logic, validating cross-repo specs, looking up architecture docs
- **Write when:** Finalizing multi-file plans, recording architecture choices, using `/brain-remember`
- `brain_search` / `brain_capture` / `brain_lookup` / `brain_graph`
- Slash commands: `/brain-remember`, `/brain-search`, `/brain-lookup`, `/brain-graph`

### Retrieval Triage Matrix
| Intent | Primary Subsystem | Tool |
|--------|-------------------|------|
| Recalling past session decisions or syntax preferences | opencode-mem | `memory({ mode: "search" })` |
| Analyzing dependencies before refactoring | graph-memory | `notes_search` |
| Cross-referencing with architecture docs or external repos | opencode-brain | `brain_search` |

### Brain-First Lookup Order (MUST follow before any web search)
1. `memory({ mode: "search", query })` → 2. `brain_search` → 3. `notes_search` → 4. web search (serper/exa/firecrawl/tavily)
After learning: `memory({ mode: "add" })` → `brain_capture` → `notes_create + notes_create_link`

### Guardrails
1. **No duplicate writes** — don't commit code structure maps into opencode-mem
2. **Deterministic-first** — prefer graph-memory for structural queries before vector search
3. **Respect read-only scopes** — suppress automated doc parsing when flagged read-only

## Architecture

SPA with manual page routing via `activePage` state in `src/App.jsx`. Pages: Home, Rooms, Vibes, Explore, Contact in `src/pages/`. All content is static data in `src/data/siteData.js`. Tailwind CSS 4 with custom brand tokens in `src/index.css`.

## Key Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Root component, page routing |
| `src/data/siteData.js` | Single source of truth for all content |
| `src/index.css` | Tailwind config, brand tokens, animations |
| `vite.config.js` | Vite + React + Tailwind plugins |
| `.oxlintrc.json` | Linter rules |

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Oxlint |
