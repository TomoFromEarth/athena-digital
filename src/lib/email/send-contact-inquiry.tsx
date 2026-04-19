import { Resend } from 'resend'

import { ContactInquiryEmail } from '@emails/templates/ContactInquiryEmail'
import type { ContactInquiryPayload } from '@/lib/contact/inquiry-types'

export type SendContactInquiryResult =
  | { ok: true }
  | { ok: false; reason: 'not_configured' | 'send_failed'; userMessage?: string }

export async function sendContactInquiryEmail(
  payload: ContactInquiryPayload,
): Promise<SendContactInquiryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    return { ok: false, reason: 'not_configured' }
  }

  const from = process.env.EMAIL_FROM?.trim()
  if (!from) {
    console.error('[contact] EMAIL_FROM is not set')
    return { ok: false, reason: 'not_configured' }
  }

  const to =
    process.env.CONTACT_INQUIRY_TO_EMAIL?.trim() ?? 'julia@athenadigital.me'

  const resend = new Resend(apiKey)

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `Contact inquiry from ${payload.name}`,
    react: <ContactInquiryEmail {...payload} />,
  })

  if (error) {
    console.error('[contact] Resend send failed:', error)

    const isTestingRecipientOnly =
      error.statusCode === 403 &&
      error.name === 'validation_error' &&
      typeof error.message === 'string' &&
      error.message.includes('only send testing emails')

    if (isTestingRecipientOnly) {
      console.error(
        '[contact] Resend test mode: recipient must be your Resend account email, or verify a domain at https://resend.com/domains and use EMAIL_FROM on that domain.',
      )
      return {
        ok: false,
        reason: 'send_failed',
        userMessage:
          'We could not deliver your message yet (email is still in test mode). Please email julia@athenadigital.me directly.',
      }
    }

    return { ok: false, reason: 'send_failed' }
  }

  if (!data?.id) {
    console.error('[contact] Resend returned no message id', { data })
    return { ok: false, reason: 'send_failed' }
  }

  console.info('[contact] Resend accepted message', { id: data.id, to })

  return { ok: true }
}
