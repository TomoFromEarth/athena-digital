import { msg } from 'gt-next'

import authorImage from '@/images/brand/athena-digital-mark.png'

export const article = {
  date: '2025-04-10',
  title: msg('Building a content rhythm when your calendar never cooperates'),
  description: msg(
    'How Athena Digital thinks about planning, batching, and realistic posting windows for creators and teams whose weeks rarely look the same twice.',
  ),
  author: {
    name: 'Julia',
    role: msg('Founder, Athena Digital'),
    image: { src: authorImage },
  },
}
