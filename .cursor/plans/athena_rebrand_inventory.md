# Athena Digital Rebrand Inventory

This document is the implementation artifact for GitHub issue `#2`:
`Audit all rebrand touchpoints and create a replacement checklist`.

It inventories every meaningful rebrand surface in the current Tailwind Plus template so the rest of the rollout can execute systematically without changing logic or functionality.

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

- [ ] `src/app/layout.tsx`
  - Root metadata title template and default title still reference `Studio` and `Denmark`
  - Root HTML language/theme shell should be reviewed for Athena defaults
- [ ] `src/components/RootLayout.tsx`
  - Header CTA copy: `Contact us`
  - Primary nav labels: `Our Work`, `About Us`, `Our Process`, `Blog`
  - Mobile nav support headings: `Our offices`, `Follow us`
  - Shared logo usage via `Logo` and `Logomark`
- [ ] `src/components/Footer.tsx`
  - Footer navigation labels and hard-coded work links
  - Newsletter heading and body copy
  - Footer legal line: `© Studio Agency Inc.`
  - Shared footer logo
- [ ] `src/components/Logo.tsx`
  - Inline SVG logomark and wordmark are brand-critical and must be replaced directly in code
- [ ] `src/components/ContactSection.tsx`
  - Shared CTA heading: `Tell us about your project`
  - CTA button label: `Say Hej`
  - Shared location heading: `Our offices`
- [ ] `src/components/Offices.tsx`
  - Hard-coded Copenhagen and Billund addresses
  - Denmark-specific trust/location framing
- [ ] `src/components/SocialMedia.tsx`
  - Generic placeholder platform URLs
  - Platform list should be validated against Athena's real channels

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
- [ ] `src/app/contact/page.tsx` (`Contact`)
  - Intro copy and CTA framing
  - Budget labels are productized for software-style engagements and may not fit Athena
  - Office heading, office explainer copy, email addresses, and social section
  - Contact form is a UI shell only; no logic changes are planned here
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

- [ ] `src/components/Logo.tsx`
  - Inline SVG logomark/wordmark replacement required
- [ ] `src/images/clients/**`
  - `32` SVG assets for fictional/template clients
  - Includes light/dark logo and logomark variants
- [ ] Imported raster imagery referenced in page code and MDX
  - `src/app/page.tsx`: `@/images/laptop.jpg`
  - `src/app/process/page.tsx`: `@/images/laptop.jpg`, `@/images/meeting.jpg`, `@/images/whiteboard.jpg`
  - `src/app/about/page.tsx`: `@/images/team/*.jpg`
  - `src/app/blog/*/page.mdx`: local blog images such as `pilot.jpg`, `server.jpg`, `laptop.jpg`
  - `src/app/work/*/page.mdx`: local hero and portrait images such as `hero.jpg`, `jenny-wilson.jpg`
- [ ] Favicon/app icon assets
  - No `favicon` or `icon` files were found in the project search
- [ ] Root/share metadata imagery
  - No root-level Open Graph/Twitter asset setup is currently defined
- [ ] Font assets
  - The template references Mona Sans in styling, but the font file did not surface in the filesystem search used for this audit

## Duplicate and hidden-risk inventory

### Duplication risks

- [ ] Case-study testimonials are duplicated
  - They appear inside the `caseStudy.testimonial` object and again inside the MDX body blockquote
- [ ] Work links are duplicated
  - Footer work links are hard-coded independently of the MDX case-study list
- [ ] Client proof is duplicated
  - Homepage/client strips and work-page client strips are hard-coded separately from case-study data
- [ ] Contact/location trust is duplicated
  - `Our offices` language appears in `RootLayout`, `ContactSection`, `Offices`, and `contact/page.tsx`
- [ ] Shared CTA language is duplicated
  - `Read more` appears in `PageLinks` and the blog index

### Hidden template remnants

- [ ] `Studio` references remain across layout, homepage, about, work, process, and work MDX entries
- [ ] Denmark-specific trust cues remain in metadata and address components
- [ ] Newsletter copy in the footer is generic and may not match Athena's launch strategy
- [ ] 404 copy is isolated from the main layout and could be missed during broader page rewrites
- [ ] Social links are placeholder roots, not company-specific handles

## Content and asset gaps that block implementation

- [ ] Final Athena logo assets or approved SVG direction
- [ ] Final favicon/app icon assets
- [ ] Final contact email(s), public contact method, and social handles
- [ ] Approved remote-business location language
- [ ] Homepage proof strategy that stays honest to current business scale
- [ ] Real work examples for the `Work` section
- [ ] Real blog/article topics and authorship approach for launch
- [ ] Founder/studio bio material and any approved headshots
- [ ] Athena-approved palette, typography, and image direction for the light retheme
- [ ] Confirmation on whether the newsletter UI stays as copy-only, is repurposed, or is removed later

## Audit notes

1. The rebrand is mechanically favorable because content is repo-local, not CMS-backed.
2. The main implementation risk is not engineering complexity. It is accidental inconsistency across duplicated proof, testimonials, shared CTAs, and repeated trust/location language.
3. The template currently overstates organizational scale through team, office, and fictional proof content. Every follow-up issue should preserve honesty to Athena's current launch posture.
4. Some referenced raster/font assets did not surface in the filesystem search used during this audit, so asset handoff should be validated before implementation starts.

## Suggested handoff to follow-up issues

- Issue `#3`: shared shell copy in layout, nav, footer, newsletter, and shared CTA
- Issue `#4`: logo replacement, root metadata, favicon, and root brand defaults
- Issue `#8`: contact details, remote-business trust language, offices, and social handles
- Issues `#5`, `#6`, `#7`: page-level copy rewrites for home, about, and process
- Issues `#9`, `#10`: replacement of fictional work/blog entries with lean real Athena content
- Issue `#11`: light visual retheme after most content direction is stable
- Issue `#12`: final sweep for leftover `Studio`, Denmark, office, and placeholder references
