import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import imageAbout from '@/images/athena/ivana-03.PNG'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="How Athena Digital works"
        title="Warm collaboration, clear expectations, and respect for real life."
        invert
      >
        <p>
          A small studio only works when people trust each other. These ideas
          shape how Athena Digital shows up in partnerships.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Craft & care" invert>
            Posts, comments, and creative choices add up. Athena Digital treats
            the small touches—tone, timing, context—as seriously as the big
            launches.
          </GridListItem>
          <GridListItem title="Trust & transparency" invert>
            You should know what is in scope, what ships when, and when
            something needs a conversation. No mystery layers or vague
            hand-offs.
          </GridListItem>
          <GridListItem title="Balance" invert>
            Great social and community work happens when people are not burned
            out. Athena Digital plans for sustainable rhythms, especially in
            remote collaboration.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function StudioTeam() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeInStagger>
        <Border as={FadeIn} />
        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Who you will work with
            </h2>
          </FadeIn>
          <div className="space-y-6 text-base text-neutral-600 lg:col-span-3">
            <p>
              Athena Digital is a{' '}
              <strong className="font-semibold text-neutral-950">
                boutique remote studio
              </strong>{' '}
              focused on content, posting, community, and cultural listening for
              creators, artists, and brands. You collaborate with the people
              doing the work—not a parade of titles that never touch your
              channels.
            </p>
            <p>
              The studio is led by{' '}
              <strong className="font-semibold text-neutral-950">Julia</strong>,
              who works directly with clients on strategy and execution. When a
              project needs extra hands, Athena Digital brings in trusted
              collaborators and stays accountable for the result—without
              pretending to be a large agency.
            </p>
            <p>
              If that sounds like the right scale for where you are,{' '}
              <strong className="font-semibold text-neutral-950">
                Athena Digital
              </strong>{' '}
              would love to hear what you are building.
            </p>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Athena Digital is a boutique remote studio for content, posting, community, and trend-aware creative support.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro
        eyebrow="About us"
        title="A boutique studio for channels that feel human"
      >
        <p>
          Athena Digital helps creators and brands show up online with clarity,
          consistency, and personality—without the overhead of a giant agency or
          the chaos of doing everything alone.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            The studio sits at the intersection of{' '}
            <strong className="font-semibold text-neutral-950">
              content creation
            </strong>
            ,{' '}
            <strong className="font-semibold text-neutral-950">posting</strong>,{' '}
            <strong className="font-semibold text-neutral-950">
              community management
            </strong>
            , and{' '}
            <strong className="font-semibold text-neutral-950">
              trend research
            </strong>
            . That mix is intentional: feeds reward people who understand both
            craft and culture, not just one or the other.
          </p>
          <p>
            Athena Digital is remote-first and deliberately lean. That keeps
            partnerships direct, timelines honest, and the work grounded in what
            you can sustain—not inflated promises about scale the studio cannot
            deliver.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="Remote-first" label="How we collaborate" />
          <StatListItem value="Lean" label="Studio by design" />
          <StatListItem value="Hands-on" label="Who touches your work" />
        </StatList>
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <div className="overflow-hidden rounded-4xl bg-neutral-100">
            <Image
              src={imageAbout}
              alt=""
              sizes="(min-width: 1024px) 100vw, 100vw"
              className="aspect-21/9 w-full object-cover object-top"
            />
          </div>
        </FadeIn>
      </Container>

      <Culture />

      <StudioTeam />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Perspectives and notes from Athena Digital as we publish them—ideas on content, community, and showing up online with intention."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
