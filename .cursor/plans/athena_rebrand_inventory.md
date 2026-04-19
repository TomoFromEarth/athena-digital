# Athena Digital Rebrand Inventory

This document is the implementation artifact for GitHub issue `#2`:
`Audit all rebrand touchpoints and create a replacement checklist`.

It inventories every meaningful rebrand surface in the current Tailwind Plus template so the rest of the rollout can execute systematically without changing logic or functionality.

## Rollout status (GitHub is source of truth)

**Parent tracker:** [#1 Tracker: Athena Digital rebrand rollout](https://github.com/TomoFromEarth/athena-digital/issues/1)

| Issue | Title | Status |
|-------|--------|--------|
| [#2](https://github.com/TomoFromEarth/athena-digital/issues/2) | Audit all rebrand touchpoints and create a replacement checklist | Completed |
| [#3](https://github.com/TomoFromEarth/athena-digital/issues/3) | Replace global brand shell copy across layout, nav, and footer | Completed |
| [#4](https://github.com/TomoFromEarth/athena-digital/issues/4) | Replace Athena logo, favicon, and root metadata defaults | Completed |
| [#8](https://github.com/TomoFromEarth/athena-digital/issues/8) | Rewrite contact and remote-business trust surfaces for Athena Digital | Completed |
| [#5](https://github.com/TomoFromEarth/athena-digital/issues/5) | Rewrite the homepage for Athena Digital positioning and proof | Open |
| [#6](https://github.com/TomoFromEarth/athena-digital/issues/6) | Rewrite the About page around Athena Digital studio credibility | Open |
| [#7](https://github.com/TomoFromEarth/athena-digital/issues/7) | Rewrite the Process page to match Athena Digital service delivery | Open |
| [#9](https://github.com/TomoFromEarth/athena-digital/issues/9) | Replace the Work section with lean real Athena proof content | Open |
| [#10](https://github.com/TomoFromEarth/athena-digital/issues/10) | Replace the Blog section with initial Athena authority content | Open |
| [#11](https://github.com/TomoFromEarth/athena-digital/issues/11) | Apply Athena Digital light retheme to shared styles and components | Open |
| [#12](https://github.com/TomoFromEarth/athena-digital/issues/12) | Run final Athena rebrand QA and remove leftover template references | Open |

Checklist sections below retain **audit-time notes** for context. Items **completed in `#3` / `#4` / `#8`** are marked `[x]` with the issue reference. Items not yet done stay `[ ]`.

## Stakeholder alignment for upcoming work (esp. `#5`)

- **Proof / client strip on Home:** Remove all fictional client logos and fictional proof copy. Replace with honest placeholder or lean copy until real proof exists; final proof density may land with `#9`.
- **Testimonial block:** Keep the section; a **real** client quote will be supplied (stakeholder is a client). Expect to add more quotes over time.
- **Voice:** **Brand-forward “Athena Digital”** on the homepage for now (not founder-first copy).
- **Work / case-study links from Home:** Open to **outbound links** (e.g. client Instagram or other public channels) as honest “see the work” proof until MDX work entries are real in `#9`. Exact pattern TBD during `#5` / `#9`.

## Snapshot

- Routing model: Next.js App Router with static `page.tsx` routes plus MDX-driven `blog` and `work` entries.
- Core rebrand surfaces: shared shell, static marketing pages, MDX entries, metadata, SVG/logo assets, imported imagery, and trust/contact details.
- Content depth at audit time:
  - `6` static marketing/index pages: `home`, `about`, `process`, `contact`, `work`, `blog`
  - `1` 404 page: `src/app/not-found.tsx`
  - `2` MDX wrapper layouts: `src/app/blog/wrapper.tsx`, `src/app/work/wrapper.tsx`
  - `3` blog posts: `a-short-guide-to-component-naming`, `3-lessons-we-learned-going-back-to-the-office`, `future-of-web-development`
  - `3` work case studies: `family-fund`, `unseal`, `phobia`
  - `32` client SVG logo/logomark assets under `src/images/clients`

## Grouped Checklist

### 1. Global and shared brand shell

- [x] `src/app/layout.tsx` — **#4**
  - Root metadata defaults updated for Athena Digital (title template, description, Open Graph / Twitter text).
  - Re-audit in `#12` for any page-level or leftover template strings.
- [x] `src/components/RootLayout.tsx` — **#3** (header logo sizing tweaked post–#4)
  - Nav, CTA, and mobile support copy reoriented to Athena; no redo in `#5` unless something regresses.
- [x] `src/components/Footer.tsx` — **#3**
  - Footer nav, newsletter copy, legal line, and fictional hard-coded work links addressed per shell rebrand.
- [x] `src/components/Logo.tsx` — **#4**
  - Uses **canonical PNG** assets (`athena-digital-mark.png`, `athena-digital-logo.png`), not inline SVG (prior Canva “SVG” was raster-in-SVG).
- [x] `src/components/ContactSection.tsx` — **#3**
  - Shared CTA and section copy updated to Athena-specific wording.
- [x] `src/components/Offices.tsx` — **#8**
  - Fake Copenhagen / Billund / Denmark office model removed; remote-studio framing (e.g. “Serving clients remotely”).
- [x] `src/components/SocialMedia.tsx` — **#8**
  - Reduced to agreed placeholder Instagram (`https://instagram.com/athenadigital`); confirm when owned.

### 2. Reusable content containers and hidden template copy

- [ ] `src/app/blog/wrapper.tsx`
  - Shared article header pattern
  - Repeated label: `by {author}`
  - Section title: `More articles`
- [ ] `src/app/work/wrapper.tsx`
  - Eyebrow label: `Case Study`
  - Shared metadata headings: `Client`, `Year`, `Service`
  - Section title: `More case studies`
- [ ] `src/components/PageLinks.tsx`
  - Repeated CTA label: `Read more`
  - Used to surface related articles/posts and can leak template tone if left unchanged
- [ ] `src/components/MDXComponents.tsx`
  - Shared callout label: `Top tip`
  - Shared MDX presentation rules should be checked against Athena tone and imagery style

### 3. Page-level rebrand surfaces

- [ ] `src/app/page.tsx` (`Home`)
  - Hero headline and supporting copy
  - Services section titles and descriptions
  - Client/proof strip heading
  - Homepage testimonial
  - Homepage case-study framing
  - Home client logo imports and hard-coded client list
- [ ] `src/app/about/page.tsx` (`About`)
  - Page intro, founder/studio story, culture copy, stats, and team roster
  - Team names, roles, and imported headshots are fully fictional/template-based
  - `From the blog` section intro should be aligned with Athena authority goals
- [ ] `src/app/process/page.tsx` (`Process`)
  - Three-step process copy (`Discover`, `Build`, `Deliver`)
  - Included-in-this-phase tags/lists
  - Embedded testimonial
  - Values section titles and descriptions
- [x] `src/app/contact/page.tsx` (`Contact`) — **#8**
  - Remote-studio positioning and real primary email: `julia@athenadigital.me`
  - Form remains UI-only; budget labels / productized copy may still warrant copy pass later
- [ ] `src/app/work/page.tsx` (`Work index`)
  - Eyebrow/title/body copy
  - Hard-coded client logo strip and supporting proof framing
  - Testimonial content referencing `Studio`
  - Case-study listing text depends on MDX exports and summaries
- [ ] `src/app/blog/page.tsx` (`Blog index`)
  - Eyebrow/title/body copy
  - Listing descriptions inherit from article metadata
  - Repeated CTA label: `Read more`
- [ ] `src/app/not-found.tsx` (`404`)
  - Headline and recovery CTA copy
  - Not wrapped in `RootLayout`, so it must be reviewed independently for brand tone

### 4. MDX content surfaces

#### Work case studies

- [ ] `src/app/work/family-fund/page.mdx`
  - `caseStudy` metadata object
  - Case-study title, description, summary, service, testimonial, stats, and inline narrative
- [ ] `src/app/work/unseal/page.mdx`
  - Same structure as above
- [ ] `src/app/work/phobia/page.mdx`
  - Same structure as above

#### Blog articles

- [ ] `src/app/blog/a-short-guide-to-component-naming/page.mdx`
  - `article` metadata object
  - Author identity and body topic
- [ ] `src/app/blog/3-lessons-we-learned-going-back-to-the-office/page.mdx`
  - `article` metadata object
  - Author identity and body topic
- [ ] `src/app/blog/future-of-web-development/page.mdx`
  - `article` metadata object
  - Author identity and body topic

### 5. Asset surfaces

- [x] `src/components/Logo.tsx` + `src/images/brand/*` — **#4**
  - Canonical marks: `athena-digital-mark.png`, `athena-digital-logo.png`
- [ ] `src/images/clients/**`
  - `32` SVG assets for fictional/template clients — **do not use in honest proof**; removal/replacement aligns with `#5` (home), `#9` (work), `#12` (sweep)
  - Includes light/dark logo and logomark variants
- [ ] Imported raster imagery referenced in page code and MDX
  - `src/app/page.tsx`: `@/images/laptop.jpg`
  - `src/app/process/page.tsx`: `@/images/laptop.jpg`, `@/images/meeting.jpg`, `@/images/whiteboard.jpg`
  - `src/app/about/page.tsx`: `@/images/team/*.jpg`
  - `src/app/blog/*/page.mdx`: local blog images such as `pilot.jpg`, `server.jpg`, `laptop.jpg`
  - `src/app/work/*/page.mdx`: local hero and portrait images such as `hero.jpg`, `jenny-wilson.jpg`
- [x] Favicon/app icon entry points — **#4**
  - `src/app/icon.png`, `src/app/apple-icon.png`; template `favicon.ico` removed per rollout
- [ ] Root/share **image** asset (dedicated OG preview graphic)
  - Text metadata for OG/Twitter added in **#4**; composed share image still optional / future
- [ ] Font assets
  - The template references Mona Sans in styling, but the font file did not surface in the filesystem search used for this audit

## Duplicate and hidden-risk inventory

### Duplication risks

- [ ] Case-study testimonials are duplicated
  - They appear inside the `caseStudy.testimonial` object and again inside the MDX body blockquote
- [x] Work links are duplicated — **partially addressed #3**
  - Footer no longer hard-links fictional case studies; still verify in `#12` alongside MDX listing
- [ ] Client proof is duplicated
  - Homepage/client strips and work-page client strips are hard-coded separately from case-study data — **#5** / `#9`
- [x] Contact/location trust is duplicated — **#3** / **#8**
  - Remote-studio pattern replaces fake multi-office language across shell + contact surfaces
- [ ] Shared CTA language is duplicated
  - `Read more` appears in `PageLinks` and the blog index

### Hidden template remnants

- [ ] `Studio` / developer-agency framing may still appear on **page bodies**, MDX, and indexes — **`#5`–`#7`, `#9`, `#10`, `#12`**
- [x] Denmark / fake office trust cues in **global shell and contact** — addressed in **#4** / **#8** (re-sweep in `#12`)
- [x] Footer newsletter copy — **#3** (iterate if strategy changes)
- [ ] 404 copy is isolated from the main layout and could be missed during broader page rewrites — **`#12`**
- [ ] Social links: Instagram placeholder acceptable for now — **confirm when live** — **`#8`** / `#12`

## Content and asset gaps that block implementation

- [x] Athena logo assets for header/footer — **#4** (PNG kit in `src/images/brand/`)
- [x] Favicon/app icon assets — **#4**
- [x] Primary public contact email — **#8** (`julia@athenadigital.me`)
- [x] Remote-business location language (baseline) — **#8** (“Serving clients remotely”)
- [ ] Social handles fully confirmed (Instagram placeholder only)
- [ ] Homepage proof strategy — **in progress `#5`**: no fictional logos/copy; real testimonial to be supplied; optional outbound “see the work” links
- [ ] Real work examples for the `Work` section — **`#9`**
- [ ] Real blog/article topics and authorship approach for launch — **`#10`**
- [ ] Founder/studio bio material and any approved headshots — **`#6`** and asset pass
- [ ] Athena-approved palette, typography, and image direction for the light retheme — **`#11`**
- [ ] Confirmation on whether the newsletter UI stays as copy-only, is repurposed, or is removed later

## Audit notes

1. The rebrand is mechanically favorable because content is repo-local, not CMS-backed.
2. The main implementation risk is not engineering complexity. It is accidental inconsistency across duplicated proof, testimonials, shared CTAs, and repeated trust/location language.
3. The template currently overstates organizational scale through team, office, and fictional proof content. Every follow-up issue should preserve honesty to Athena's current launch posture.
4. Some referenced raster/font assets did not surface in the filesystem search used during this audit, so asset handoff should be validated before implementation starts.

## Suggested handoff to follow-up issues

- **Done:** `#3` (shared shell copy), `#4` (logo, root metadata, icons), `#8` (contact, remote trust, offices, social placeholder)
- **Next:** `#5` homepage messaging and honest proof (no fictional logos/copy; keep testimonial section; brand-forward voice)
- **Then:** `#7` Process, `#6` About (tracker order), `#9` Work MDX, `#10` Blog MDX, `#11` light retheme, `#12` final QA sweep
