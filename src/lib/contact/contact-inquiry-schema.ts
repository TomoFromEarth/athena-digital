import { z } from 'zod'
import { msg } from 'gt-next'

/** Allowed phone characters (digits + common separators). No letters. */
const phoneCharset = /^[0-9+\s().-]+$/

export const contactInquiryFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, msg('Please enter your name.'))
    .max(200, msg('Name is too long.')),
  email: z
    .string()
    .trim()
    .min(1, msg('Please enter your email address.'))
    .email(msg('Please enter a valid email address.')),
  company: z
    .string()
    .trim()
    .min(1, msg('Please enter your company.'))
    .max(200, msg('Company name is too long.')),
  phone: z
    .string()
    .trim()
    .min(1, msg('Please enter your phone number.'))
    .max(40, msg('Phone number is too long.'))
    .refine((v) => phoneCharset.test(v), {
      message: msg(
        'Phone may only include digits and symbols (+, spaces, dashes, parentheses). Letters are not allowed.',
      ),
    })
    .refine(
      (v) => {
        const digits = v.replace(/\D/g, '')
        return digits.length >= 10 && digits.length <= 15
      },
      { message: msg('Enter a phone number with 10–15 digits.') },
    ),
  message: z
    .string()
    .trim()
    .min(1, msg('Please enter a message.'))
    .max(10_000, msg('Message is too long.')),
  budget: z.enum(['25', '50', '100', '150'], {
    error: () => ({ message: msg('Please select a budget range.') }),
  }),
})

export type ContactInquiryFormInput = z.infer<typeof contactInquiryFormSchema>

export function firstZodIssueMessage(error: z.ZodError): string {
  return error.issues[0]?.message ?? 'Invalid input.'
}
