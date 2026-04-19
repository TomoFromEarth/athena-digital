import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { type ReactNode } from 'react'

import { athenaEmailTheme } from './AthenaEmailTheme'

type AthenaEmailLayoutProps = {
  /** Inbox preview line (notification area). */
  inboxPreview: string
  /** Main heading inside the dark header band. */
  heading: string
  children: ReactNode
}

export function AthenaEmailLayout({
  inboxPreview,
  heading,
  children,
}: AthenaEmailLayoutProps) {
  return (
    <Html lang="en">
      <Head />
      <Body
        style={{
          margin: 0,
          backgroundColor: athenaEmailTheme.colors.background,
          fontFamily: athenaEmailTheme.fontFamily,
        }}
      >
        <Preview>{inboxPreview}</Preview>
        <Section
          style={{
            padding: '32px 16px',
          }}
        >
          <Container
            style={{
              maxWidth: '560px',
              margin: '0 auto',
              backgroundColor: athenaEmailTheme.colors.surface,
              borderRadius: athenaEmailTheme.radii.card,
              overflow: 'hidden',
              border: `1px solid ${athenaEmailTheme.colors.border}`,
            }}
          >
            <Section
              style={{
                backgroundColor: athenaEmailTheme.colors.background,
                padding: '28px 28px 24px 28px',
              }}
            >
              <Text
                style={{
                  fontFamily: athenaEmailTheme.fontFamily,
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: athenaEmailTheme.colors.white,
                  margin: 0,
                }}
              >
                Athena Digital
              </Text>
              <Heading
                as="h1"
                style={{
                  fontFamily: athenaEmailTheme.fontFamily,
                  fontSize: '22px',
                  lineHeight: '28px',
                  fontWeight: 600,
                  color: athenaEmailTheme.colors.white,
                  margin: '12px 0 0 0',
                }}
              >
                {heading}
              </Heading>
            </Section>

            <Section style={{ padding: '28px' }}>{children}</Section>

            <Section
              style={{
                padding: '0 28px 28px 28px',
                borderTop: `1px solid ${athenaEmailTheme.colors.border}`,
              }}
            >
              <Text
                style={{
                  fontFamily: athenaEmailTheme.fontFamily,
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: athenaEmailTheme.colors.muted,
                  margin: '20px 0 0 0',
                }}
              >
                Athena Digital — content, community, and trend research for
                creators and brands.{' '}
                <Link
                  href="https://athenadigital.me"
                  style={{ color: athenaEmailTheme.colors.foreground }}
                >
                  athenadigital.me
                </Link>
              </Text>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  )
}
