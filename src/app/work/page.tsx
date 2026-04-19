import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Spotlights
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.href}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    {caseStudy.logo ? (
                      <Image
                        src={caseStudy.logo}
                        alt=""
                        className="h-16 w-16 flex-none"
                        unoptimized
                      />
                    ) : null}
                    <h3
                      className={clsx(
                        'text-sm font-semibold text-neutral-950',
                        caseStudy.logo
                          ? 'mt-6 sm:mt-0 lg:mt-8'
                          : 'mt-0 lg:mt-8',
                      )}
                    >
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read spotlight: ${caseStudy.client}`}
                    >
                      Read spotlight
                    </Button>
                  </div>
                  <Blockquote
                    author={caseStudy.testimonial.author}
                    className="mt-12"
                  >
                    {caseStudy.testimonial.content}
                  </Blockquote>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Lean spotlights from Athena Digital—real collaborations in content, posting, and community for creators and brands.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Our work"
        title="Real collaborations, told without invented case studies."
      >
        <p>
          Athena Digital does not pad this page with fictional brands. What you
          see here are{' '}
          <strong className="font-semibold text-neutral-950">
            spotlights we can stand behind
          </strong>
          —honest snapshots of how the studio partners with creators and teams on
          content, posting, and community. More will appear as new work is ready
          to share.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <ContactSection />
    </RootLayout>
  )
}
