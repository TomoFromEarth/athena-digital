import { msg } from 'gt-next'

import authorImage from '@/images/brand/athena-digital-mark.png'

export const article = {
  date: '2025-02-02',
  title: msg('Trend research without losing the plot'),
  description: msg(
    'How Athena Digital separates signal from noise when platforms move fast—so you can borrow what fits your brand and ignore the rest.',
  ),
  author: {
    name: 'Julia',
    role: msg('Founder, Athena Digital'),
    image: { src: authorImage },
  },
}
