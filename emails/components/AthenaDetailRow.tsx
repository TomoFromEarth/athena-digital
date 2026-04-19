import { Section, Text } from '@react-email/components'

import { athenaEmailTheme } from './AthenaEmailTheme'

type AthenaDetailRowProps = {
  label: string
  value: string
}

export function AthenaDetailRow({ label, value }: AthenaDetailRowProps) {
  return (
    <Section style={{ marginBottom: athenaEmailTheme.spacing.row }}>
      <Text
        style={{
          fontFamily: athenaEmailTheme.fontFamily,
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: athenaEmailTheme.colors.muted,
          margin: '0 0 4px 0',
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontFamily: athenaEmailTheme.fontFamily,
          fontSize: '15px',
          lineHeight: '22px',
          color: athenaEmailTheme.colors.foreground,
          margin: '0',
        }}
      >
        {value}
      </Text>
    </Section>
  )
}
