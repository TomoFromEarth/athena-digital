import { type Metadata } from 'next'

import '@/styles/tailwind.css'

const defaultDescription =
  'Athena Digital helps creators, artists, and brands with content creation, content posting, community management, and trend research.'

export const metadata: Metadata = {
  applicationName: 'Athena Digital',
  title: {
    template: '%s | Athena Digital',
    default: 'Athena Digital | Content creation, community management, and trend research',
  },
  description: defaultDescription,
  openGraph: {
    title: 'Athena Digital',
    description: defaultDescription,
    siteName: 'Athena Digital',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Athena Digital',
    description: defaultDescription,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
