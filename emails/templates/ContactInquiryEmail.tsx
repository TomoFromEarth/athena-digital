import { Section, Text } from '@react-email/components'

import { AthenaDetailRow } from '../components/AthenaDetailRow'
import { athenaEmailTheme } from '../components/AthenaEmailTheme'
import { AthenaEmailLayout } from '../components/AthenaEmailLayout'
import {
  BUDGET_LABELS,
  type ContactInquiryPayload,
} from '@/lib/contact/inquiry-types'

export type ContactInquiryEmailProps = ContactInquiryPayload

export function ContactInquiryEmail(props: ContactInquiryEmailProps) {
  const { name, email, company, phone, message, budget } = props
  const previewLine = `New inquiry from ${name}`

  return (
    <AthenaEmailLayout
      inboxPreview={previewLine}
      heading="New contact inquiry"
    >
      <AthenaDetailRow label="Name" value={name} />
      <AthenaDetailRow label="Email" value={email} />
      <AthenaDetailRow label="Company" value={company} />
      <AthenaDetailRow label="Phone" value={phone} />
      <AthenaDetailRow label="Budget" value={BUDGET_LABELS[budget]} />

      <Section style={{ marginTop: athenaEmailTheme.spacing.section }}>
        <Text
          style={{
            fontFamily: athenaEmailTheme.fontFamily,
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: athenaEmailTheme.colors.muted,
            margin: '0 0 8px 0',
          }}
        >
          Message
        </Text>
        <Section
          style={{
            backgroundColor: athenaEmailTheme.colors.subtleBg,
            border: `1px solid ${athenaEmailTheme.colors.border}`,
            borderRadius: '12px',
            padding: '16px 18px',
          }}
        >
          <Text
            style={{
              fontFamily: athenaEmailTheme.fontFamily,
              fontSize: '15px',
              lineHeight: '24px',
              color: athenaEmailTheme.colors.foreground,
              margin: 0,
              whiteSpace: 'pre-wrap',
            }}
          >
            {message}
          </Text>
        </Section>
      </Section>
    </AthenaEmailLayout>
  )
}

export default ContactInquiryEmail
