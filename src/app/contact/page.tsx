import { type Metadata } from 'next'
import Link from 'next/link'
import { T } from 'gt-next'
import { getGT } from 'gt-next/server'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'

import { ContactForm } from './ContactForm'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        <T>Where we work</T>
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        <T>
          Athena Digital is a remote studio partnering with creators, artists,
          and brands wherever they are based.
        </T>
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          <T>Email</T>
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm">
          <div>
            <dt className="font-semibold text-neutral-950">
              <T>Primary contact</T>
            </dt>
            <dd>
              <Link
                href="mailto:julia@athenadigital.me"
                className="text-neutral-600 hover:text-neutral-950"
              >
                julia@athenadigital.me
              </Link>
            </dd>
          </div>
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          <T>Follow Athena Digital</T>
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const gt = await getGT()
  return {
    title: gt('Contact'),
    description: gt(
      'Get in touch with Athena Digital for content creation, community management, and trend research support.',
    ),
  }
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow={<T>Contact</T>}
        title={<T>Let’s talk about your content and community</T>}
      >
        <p>
          <T>
            Share what you need help with and Athena Digital will follow up
            with the best next step.
          </T>
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
