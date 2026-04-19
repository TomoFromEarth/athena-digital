'use client'

import {
  forwardRef,
  useActionState,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

import {
  type ContactActionState,
  type ContactFormFieldKey,
  submitContactInquiry,
} from '@/app/contact/actions'

type BudgetValue = '25' | '50' | '100' | '150'

type FormFields = {
  name: string
  email: string
  company: string
  phone: string
  message: string
  budget: BudgetValue | ''
}

const emptyFields: FormFields = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  budget: '',
}

const FIELD_FOCUS_ORDER: ContactFormFieldKey[] = [
  'name',
  'email',
  'company',
  'phone',
  'message',
  'budget',
]

type TextFieldKey = Exclude<ContactFormFieldKey, 'budget'>

const TextInput = forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'> & { label: string; error?: string }
>(function TextInput({ label, type = 'text', error, ...props }, ref) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        ref={ref}
        id={id}
        type={type}
        {...props}
        placeholder=" "
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`peer block w-full border bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-60 ${
          error
            ? 'border-red-600 focus:border-red-700 focus:ring-red-600/15'
            : 'border-neutral-300 focus:border-neutral-950 focus:ring-neutral-950/5'
        }`}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
      {error ? (
        <p
          id={errorId}
          className="px-6 pb-3 text-sm font-medium text-red-700"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
})

const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<'textarea'> & { label: string; error?: string }
>(function Textarea({ label, error, ...props }, ref) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        ref={ref}
        id={id}
        {...props}
        placeholder=" "
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`peer block min-h-48 w-full resize-y border bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-60 ${
          error
            ? 'border-red-600 focus:border-red-700 focus:ring-red-600/15'
            : 'border-neutral-300 focus:border-neutral-950 focus:ring-neutral-950/5'
        }`}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-6 left-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
      {error ? (
        <p
          id={errorId}
          className="px-6 pb-3 text-sm font-medium text-red-700"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  )
})

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-8 checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:opacity-60"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

const contactInitialState: ContactActionState = { status: 'idle' }

