import { T } from 'gt-next'
import { getLocale } from 'gt-next/server'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

export default async function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: MDXEntry<CaseStudy>
  children: React.ReactNode
}) {
  const locale = await getLocale()
  let allCaseStudies = await loadCaseStudies(locale)
  let moreCaseStudies = allCaseStudies
    .filter(
      ({ metadata }) =>
        !(
          metadata.client === caseStudy.client &&
          metadata.date === caseStudy.date
        ),
    )
    .slice(0, 2)

  return (
    <RootLayout>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro
            eyebrow={<T>Work spotlight</T>}
            title={caseStudy.title}
            centered
          >
            <p>{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">
                        <T>Client</T>
                      </dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">
                        <T>Year</T>
                      </dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">
                        <T>Service</T>
                      </dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="mx-auto -my-px max-w-2xl px-4 sm:px-6 lg:px-8">
                <div className="relative h-[min(26rem,52vh)] w-full overflow-hidden bg-neutral-200 sm:h-[min(30rem,58vh)]">
                  <GrayscaleTransitionImage
                    src={caseStudy.image.src}
                    alt={caseStudy.image.alt ?? ''}
                    fill
                    quality={90}
                    className="object-cover object-[center_22%]"
                    sizes="(min-width: 1024px) 42rem, (min-width: 640px) 90vw, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title={<T>More work</T>}
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </RootLayout>
  )
}
