import { z } from 'zod'

/** Allowed phone characters (digits + common separators). No letters. */
const phoneCharset = /^[0-9+\s().-]+$/

export const contactInquiryFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Please enter your name.')
    .max(200, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address.'),
  company: z
    .string()
    .trim()
    .min(1, 'Please enter your company.')
    .max(200, 'Company name is too long.'),
  phone: z
    .string()
    .trim()
    .min(1, 'Please enter your phone number.')
    .max(40, 'Phone number is too long.')
    .refine((v) => phoneCharset.test(v), {
      message:
        'Phone may only include digits and symbols (+, spaces, dashes, parentheses). Letters are not allowed.',
    })
    .refine(
      (v) => {
        const digits = v.replace(/\D/g, '')
        return digits.length >= 10 && digits.length <= 15
      },
      { message: 'Enter a phone number with 10–15 digits.' },
    ),
  message: z
    .string()
    .trim()
    .min(1, 'Please enter a message.')
    .max(10_000, 'Message is too long.'),
  budget: z.enum(['25', '50', '100', '150'], {
    error: () => ({ message: 'Please select a budget range.' }),
  }),
})

export type ContactInquiryFormInput = z.infer<typeof contactInquiryFormSchema>

export function firstZodIssueMessage(error: z.ZodError): string {
  return error.issues[0]?.message ?? 'Invalid input.'
}
