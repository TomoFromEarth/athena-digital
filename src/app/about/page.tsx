import { type Metadata } from 'next'
import Image from 'next/image'
import { T } from 'gt-next'
import { getGT, getLocale } from 'gt-next/server'

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
        eyebrow={<T>How Athena Digital works</T>}
        title={
          <T>
            Warm collaboration, clear expectations, and respect for real life.
          </T>
        }
        invert
      >
        <p>
          <T>
            A small studio only works when people trust each other. These ideas
            shape how Athena Digital shows up in partnerships.
          </T>
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title={<T>Craft &amp; care</T>} invert>
            <T>
              Posts, comments, and creative choices add up. Athena Digital
              treats the small touches—tone, timing, context—as seriously as
              the big launches.
            </T>
          </GridListItem>
          <GridListItem title={<T>Trust &amp; transparency</T>} invert>
            <T>
              You should know what is in scope, what ships when, and when
              something needs a conversation. No mystery layers or vague
              hand-offs.
            </T>
          </GridListItem>
          <GridListItem title={<T>Balance</T>} invert>
            <T>
              Great social and community work happens when people are not
              burned out. Athena Digital plans for sustainable rhythms,
              especially in remote collaboration.
            </T>
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
              <T>Who you will work with</T>
            </h2>
          </FadeIn>
          <div className="space-y-6 text-base text-neutral-600 lg:col-span-3">
            <p>
              <T>
                Athena Digital is a{' '}
                <strong className="font-semibold text-neutral-950">
                  boutique remote studio
                </strong>{' '}
                focused on content, posting, community, and cultural listening
                for creators, artists, and brands. You collaborate with the
                people doing the work—not a parade of titles that never touch
                your channels.
              </T>
            </p>
            <p>
              <T>
                The studio is led by{' '}
                <strong className="font-semibold text-neutral-950">
                  Julia
                </strong>
                , who works directly with clients on strategy and execution.
                When a project needs extra hands, Athena Digital brings in
                trusted collaborators and stays accountable for the
                result—without pretending to be a large agency.
              </T>
            </p>
            <p>
              <T>
                If that sounds like the right scale for where you are,{' '}
                <strong className="font-semibold text-neutral-950">
                  Athena Digital
                </strong>{' '}
                would love to hear what you are building.
              </T>
            </p>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const gt = await getGT()
  return {
    title: gt('About Us'),
    description: gt(
      'Athena Digital is a boutique remote studio for content, posting, community, and trend-aware creative support.',
    ),
  }
}

export default async function About() {
  const locale = await getLocale()
  let blogArticles = (await loadArticles(locale)).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro
        eyebrow={<T>About us</T>}
        title={<T>A boutique studio for channels that feel human</T>}
      >
        <p>
          <T>
            Athena Digital helps creators and brands show up online with
            clarity, consistency, and personality—without the overhead of a
            giant agency or the chaos of doing everything alone.
          </T>
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            <T>
              The studio sits at the intersection of{' '}
              <strong className="font-semibold text-neutral-950">
                content creation
              </strong>
              ,{' '}
              <strong className="font-semibold text-neutral-950">
                posting
              </strong>
              ,{' '}
              <strong className="font-semibold text-neutral-950">
                community management
              </strong>
              , and{' '}
              <strong className="font-semibold text-neutral-950">
                trend research
              </strong>
              . That mix is intentional: feeds reward people who understand
              both craft and culture, not just one or the other.
            </T>
          </p>
          <p>
            <T>
              Athena Digital is remote-first and deliberately lean. That keeps
              partnerships direct, timelines honest, and the work grounded in
              what you can sustain—not inflated promises about scale the
              studio cannot deliver.
            </T>
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem
            value={<T>Remote-first</T>}
            label={<T>How we collaborate</T>}
          />
          <StatListItem
            value={<T>Lean</T>}
            label={<T>Studio by design</T>}
          />
          <StatListItem
            value={<T>Hands-on</T>}
            label={<T>Who touches your work</T>}
          />
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
        title={<T>From the blog</T>}
        intro={
          <T>
            Perspectives and notes from Athena Digital as we publish
            them—ideas on content, community, and showing up online with
            intention.
          </T>
        }
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
