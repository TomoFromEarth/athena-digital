'use client'

import Link from 'next/link'
import { msg } from 'gt-next'
import { T, useGT, Var } from 'gt-next/client'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: msg('Explore'),
    links: [
      { title: msg('Work'), href: '/work' },
      { title: msg('About'), href: '/about' },
      { title: msg('How We Work'), href: '/process' },
      { title: msg('Journal'), href: '/blog' },
    ],
  },
  {
    title: msg('Services'),
    links: [
      { title: msg('Content Creation'), href: '/process' },
      { title: msg('Content Posting'), href: '/process' },
      { title: msg('Community Management'), href: '/process' },
      { title: msg('Trend Research'), href: '/process' },
    ],
  },
  {
    title: msg('Follow Athena Digital'),
    links: socialMediaProfiles.map((profile) => ({
      title: profile.title,
      href: profile.href,
    })),
  },
]

function Navigation() {
  const gt = useGT()
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {gt(section.title)}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {gt(link.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  const gt = useGT()
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        <T>Get Athena Digital updates</T>
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        <T>
          Occasional notes on content creation, community building, and trend
          research.
        </T>
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder={gt('Email address')}
          autoComplete="email"
          aria-label={gt('Email address')}
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label={gt('Submit')}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  const gt = useGT()
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label={gt('Home')}>
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            <T>
              © Athena Digital <Var>{new Date().getFullYear()}</Var>. All rights
              reserved.
            </T>
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
