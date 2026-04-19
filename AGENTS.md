## Learned User Preferences
- Often pushes directly to `main` rather than using issue-named branches unless a branch is explicitly requested; when using a branch, use `gh-<issue-number>/<short-kebab-description>`.
- Use conventional commit messages such as `feat(scope): short description` or `chore(scope): short description`.
- Automatic updates to `AGENTS.md` and continual-learning hook state from the memory workflow are acceptable when they capture durable preferences or facts.
- When GitHub issues are the agreed spec, use GitHub tooling to read issue bodies before implementing if the user asks for that alignment step (do not rely only on pasted handoffs).
- Newsletter or other secondary signup forms can trail the main `/contact` work until the user prioritizes parity.

## Learned Workspace Facts
- This workspace is a Next.js site that started from a Tailwind Plus template.
- The main product direction here is a full Athena Digital rebrand that preserves existing site logic and functionality while changing branding, copy, and design.
- GitHub issues for the `athena-digital` repo (parent tracker and children) are the source of truth for which rebrand tasks are complete; local planning docs may be stale and should be reconciled with GitHub.
- The npm package name in `package.json` is `athena-digital`; the canonical GitHub remote is `TomoFromEarth/athena-digital`, and the local checkout folder may use a different name (e.g. `studio-ts`).
- During rebrand placeholder passes, aim to reference each asset under `src/images/athena/` at least once so example imagery is visibly used; final art direction may still change later.
- Template-removal and QA-style passes (e.g. clearing leftover template assets or strings) are scoped separately from ongoing copy and image placement polish, which the user prefers to handle in follow-up issues after the core rebrand milestone.
- `AGENTS.md` and `.cursor/hooks/state/` continual-learning index/state files are tracked in git and can conflict on pull or rebase.
- shadcn/ui is not integrated in this repo yet (no `components.json`, no `src/components/ui` tree); the contact form and similar UI use bespoke components such as the floating-label `TextInput` pattern.
