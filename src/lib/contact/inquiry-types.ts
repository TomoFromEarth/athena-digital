export const BUDGET_VALUES = ['25', '50', '100', '150'] as const

export const BUDGET_LABELS: Record<
  (typeof BUDGET_VALUES)[number],
  string
> = {
  '25': '$25K – $50K',
  '50': '$50K – $100K',
  '100': '$100K – $150K',
  '150': 'More than $150K',
}

export type ContactInquiryPayload = {
  name: string
  email: string
  company: string
  phone: string
  message: string
  budget: (typeof BUDGET_VALUES)[number]
}
