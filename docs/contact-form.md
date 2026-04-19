# Contact form: configuration, email, and QA

This document covers the **launch-required** setup for the `/contact` inquiry flow, optional tooling, and how to verify it locally and in production.

## Required for launch

| Item | Description |
|------|-------------|
| **Resend account + API key** | Create a key at [resend.com/api-keys](https://resend.com/api-keys). |
| **Verified domain** | Add your domain at [resend.com/domains](https://resend.com/domains) and complete DNS. Until verified, Resend may only allow sending to your Resend login email. |
| **Environment variables** | Set in **Vercel → Project → Settings → Environment Variables** for **Production** (and Preview if you test there). Redeploy after changes. |

### Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes | Resend API secret (`re_…`). Never commit; use Vercel env or local `.env.local`. |
| `EMAIL_FROM` | Yes | Sender, e.g. `Athena Digital <hello@yourdomain.com>` — must use an address on a **verified** domain (or Resend’s test sender while experimenting). |
| `CONTACT_INQUIRY_TO_EMAIL` | No | Inbox for notifications. Defaults to `julia@athenadigital.me` if unset. |

Copy `.env.example` to `.env.local` for local development. **Do not** put real secrets in `.env.example`.

## Launch-recommended email path (current implementation)

- **Templates**: React components under `./emails` (e.g. `ContactInquiryEmail`).
- **Sending**: Server action → `resend.emails.send({ react: <ContactInquiryEmail … /> })` in `src/lib/email/send-contact-inquiry.tsx`.
- **No** dependency on Resend dashboard–managed HTML templates for launch; templates live in the repo and render in Node at send time.

### Optional later: Resend dashboard templates

If non-developers need to edit copy in Resend’s UI, you can add dashboard templates or sync workflows **on top of** the same React components—treat it as a follow-up, not a launch blocker.

## Local development: site + email preview

1. **Site**: `npm run dev` → [http://localhost:3000/contact](http://localhost:3000/contact).
2. **Email templates only** (no send): `npm run email:dev` → opens the React Email preview for files under `./emails` (e.g. `contact-inquiry.tsx`).
3. **End-to-end send**: Configure `.env.local` with real `RESEND_API_KEY` and `EMAIL_FROM`, then submit the contact form locally.

## Spam mitigation (honeypot)

The contact form includes a **honeypot** field (`name="company_website"`) hidden from users. If it is filled, the server **does not send email** and returns a **silent success** (so simple bots do not get validation hints). Legitimate users leave it empty.

**Not included in v1:** rate limiting, CAPTCHA, or IP blocking—track as follow-ups if abuse appears.

## Manual QA checklist

### Local

- [ ] `.env.local` has `RESEND_API_KEY` and `EMAIL_FROM` (and optional `CONTACT_INQUIRY_TO_EMAIL`).
- [ ] Submit `/contact` with valid data → success message and email received (or Resend dashboard shows the send).
- [ ] Submit with honeypot filled (devtools) → no email / no Resend send; UI still shows success (silent discard).
- [ ] `npm run email:dev` → template renders without errors.

### Production (after deploy)

- [ ] Same env vars set for **Production** on Vercel; redeployed after changes.
- [ ] Submit live `/contact` → notification arrives at the configured inbox.
- [ ] Confirm send appears in Resend **Emails** / **Logs**.

## Known follow-ups (out of scope for initial launch)

- Stronger abuse controls (rate limits, CAPTCHA, edge middleware).
- Richer submit confirmation UX (dedicated issue / polish pass).
- Newsletter / secondary forms parity with contact behavior.
