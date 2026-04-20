import { msg } from 'gt-next'

import imageHero from '@/images/athena/tomofromearth-02.jpg'

export const caseStudy = {
  client: 'Tomo Milicevic',
  title: msg(
    'Reigniting a public channel for a touring musician and creator',
  ),
  description: msg(
    'A hands-on partnership covering content direction, posting rhythm, and community touchpoints so an established artist could reconnect with fans online without living inside every platform.',
  ),
  summary: [
    msg(
      'Tomo Milicevic—known for his work with Thirty Seconds to Mars—wanted social channels that felt as alive as touring life, not like an afterthought between shows.',
    ),
    msg(
      'Athena Digital aligned content plans with his schedule, drafted and scheduled posts, and helped keep comments and DMs human—translating fan energy into a sustainable rhythm for both creator and studio.',
    ),
  ],
  image: {
    src: imageHero,
    alt: 'Tomo Milicevic, musician and creator',
  },
  date: '2026-04',
  service: msg('Content, posting & community'),
  testimonial: {
    author: {
      name: 'TomoFromEarth',
      role: msg('Guitarist: Thirty Seconds to Mars'),
    },
    content: msg(
      'Athena Digital has been a game-changer for my social media presence. They have helped me reignite my brand and connect with my fans like never before. I highly recommend them to anyone looking to take their social media to the next level.',
    ),
  },
}
