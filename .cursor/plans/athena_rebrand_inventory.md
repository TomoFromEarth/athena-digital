# Athena Digital Rebrand Inventory

This document began as the deliverable for GitHub issue `#2` (*Audit all rebrand touchpoints and create a replacement checklist*). It remains a **working map** of brand surfaces in the codebase.

**GitHub is the source of truth** for which rollout issues are complete. Reconcile this file when the tracker or the repo changes.

**Parent tracker:** [#1 Tracker: Athena Digital rebrand rollout](https://github.com/TomoFromEarth/athena-digital/issues/1)

## Rollout status (mirror GitHub)

| Issue | Title | Notes |
|-------|--------|--------|
| [#2](https://github.com/TomoFromEarth/athena-digital/issues/2) | Audit all rebrand touchpoints and create a replacement checklist | Completed — this inventory |
| [#3](https://github.com/TomoFromEarth/athena-digital/issues/3) | Replace global brand shell copy across layout, nav, and footer | Completed |
| [#4](https://github.com/TomoFromEarth/athena-digital/issues/4) | Replace Athena logo, favicon, and root metadata defaults | Completed |
| [#8](https://github.com/TomoFromEarth/athena-digital/issues/8) | Rewrite contact and remote-business trust surfaces for Athena Digital | Completed |
| [#5](https://github.com/TomoFromEarth/athena-digital/issues/5) | Rewrite the homepage for Athena Digital positioning and proof | Completed |
| [#6](https://github.com/TomoFromEarth/athena-digital/issues/6) | Rewrite the About page around Athena Digital studio credibility | Completed |
| [#7](https://github.com/TomoFromEarth/athena-digital/issues/7) | Rewrite the Process page to match Athena Digital service delivery | Completed |
| [#9](https://github.com/TomoFromEarth/athena-digital/issues/9) | Replace the Work section with lean real Athena proof content | Completed |
| [#10](https://github.com/TomoFromEarth/athena-digital/issues/10) | Replace the Blog section with initial Athena authority content | Completed |
| [#11](https://github.com/TomoFromEarth/athena-digital/issues/11) | Apply Athena Digital light retheme (imagery scope: full-color assets, collage, no grayscale on replaced imagery; palette/type left as-is) | Completed |
| [#12](https://github.com/TomoFromEarth/athena-digital/issues/12) | Run final Athena rebrand QA and remove leftover template references | Completed in repo — close on GitHub when verified |

Checklist sections below mix **historical audit notes** with **current file pointers**. If a line conflicts with the repo, **the repo wins**.

## Snapshot (current)

- Routing: Next.js App Router; static `page.tsx` routes; MDX `page.mdx` for `blog/*` and `work/*` via `@next/mdx` and layout wrappers in `next.config.mjs`.
- Marketing routes: `home`, `about`, `process`, `contact`, `work`, `blog`, plus `not-found`.
- Work MDX: `src/app/work/tomo-creator-collaboration/page.mdx` (spotlight; optional `logo` in `CaseStudy` type).
- Blog MDX: `content-rhythm-busy-schedules`, `community-voice-comments-dms`, `trends-without-losing-the-plot`.
- Example photography: `src/images/athena/*` (each file referenced at least once for styling demos).
- Brand marks: `src/images/brand/athena-digital-logo.png`, `athena-digital-mark.png`; icons `src/app/icon.png`, `src/app/apple-icon.png`.
- Removed from repo (template cleanup): fictional client SVG tree under `src/images/clients`, template team headshots under `src/images/team`, unused stock `laptop.jpg` / `meeting.jpg` / `whiteboard.jpg`.

## Grouped checklist (maintenance)

### Global and shared brand shell

- [x] `src/app/layout.tsx` — root metadata defaults
- [x] `src/components/RootLayout.tsx` — nav / CTA
- [x] `src/components/Footer.tsx`
- [x] `src/components/Logo.tsx` — PNG marks in `src/images/brand/`
- [x] `src/components/ContactSection.tsx`
- [x] `src/components/Offices.tsx` — remote framing (no fake offices)
- [x] `src/components/SocialMedia.tsx` — confirm Instagram when owned

### Reusable containers

- [x] `src/app/blog/wrapper.tsx` — article header; related title “More from the blog”
- [x] `src/app/work/wrapper.tsx` — “Work spotlight” / metadata strip / “More work”
- [x] `src/components/PageLinks.tsx` — shared “Read more” (copy pass deferred post-rebrand if desired)
- [x] `src/components/MDXComponents.tsx` — callout label “Quick note” (formerly template “Top tip”)

### Page-level

- [x] `src/app/page.tsx` — homepage
- [x] `src/app/about/page.tsx`
- [x] `src/app/process/page.tsx`
- [x] `src/app/contact/page.tsx`
- [x] `src/app/work/page.tsx`
- [x] `src/app/blog/page.tsx`
- [x] `src/app/not-found.tsx` — Athena-specific 404 copy

### MDX

- [x] Work spotlight(s) under `src/app/work/`
- [x] Blog articles under `src/app/blog/`

### Assets

- [x] Logo / brand PNGs
- [x] Favicon / apple icon
- [x] `src/images/athena/*` — wired across home, process, about, contact, work, blog as needed
- [ ] Optional: dedicated composed OG share image (text metadata already set)
- [ ] Social handles: confirm when live (Instagram placeholder may remain)

## Duplicate / honesty risks (ongoing)

- Work spotlight testimonial may mirror homepage quote when sourced from the same `homepage-testimonial` content — intentional alignment; keep wording honest.
- Newsletter UI in footer: strategy TBD (copy-only vs repurposed).

## Audit principles (unchanged)

1. Content is repo-local; consistency is the main engineering risk.
2. Do not inflate scale, offices, team, or client proof.
3. Follow-up copy polish may be tracked in new issues after the rebrand project closes.

## Suggested handoff after `#12`

- Close [#12](https://github.com/TomoFromEarth/athena-digital/issues/12) on GitHub after you confirm CI/build and any final human QA.
- Close [#1](https://github.com/TomoFromEarth/athena-digital/issues/1) when the full tracker is done.
- New issues for post-launch copy tweaks, OG image, or social link confirmation.
