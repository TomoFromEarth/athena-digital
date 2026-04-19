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

## Contact form email (Resend)

Production sends use [Resend](https://resend.com). Copy `.env.example` to `.env.local`, add `RESEND_API_KEY`, `EMAIL_FROM`, and optionally `CONTACT_INQUIRY_TO_EMAIL`. Without these, the contact form shows a configuration error instead of sending.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [MDX](https://mdxjs.com/)

The original project scaffold was derived from a Tailwind Plus example; site content and branding are Athena Digital.
