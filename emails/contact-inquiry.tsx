import { ContactInquiryEmail } from './templates/ContactInquiryEmail'

/** Sample props for local `npm run email:dev` preview (issue #19). */
export default function ContactInquiryPreview() {
  return (
    <ContactInquiryEmail
      name="Taylor Morgan"
      email="taylor@example.com"
      company="Northwind Studio"
      phone="+1 415 555 0142"
      message={`We're looking for support with quarterly content planning, short-form video scripts, and light community moderation through our launch window.`}
      budget="50"
    />
  )
}
