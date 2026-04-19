# Athena Digital

Marketing site for **Athena Digital**—a remote studio focused on content creation, posting, community management, and trend research. Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com).

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
- `npm run email:dev` — preview [React Email](https://react.email) templates under `./emails`

## Contact form (Resend + React Email)

Inquiries are sent with **Resend** using **React Email** templates from `./emails`. Full setup, env vars, Vercel notes, honeypot behavior, and a **QA checklist** are in [docs/contact-form.md](./docs/contact-form.md).

Quick start: copy `.env.example` to `.env.local`, add `RESEND_API_KEY` and `EMAIL_FROM`, verify your domain in [Resend](https://resend.com/domains). Preview templates with `npm run email:dev`.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com/)

The original project scaffold was derived from a Tailwind Plus example; site content and branding are Athena Digital.
