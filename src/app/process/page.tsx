import { type Metadata } from 'next'
import { T } from 'gt-next'
import { getGT } from 'gt-next/server'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageDiscover from '@/images/athena/ivana-01.PNG'
import imageCreate from '@/images/athena/tomofromearth-02.jpg'
import imageDeliver from '@/images/athena/ivana-02.PNG'

function Section({
  title,
  image,
  children,
}: {
  title: React.ReactNode
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section
      title={<T>Discover</T>}
      image={{
        src: imageDiscover,
        // Crop: add Tailwind object-* (e.g. object-top, object-[50%_30%]) on StylizedImage’s inner img.
        className: 'object-top',
      }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <T>
            Athena Digital starts by getting clear on your{' '}
            <strong className="font-semibold text-neutral-950">goals</strong>,
            your audience, and where you already show up online. We review
            what is working, what feels stiff, and where there is room to
            sound more like you.
          </T>
        </p>
        <p>
          <T>
            That usually means a grounded look at your channels, your voice,
            and the rhythms of your week—so recommendations fit real capacity,
            not a fantasy content factory.
          </T>
        </p>
        <p>
          <T>
            By the end of this phase you have a shared picture of priorities
            and a practical{' '}
            <strong className="font-semibold text-neutral-950">plan</strong>{' '}
            for what to make first, what to post where, and how we will
            measure “better” in a way that matters to you.
          </T>
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        <T>Included in this phase</T>
      </h3>
      <TagList className="mt-4">
        <TagListItem>
          <T>Channel and content audit</T>
        </TagListItem>
        <TagListItem>
          <T>Audience and positioning check-in</T>
        </TagListItem>
        <TagListItem>
          <T>Voice, pillars, and guardrails</T>
        </TagListItem>
        <TagListItem>
          <T>Light trend and competitor context</T>
        </TagListItem>
        <TagListItem>
          <T>Goals, constraints, and success signals</T>
        </TagListItem>
        <TagListItem>
          <T>Roadmap for the next stretch of work</T>
        </TagListItem>
      </TagList>
    </Section>
  )
}

function Create() {
  return (
    <Section title={<T>Create</T>} image={{ src: imageCreate, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <T>
            Here Athena Digital turns the plan into{' '}
            <strong className="font-semibold text-neutral-950">
              assets and rhythms
            </strong>
            : drafts, hooks, captions, visual direction, and a posting
            calendar that respects your brand and your bandwidth.
          </T>
        </p>
        <p>
          <T>
            You stay in the loop with clear checkpoints—what is queued, what
            needs your eyes, and what Athena Digital can move forward. No
            black-box mystery weeks where nothing ships.
          </T>
        </p>
        <p>
          <T>
            The mix might include batching content, adapting one idea across
            platforms, or building a small library you can pull from—always in
            service of sounding consistent, human, and culturally aware.
          </T>
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        <T>Included in this phase</T>
      </h3>
      <TagList className="mt-4">
        <TagListItem>
          <T>Editorial calendar and content outlines</T>
        </TagListItem>
        <TagListItem>
          <T>Drafts for posts, stories, and short-form pieces</T>
        </TagListItem>
        <TagListItem>
          <T>Platform-specific tweaks and formatting</T>
        </TagListItem>
        <TagListItem>
          <T>Asset notes or simple creative direction</T>
        </TagListItem>
        <TagListItem>
          <T>Revision rounds scoped to the engagement</T>
        </TagListItem>
        <TagListItem>
          <T>Handoff notes so you know how to use what we made</T>
        </TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title={<T>Deliver</T>} image={{ src: imageDeliver, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <T>
            Delivery is where content meets the feed:{' '}
            <strong className="font-semibold text-neutral-950">
              scheduling
            </strong>
            , publishing, and the small fixes that keep posts from feeling
            rushed or off-brand at go-live.
          </T>
        </p>
        <p>
          <T>
            When it is part of your scope, Athena Digital also helps with{' '}
            <strong className="font-semibold text-neutral-950">
              community
            </strong>{' '}
            touchpoints—thoughtful replies, light moderation, and spotting
            moments worth amplifying or adjusting.
          </T>
        </p>
        <p>
          <T>
            We keep an eye on what is resonating, what is tiring, and what the
            conversation around your space is doing—so the next cycle of work
            stays grounded in reality, not guesswork.
          </T>
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        <T>Included in this phase</T>
      </h3>
      <List className="mt-8">
        <ListItem title={<T>Publishing &amp; quality checks</T>}>
          <T>
            Scheduling, final read-throughs, and platform-native polish so
            what goes live matches what you approved.
          </T>
        </ListItem>
        <ListItem title={<T>Community care</T>}>
          <T>
            Human responses and light moderation where agreed—so your people
            feel heard without you living in the inbox.
          </T>
        </ListItem>
        <ListItem title={<T>Iteration &amp; check-ins</T>}>
          <T>
            Short retros on what landed, what to tweak, and what is
            next—aligned to the cadence we set together.
          </T>
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-221 overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow={<T>How Athena Digital works</T>}
        title={<T>Warm, precise, and honest about what it takes</T>}
      >
        <p>
          <T>
            A boutique studio only works if people trust the collaboration.
            These are the ideas Athena Digital tries to live up to on every
            engagement.
          </T>
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title={<T>Meticulous</T>}>
            <T>
              Voice and detail matter. We sweat the small stuff in captions,
              timing, and tone so your presence feels intentional, not
              accidental.
            </T>
          </GridListItem>
          <GridListItem title={<T>Efficient</T>}>
            <T>
              Your time is limited. We aim for calendars and workflows that
              respect how you actually work—not theoretical infinite capacity.
            </T>
          </GridListItem>
          <GridListItem title={<T>Adaptable</T>}>
            <T>
              Platforms and trends move. Athena Digital adjusts formats and
              priorities with you instead of forcing a rigid playbook past its
              sell-by date.
            </T>
          </GridListItem>
          <GridListItem title={<T>Honest</T>}>
            <T>
              We are upfront about scope, trade-offs, and what is realistic
              for a small remote studio. No inflated promises about scale
              Athena Digital cannot back up.
            </T>
          </GridListItem>
          <GridListItem title={<T>Loyal</T>}>
            <T>
              The best work comes from relationships where feedback is easy
              and repeat collaboration feels natural—not transactional
              one-offs.
            </T>
          </GridListItem>
          <GridListItem title={<T>Culturally fluent</T>}>
            <T>
              Athena Digital pays attention to how people really talk and
              scroll, so content feels current without chasing every fleeting
              gimmick.
            </T>
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const gt = await getGT()
  return {
    title: gt('Our Process'),
    description: gt(
      'How Athena Digital discovers your goals, creates content and calendars, and delivers publishing and community support for creators and brands.',
    ),
  }
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow={<T>Our process</T>}
        title={<T>How Athena Digital works with you</T>}
      >
        <p>
          <T>
            Most partnerships move through three chapters: understanding your
            world, making the work, and shipping it with care. The details
            change for every client, but the rhythm stays easy to follow—so
            you always know where things stand.
          </T>
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Create />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
