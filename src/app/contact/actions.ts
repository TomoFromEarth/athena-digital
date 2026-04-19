'use server'

const BUDGET_VALUES = ['25', '50', '100', '150'] as const

const MAX_NAME_LEN = 200
const MAX_COMPANY_LEN = 200
const MAX_PHONE_LEN = 40
const MAX_MESSAGE_LEN = 10_000

/** Basic sanity check — not a full RFC 5322 parser. */
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export type ContactInquiryPayload = {
  name: string
  email: string
  company: string
  phone: string
  message: string
  budget: (typeof BUDGET_VALUES)[number]
}

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
    typeof budgetRaw === 'string' && BUDGET_VALUES.includes(budgetRaw as (typeof BUDGET_VALUES)[number])
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

  await processContactInquiry(payload)

  return { status: 'success' }
}

/** Placeholder for delivery (#15 Resend + React Email). */
async function processContactInquiry(_payload: ContactInquiryPayload) {
  await Promise.resolve()
}
