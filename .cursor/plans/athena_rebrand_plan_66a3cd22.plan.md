---
name: Athena Rebrand Plan
overview: Create a systematic, no-logic-change rebrand plan for the existing Tailwind Plus Next.js template so it can launch as Athena Digital with real but lean content, a light visual retheme, and preserved site structure.
todos:
  - id: inventory-all-brand-surfaces
    content: Create a complete inventory of every global, page-level, MDX, and asset-based branding touchpoint in the current template
    status: pending
  - id: map-athena-messaging
    content: Map Athena Digital’s real services, positioning, and light-content constraints onto the existing route structure
    status: pending
  - id: define-light-retheme-system
    content: Translate Athena’s existing brand kit into the template’s logo, colors, typography, imagery, and metadata surfaces
    status: pending
  - id: plan-honest-launch-content
    content: Decide how Work and Blog launch with a few real entries while preserving trust and avoiding inflated proof
    status: pending
isProject: false
---

# Athena Digital Rebrand Plan

## What We Know

This project is already a strong rebrand candidate: it is a static Next.js App Router marketing site with no CMS or backend content dependency. Nearly all rebrand work lives in a small set of predictable surfaces:

- Global brand shell in [`src/app/layout.tsx`](src/app/layout.tsx), [`src/components/RootLayout.tsx`](src/components/RootLayout.tsx), [`src/components/Footer.tsx`](src/components/Footer.tsx), [`src/components/Logo.tsx`](src/components/Logo.tsx), [`src/components/ContactSection.tsx`](src/components/ContactSection.tsx), [`src/components/Offices.tsx`](src/components/Offices.tsx), and [`src/components/SocialMedia.tsx`](src/components/SocialMedia.tsx)
- Static marketing pages in [`src/app/page.tsx`](src/app/page.tsx), [`src/app/about/page.tsx`](src/app/about/page.tsx), [`src/app/process/page.tsx`](src/app/process/page.tsx), [`src/app/contact/page.tsx`](src/app/contact/page.tsx), [`src/app/work/page.tsx`](src/app/work/page.tsx), and [`src/app/blog/page.tsx`](src/app/blog/page.tsx)
- Structured long-form content in [`src/app/work/*/page.mdx`](src/app/work) and [`src/app/blog/*/page.mdx`](src/app/blog), loaded automatically through [`src/lib/mdx.ts`](src/lib/mdx.ts)
- Light-theme brand presentation in [`src/styles/tailwind.css`](src/styles/tailwind.css) and related CSS

A key implementation lever is that blog and work content are file-driven, not hard-coded into a CMS:

```1:24:src/lib/mdx.ts
async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${directory}/${filename}`))[
            metaName
          ] as T
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}
```

## Rebrand Strategy

The plan should preserve the current routes and functionality, but replace the brand system, copy, imagery, and proof content so the site reads as a boutique, founder-adjacent agency for Athena Digital.

### Phase 1: Build a Rebrand Inventory

Create a page-by-page matrix of every brand-bearing surface:

- Brand name, metadata, and legal/company references
- Navigation labels, CTA labels, footer copy, social links, and contact/location language
- Homepage hero, services, testimonials, client logos, and section intros
- About, Process, Contact, Work, Blog, 404, and all MDX entries
- Asset replacement list including the inline SVG logo in [`src/components/Logo.tsx`](src/components/Logo.tsx) and the client/logo asset set under [`src/images/clients`](src/images/clients)

Output: a complete replacement checklist grouped into `global`, `page-level`, `MDX`, and `asset` categories.

### Phase 2: Map Template Sections To Athena Messaging

Rewrite the existing IA without changing its structure:

- `Home`: Athena’s positioning around content creation, posting, community management, and trend research
- `About`: emphasize boutique studio capability first, with founder credibility as supporting context
- `Process`: adapt the existing 3-step flow into Athena’s actual engagement model
- `Work`: launch with a small number of real entries, not padded fictional proof
- `Blog`: launch with a few real authority-building posts only
- `Contact`: convert the language to remote-business positioning and real Athena contact details

Output: a route-by-route messaging brief showing what each current section becomes for Athena Digital.

### Phase 3: Light Visual Retheme

Keep the layout and interaction model, but swap the visible identity:

- Replace the current wordmark/logomark in [`src/components/Logo.tsx`](src/components/Logo.tsx)
- Apply Athena’s existing brand kit to colors, typography choices, and imagery direction via [`src/styles/tailwind.css`](src/styles/tailwind.css) and high-visibility shared components
- Replace all placeholder/fake logos, team photos, and case-study imagery with real Athena-approved assets or remove unsupported proof density
- Add favicon/app icon and social sharing assets if they do not already exist

Output: a design-token and asset replacement plan that stays intentionally close to the template layout.

### Phase 4: Honest Thin-Content Launch Plan

Because launch content is intentionally real but currently light:

- Keep `Work` and `Blog` routes, but only populate them with a few authentic entries
- Avoid inflating team, office, or client scale where Athena cannot support it
- Reframe repeated "agency scale" sections so the site feels premium without pretending Athena has a larger content library than it does yet

Output: a launch-content policy that protects trust while still making the site feel complete.

### Phase 5: Metadata And Trust Sweep

Replace discovery/trust details across the app:

- Rewrite route metadata in [`src/app/layout.tsx`](src/app/layout.tsx) and page-level metadata exports
- Update footer legal name, contact details, social handles, and remote-business language
- Normalize every leftover `Studio`, Denmark, Copenhagen, Billund, and template-specific reference
- Review whether the current contact experience is intentionally left unchanged under the no-logic-change constraint, since the present form in [`src/app/contact/page.tsx`](src/app/contact/page.tsx) is currently only a UI shell

Output: a final QA checklist for brand consistency and launch readiness.

## Recommended Execution Order

1. Gather Athena’s local brand assets and source content into a single working set.
2. Produce the rebrand inventory and route-by-route copy brief.
3. Approve the new messaging before touching visuals.
4. Apply the light retheme to logo, palette, type, imagery, and shared components.
5. Replace or reduce proof sections to match real launch content.
6. Run a final brand-reference sweep and metadata QA.

## Estimated Familiarization Time

Technical familiarization for rebrand purposes is effectively complete. If we move into execution, reserve roughly:

- `30-45 minutes` to build the exhaustive replacement inventory from the current codebase
- `1-2 hours` to turn Athena’s real materials into a route-by-route messaging and asset map before implementation starts
