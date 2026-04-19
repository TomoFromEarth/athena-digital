import { type Metadata } from 'next'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedCollage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { homepageTestimonial } from '@/content/homepage-testimonial'
import imageFemmeDevoilee from '@/images/athena/femme-devoilee-01.jpg'
import imageFemmeTotale03 from '@/images/athena/femme-totale-03.PNG'
import imageIvana from '@/images/athena/ivana-02.PNG'
import imageTomofromearth from '@/images/athena/tomofromearth-02.jpg'

/** Edge-to-edge in each cell (no scale transforms — those left neutral gutters between tiles). */
const servicesCollageImageClassName = [
  'block size-full object-cover object-top',
  'block size-full object-cover object-top',
  'block size-full object-cover object-bottom',
  'block size-full object-cover',
] as const

function AudienceStrip() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="max-w-2xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-balance text-white sm:text-4xl">
            A remote studio for people who live in culture, not just ads.
          </h2>
          <p className="mt-6 text-lg text-neutral-400">
            Athena Digital partners with creators, artists, lean teams, and
            brands that want content and community handled with care—without
            pretending we are a 200-person network. Proof shows up in the work
            you can see in the wild, not in a wall of borrowed logos.
          </p>
          <p className="mt-6 text-lg text-neutral-400">
            <Link
              href="https://instagram.com/athenadigital"
              className="font-semibold text-white underline decoration-neutral-600 underline-offset-4 transition hover:decoration-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              Follow along on Instagram
            </Link>{' '}
            for a living snapshot of what we are building. More case-style
            writeups will land on the site as they are ready.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}

const serviceHighlights = [
  {
    title: 'Content creation',
    description:
      'Scripts, hooks, visuals, and ideas that match how your audience actually talks and scrolls—not generic filler.',
    href: '/process',
  },
  {
    title: 'Posting & calendars',
    description:
      'Consistent publishing rhythms, platform-native formatting, and small adjustments so posts feel intentional week to week.',
    href: '/process',
  },
  {
    title: 'Community & trends',
    description:
      'Comment and DM care, light moderation, and trend spotting so you stay in the conversation without living inside every app.',
    href: '/process',
  },
] as const

function ServiceHighlights() {
  return (
    <>
      <SectionIntro
        title="How Athena Digital shows up for you"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We focus on the parts of the internet that reward consistency,
          personality, and cultural fluency—so you can spend more time on the
          craft and the business behind it.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {serviceHighlights.map((item) => (
            <FadeIn key={item.title} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-neutral-950">
                  <Link href={item.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-6 text-base text-neutral-600">
                  {item.description}
                </p>
                <p className="mt-6 text-sm font-semibold text-neutral-950">
                  See how we work <span aria-hidden="true">→</span>
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Content, community, and clarity—without the theater."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every partnership is a little different, but the through-line is
          simple: Athena Digital helps you sound like yourself where your people
          already are.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedCollage
                images={[
                  imageTomofromearth,
                  imageIvana,
                  imageFemmeDevoilee,
                  imageFemmeTotale03,
                ]}
                cellImageClassName={servicesCollageImageClassName}
                sizes="(min-width: 1024px) 21rem, 16rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Content creation">
              Planning and making the posts, stories, and short-form pieces that
              carry your voice—so your feed feels like a through-line, not a
              scramble.
            </ListItem>
            <ListItem title="Posting & scheduling support">
              Calendars, timing, and platform-specific polish so publishing
              stays steady even when your week gets loud.
            </ListItem>
            <ListItem title="Community management">
              Human replies, light moderation, and the small touches that keep
              people feeling seen in comments and DMs.
            </ListItem>
            <ListItem title="Trend research & cultural listening">
              Spotting what is rising, what is tired, and what fits your brand
              without chasing every noise-making trend.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Athena Digital is a boutique remote studio for content creation, posting, community management, and trend research.',
}

export default function Home() {
  const hasClientQuote = homepageTestimonial.quote.trim().length > 0

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Content and community help for creators and brands who care how they
            show up online.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Athena Digital is a remote studio that plans, creates, posts, and
            tends the social layer for artists, personal brands, and small teams
            who want their channels to feel alive—not like a forgotten task
            list.
          </p>
        </FadeIn>
      </Container>

      <AudienceStrip />

      <ServiceHighlights />

      {hasClientQuote ? (
        <Testimonial
          className="mt-24 sm:mt-32 lg:mt-40"
          variant="quote"
          client={{
            name: homepageTestimonial.authorName,
            role: homepageTestimonial.authorTitle || undefined,
          }}
        >
          {homepageTestimonial.quote}
        </Testimonial>
      ) : (
        <Testimonial
          className="mt-24 sm:mt-32 lg:mt-40"
          variant="note"
          client={{ name: 'Athena Digital' }}
        >
          <p>
            Client perspectives will appear in this space as we publish them. If
            Athena Digital has supported your work and you would like to share a
            short reflection,{' '}
            <Link
              href="/contact"
              className="font-semibold text-neutral-950 underline decoration-neutral-950/30 underline-offset-4 transition hover:decoration-neutral-950"
            >
              say hello
            </Link>{' '}
            and we will line it up.
          </p>
        </Testimonial>
      )}

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
