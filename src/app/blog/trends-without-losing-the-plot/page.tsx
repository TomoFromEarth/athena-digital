import { type Metadata } from 'next'
import { getGT, getLocale } from 'gt-next/server'

import BlogArticleWrapper from '@/app/blog/wrapper'
import { type Article, type MDXEntry } from '@/lib/mdx'

import { article } from './data'

const href = '/blog/trends-without-losing-the-plot'

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
    title: gt(article.title),
    description: gt(article.description),
  }
}

export default async function Page() {
  const locale = await getLocale()
  const MDX = await loadContent(locale)
  const entry: MDXEntry<Article> = { ...article, metadata: article, href }
  return (
    <BlogArticleWrapper article={entry}>
      <MDX />
    </BlogArticleWrapper>
  )
}
