'use server'

import {
  BUDGET_VALUES,
  type ContactInquiryPayload,
} from '@/lib/contact/inquiry-types'
import { sendContactInquiryEmail } from '@/lib/email/send-contact-inquiry'

const MAX_NAME_LEN = 200
const MAX_COMPANY_LEN = 200
const MAX_PHONE_LEN = 40
const MAX_MESSAGE_LEN = 10_000

/** Basic sanity check — not a full RFC 5322 parser. */
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export type { ContactInquiryPayload }

export type ContactActionState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; error: string }

export async function submitContactInquiry(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const budgetRaw = formData.get('budget')

  if (!name) {
    return { status: 'error', error: 'Please enter your name.' }
  }
  if (name.length > MAX_NAME_LEN) {
    return { status: 'error', error: 'Name is too long.' }
  }

  if (!email) {
    return { status: 'error', error: 'Please enter your email address.' }
  }
  if (!isValidEmail(email)) {
    return { status: 'error', error: 'Please enter a valid email address.' }
  }

  if (!company) {
    return { status: 'error', error: 'Please enter your company.' }
  }
  if (company.length > MAX_COMPANY_LEN) {
    return { status: 'error', error: 'Company name is too long.' }
  }

  if (!phone) {
    return { status: 'error', error: 'Please enter your phone number.' }
  }
  if (phone.length > MAX_PHONE_LEN) {
    return { status: 'error', error: 'Phone number is too long.' }
  }

  if (!message) {
    return { status: 'error', error: 'Please enter a message.' }
  }
  if (message.length > MAX_MESSAGE_LEN) {
    return { status: 'error', error: 'Message is too long.' }
  }

  const budget =
    typeof budgetRaw === 'string' &&
    BUDGET_VALUES.includes(budgetRaw as ContactInquiryPayload['budget'])
      ? (budgetRaw as ContactInquiryPayload['budget'])
      : null

  if (!budget) {
    return { status: 'error', error: 'Please select a budget range.' }
  }

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
    return {
      status: 'error',
      error:
        'We could not send your message. Please try again in a moment or email us directly.',
    }
  }

  return { status: 'success' }
}
