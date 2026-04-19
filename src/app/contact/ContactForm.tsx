'use client'

import { useActionState, useEffect, useId, useRef, useState } from 'react'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

import {
  type ContactActionState,
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

function TextInput({
  label,
  type = 'text',
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        type={type}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-60"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function Textarea({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        placeholder=" "
        className="peer block min-h-48 w-full resize-y border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-60"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-6 left-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

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

  const feedbackRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.status !== 'error') {
      return
    }
    const el = feedbackRef.current
    if (!el) {
      return
    }
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    el.focus()
  }, [state.status, state.status === 'error' ? state.error : ''])

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
            label="Name"
            name="name"
            autoComplete="name"
            required
            value={fields.name}
            onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={(e) =>
              setFields((f) => ({ ...f, email: e.target.value }))
            }
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            required
            value={fields.company}
            onChange={(e) =>
              setFields((f) => ({ ...f, company: e.target.value }))
            }
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            required
            title="10–15 digits; you may use +, spaces, dashes, and parentheses."
            value={fields.phone}
            onChange={(e) =>
              setFields((f) => ({ ...f, phone: e.target.value }))
            }
          />
          <Textarea
            label="Message"
            name="message"
            autoComplete="off"
            required
            value={fields.message}
            onChange={(e) =>
              setFields((f) => ({ ...f, message: e.target.value }))
            }
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset className="min-w-0 border-0 p-0">
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
          </div>
        </div>
        <Button type="submit" className="mt-10" disabled={isPending}>
          {isPending ? 'Sending…' : 'Let’s work together'}
        </Button>
      </fieldset>

      {state.status === 'error' ? (
        <div
          ref={feedbackRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-xl border border-red-200 bg-red-50/90 px-4 py-3 text-sm text-red-900"
        >
          {state.error}
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
