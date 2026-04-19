'use server'

import {
  contactInquiryFormSchema,
  firstZodIssueMessage,
} from '@/lib/contact/contact-inquiry-schema'
import type { ContactInquiryPayload } from '@/lib/contact/inquiry-types'
import { sendContactInquiryEmail } from '@/lib/email/send-contact-inquiry'

export type { ContactInquiryPayload }

export type ContactActionState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; error: string }

export async function submitContactInquiry(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const honeypot = String(formData.get('company_website') ?? '').trim()
  if (honeypot) {
    console.warn('[contact] Honeypot filled; discarding submission')
    return { status: 'success' }
  }

  const budgetRaw = formData.get('budget')
  const parsed = contactInquiryFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    phone: formData.get('phone'),
    message: formData.get('message'),
    budget:
      typeof budgetRaw === 'string' && budgetRaw.length > 0
        ? budgetRaw
        : undefined,
  })

  if (!parsed.success) {
    return { status: 'error', error: firstZodIssueMessage(parsed.error) }
  }

  const { name, email, company, phone, message, budget } = parsed.data

  const payload: ContactInquiryPayload = {
    name,
    email,
    company,
    phone,
    message,
    budget,
  }

  const sendResult = await sendContactInquiryEmail(payload)

  if (!sendResult.ok) {
    if (sendResult.reason === 'not_configured') {
      return {
        status: 'error',
        error:
          'Email delivery is not configured yet. Please reach out directly at julia@athenadigital.me.',
      }
    }
    if (sendResult.userMessage) {
      return { status: 'error', error: sendResult.userMessage }
    }
    return {
      status: 'error',
      error:
        'We could not send your message. Please try again in a moment or email us directly.',
    }
  }

  return { status: 'success' }
}
