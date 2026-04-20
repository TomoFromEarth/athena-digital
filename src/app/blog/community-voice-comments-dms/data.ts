import { msg } from 'gt-next'

import authorImage from '@/images/brand/athena-digital-mark.png'

export const article = {
  date: '2025-03-15',
  title: msg('Community touchpoints that still sound like a person'),
  description: msg(
    'Why replies, DMs, and light moderation matter for trust—and how Athena Digital keeps community care on-brand without turning every answer into a press release.',
  ),
  author: {
    name: 'Julia',
    role: msg('Founder, Athena Digital'),
    image: { src: authorImage },
  },
}
