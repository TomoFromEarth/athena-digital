import { type Metadata } from 'next'
import { GTProvider } from 'gt-next'
import { getGT, getLocale } from 'gt-next/server'

import '@/styles/tailwind.css'

export async function generateMetadata(): Promise<Metadata> {
  const gt = await getGT()
  const description = gt(
    'Athena Digital helps creators, artists, and brands with content creation, content posting, community management, and trend research.',
  )
  const tagline = gt(
    'Content creation, community management, and trend research',
  )

  return {
    applicationName: 'Athena Digital',
    title: {
      template: '%s | Athena Digital',
      default: `Athena Digital | ${tagline}`,
    },
    description,
    openGraph: {
      title: 'Athena Digital',
      description,
      siteName: 'Athena Digital',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Athena Digital',
      description,
    },
  }
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()

  return (
    <html
      lang={locale}
      className="h-full bg-neutral-950 text-base antialiased"
    >
      <body className="flex min-h-full flex-col">
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  )
}
