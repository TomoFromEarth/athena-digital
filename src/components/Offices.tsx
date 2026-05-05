import clsx from 'clsx'
import { T } from 'gt-next'

function Office({
  name,
  children,
  invert = false,
}: {
  name: React.ReactNode
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name={<T>Remote studio</T>} invert={invert}>
          <T>Serving clients remotely</T>
        </Office>
      </li>
    </ul>
  )
}
