import { type Metadata } from 'next'
import { getGT, getLocale } from 'gt-next/server'

import CaseStudyLayout from '@/app/work/wrapper'
import { type CaseStudy, type MDXEntry } from '@/lib/mdx'

import { caseStudy } from './data'

const href = '/work/tomo-creator-collaboration'

async function loadContent(locale: string) {
  try {
    return (await import(`./content.${locale}.mdx`)).default
  } catch {
    return (await import('./content.en.mdx')).default
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const gt = await getGT()
  return {
    title: `${caseStudy.client} · ${gt('Work spotlight')}`,
    description: gt(caseStudy.description),
  }
}

export default async function Page() {
  const locale = await getLocale()
  const MDX = await loadContent(locale)
  const entry: MDXEntry<CaseStudy> = {
    ...caseStudy,
    metadata: caseStudy,
    href,
  }
  return (
    <CaseStudyLayout caseStudy={entry}>
      <MDX />
    </CaseStudyLayout>
  )
}
