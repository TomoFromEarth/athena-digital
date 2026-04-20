import { type Metadata } from 'next'
import { getLocale } from 'gt-next/server'

async function loadContent(locale: string) {
  try {
    return await import(`./content.${locale}.mdx`)
  } catch {
    return await import('./content.en.mdx')
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const mod = await loadContent(locale)
  return mod.metadata
}

export default async function Page() {
  const locale = await getLocale()
  const mod = await loadContent(locale)
  const MDX = mod.default
  return <MDX />
}
