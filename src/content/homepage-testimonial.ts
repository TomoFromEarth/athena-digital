import { msg } from 'gt-next'

/**
 * Approved client testimonial for the homepage.
 * Paste the real quote and attribution when ready; keep empty strings until
 * then. Strings wrapped with msg() are extracted for translation; render them
 * with gt() from getGT()/useGT(). authorName stays literal because it's a
 * proper noun; authorTitle goes through msg() so the role ("Guitarist") can
 * translate while the band name is preserved by the translator as a proper
 * noun.
 */
export const homepageTestimonial = {
  /** Client's words only — do not fabricate. */
  quote: msg(
    'Athena Digital has been a game-changer for my social media presence. They have helped me reignite my brand and connect with my fans like never before. I highly recommend them to anyone looking to take their social media to the next level.',
  ),
  authorName: 'TomoFromEarth',
  authorTitle: msg('Guitarist: Thirty Seconds to Mars'),
}