function ContactFormImpl({ onReset }: { onReset: () => void }) {
  const [fields, setFields] = useState<FormFields>(emptyFields)

  const [state, formAction, isPending] = useActionState(
    submitContactInquiry,
    contactInitialState,
  )

  const fieldRefs = useRef<
    Partial<
      Record<TextFieldKey, HTMLInputElement | HTMLTextAreaElement | null>
    >
  >({})
  const budgetSectionRef = useRef<HTMLDivElement>(null)
  const feedbackRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const fieldErrors = state.status === 'error' ? state.fieldErrors : undefined
  const formError = state.status === 'error' ? state.error : undefined

  function setFieldRef(key: TextFieldKey) {
    return (el: HTMLInputElement | HTMLTextAreaElement | null) => {
      fieldRefs.current[key] = el
    }
  }

  useEffect(() => {
    if (state.status !== 'error') {
      return
    }
    if (fieldErrors) {
      for (const key of FIELD_FOCUS_ORDER) {
        if (!fieldErrors[key]) {
          continue
        }
        if (key === 'budget') {
          const section = budgetSectionRef.current
          section?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          section
            ?.querySelector<HTMLInputElement>('input[name="budget"]')
            ?.focus()
          return
        }
        const el = fieldRefs.current[key]
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        el?.focus()
        return
      }
    }
    if (formError) {
      const el = feedbackRef.current
      if (!el) {
        return
      }
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      el.focus()
    }
  }, [state.status, fieldErrors, formError])

  useEffect(() => {
    if (state.status !== 'success') {
      return
    }
    const el = successRef.current
    if (!el) {
      return
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    el.focus()
  }, [state.status])

  if (state.status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm ring-1 ring-neutral-950/5"
      >
        <p className="font-display text-lg font-semibold text-neutral-950">
          Thanks — we received your inquiry
        </p>
        <p className="mt-3 text-base leading-relaxed text-neutral-600">
          Athena Digital will follow up by email. If you need anything else in
          the meantime, you can reach us at{' '}
          <a
            href="mailto:julia@athenadigital.me"
            className="font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-950"
          >
            julia@athenadigital.me
          </a>
          .
        </p>
        <Button type="button" className="mt-8" onClick={onReset}>
          Send another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      aria-busy={isPending}
      className="relative"
      noValidate
    >
      {/* Honeypot: hidden from users; bots often fill. Server discards without sending. */}
      <div className="sr-only" aria-hidden="true">
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <fieldset
        disabled={isPending}
        className="min-w-0 border-0 p-0"
        aria-labelledby="contact-form-title"
      >
        <h2
          id="contact-form-title"
          className="font-display text-base font-semibold text-neutral-950"
        >
          Project inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            ref={setFieldRef('name')}
            label="Name"
            name="name"
            autoComplete="name"
            required
            value={fields.name}
            error={fieldErrors?.name}
            onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
          />
          <TextInput
            ref={setFieldRef('email')}
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={fields.email}
            error={fieldErrors?.email}
            onChange={(e) =>
              setFields((f) => ({ ...f, email: e.target.value }))
            }
          />
          <TextInput
            ref={setFieldRef('company')}
            label="Company"
            name="company"
            autoComplete="organization"
            required
            value={fields.company}
            error={fieldErrors?.company}
            onChange={(e) =>
              setFields((f) => ({ ...f, company: e.target.value }))
            }
          />
          <TextInput
            ref={setFieldRef('phone')}
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            required
            title="10–15 digits; you may use +, spaces, dashes, and parentheses."
            value={fields.phone}
            error={fieldErrors?.phone}
            onChange={(e) =>
              setFields((f) => ({ ...f, phone: e.target.value }))
            }
          />
          <Textarea
            ref={setFieldRef('message')}
            label="Message"
            name="message"
            autoComplete="off"
            required
            value={fields.message}
            error={fieldErrors?.message}
            onChange={(e) =>
              setFields((f) => ({ ...f, message: e.target.value }))
            }
          />
          <div
            ref={budgetSectionRef}
            className={`border px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl ${
              fieldErrors?.budget
                ? 'border-red-600'
                : 'border-neutral-300'
            }`}
          >
            <fieldset
              className="min-w-0 border-0 p-0"
              aria-invalid={fieldErrors?.budget ? true : undefined}
              aria-describedby={
                fieldErrors?.budget ? 'contact-budget-error' : undefined
              }
            >
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="$25K – $50K"
                  name="budget"
                  value="25"
                  required
                  checked={fields.budget === '25'}
                  onChange={() => setFields((f) => ({ ...f, budget: '25' }))}
                />
                <RadioInput
                  label="$50K – $100K"
                  name="budget"
                  value="50"
                  checked={fields.budget === '50'}
                  onChange={() => setFields((f) => ({ ...f, budget: '50' }))}
                />
                <RadioInput
                  label="$100K – $150K"
                  name="budget"
                  value="100"
                  checked={fields.budget === '100'}
                  onChange={() => setFields((f) => ({ ...f, budget: '100' }))}
                />
                <RadioInput
                  label="More than $150K"
                  name="budget"
                  value="150"
                  checked={fields.budget === '150'}
                  onChange={() => setFields((f) => ({ ...f, budget: '150' }))}
                />
              </div>
            </fieldset>
            {fieldErrors?.budget ? (
              <p
                id="contact-budget-error"
                className="mt-4 text-sm font-medium text-red-700"
                role="alert"
              >
                {fieldErrors.budget}
              </p>
            ) : null}
          </div>
        </div>
        <Button type="submit" className="mt-10" disabled={isPending}>
          {isPending ? 'Sending…' : 'Let’s work together'}
        </Button>
      </fieldset>

      {formError ? (
        <div
          ref={feedbackRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-xl border border-red-200 bg-red-50/90 px-4 py-3 text-sm text-red-900"
        >
          {formError}
        </div>
      ) : null}
    </form>
  )
}

export function ContactForm() {
  const [session, setSession] = useState(0)

  return (
    <FadeIn className="lg:order-last">
      <ContactFormImpl key={session} onReset={() => setSession((s) => s + 1)} />
    </FadeIn>
  )
}
