import Image from 'next/image'
import clsx from 'clsx'

import athenaDigitalLogo from '@/images/brand/athena-digital-logo.png'
import athenaDigitalMark from '@/images/brand/athena-digital-mark.png'

export function Logomark({
  className,
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'span'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center',
        invert && 'drop-shadow-[0_0_0.5rem_rgba(255,255,255,0.14)]',
        className,
      )}
      {...props}
    >
      <Image
        src={athenaDigitalMark}
        alt=""
        sizes="32px"
        className={clsx(
          'h-full w-auto object-contain transition-transform duration-300',
          filled && 'scale-[1.02]',
        )}
      />
    </span>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'span'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <span
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Image
        src={athenaDigitalLogo}
        alt=""
        sizes="(min-width: 640px) 160px, 32px"
        className={clsx(
          'h-full w-auto object-contain transition-transform duration-300',
          invert && 'drop-shadow-[0_0_0.5rem_rgba(255,255,255,0.14)]',
          filled && 'scale-[1.02]',
          fillOnHover && 'group-hover/logo:scale-[1.02]',
        )}
      />
    </span>
  )
}
