## Learned User Preferences
- Often pushes directly to `main` rather than using issue-named branches unless a branch is explicitly requested; when using a branch, use `gh-<issue-number>/<short-kebab-description>`.
- Use conventional commit messages such as `feat(scope): short description` or `chore(scope): short description`.

## Learned Workspace Facts
- This workspace is a Next.js site that started from a Tailwind Plus template.
- The main product direction here is a full Athena Digital rebrand that preserves existing site logic and functionality while changing branding, copy, and design.
- GitHub issues for the `athena-digital` repo (parent tracker and children) are the source of truth for which rebrand tasks are complete; local planning docs may be stale and should be reconciled with GitHub.
- `AGENTS.md` and `.cursor/hooks/state/` continual-learning index/state files are tracked in git and can conflict on pull or rebase.
