import Image, { type ImageProps } from 'next/image'

/** Inline MDX / article imagery (full color; name kept for stable imports). */
export function GrayscaleTransitionImage(
  props: Pick<
    ImageProps,
    'src' | 'quality' | 'className' | 'sizes' | 'priority' | 'fill'
  > & { alt?: string },
) {
  return <Image alt="" {...props} />
}
