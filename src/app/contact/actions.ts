'use server'

import { getGT } from 'gt-next/server'

import {
  contactInquiryFormSchema,
  type ContactInquiryFormInput,
} from '@/lib/contact/contact-inquiry-schema'
import type { ContactInquiryPayload } from '@/lib/contact/inquiry-types'
import { sendContactInquiryEmail } from '@/lib/email/send-contact-inquiry'

export type { ContactInquiryPayload }

export type ContactFormFieldKey = keyof ContactInquiryFormInput

export type ContactActionState =
  | { status: 'idle' }
  | { status: 'success' }
  | {
      status: 'error'
      /** Non-field failures (e.g. email delivery). */
      error?: string
      /** First validation message per field from the server. */
      fieldErrors?: Partial<Record<ContactFormFieldKey, string>>
    }

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
    const gt = await getGT()
    const flat = parsed.error.flatten().fieldErrors
    const fieldErrors: Partial<Record<ContactFormFieldKey, string>> = {}
    const fieldKeys: ContactFormFieldKey[] = [
      'name',
      'email',
      'company',
      'phone',
      'message',
      'budget',
    ]
    for (const key of fieldKeys) {
      const first = flat[key]?.[0]
      if (first) {
        fieldErrors[key] = gt(first)
      }
    }
    return { status: 'error', fieldErrors }
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
    const gt = await getGT()
    if (sendResult.reason === 'not_configured') {
      return {
        status: 'error',
        error: gt(
          'Email delivery is not configured yet. Please reach out directly at julia@athenadigital.me.',
        ),
      }
    }
    if (sendResult.userMessage) {
      return { status: 'error', error: gt(sendResult.userMessage) }
    }
    return {
      status: 'error',
      error: gt(
        'We could not send your message. Please try again in a moment or email us directly.',
      ),
    }
  }

  return { status: 'success' }
}
