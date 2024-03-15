import clsx from 'clsx'
import { CopyButton } from './copy-button'
import Children from 'react-children-utilities'

export function Pre({
  children,
  // raw,
  buttonClasses = 'absolute top-3 right-3 bg-zinc-900',
  ...props
}: {
  children: React.ReactNode,
  // raw: string,
  buttonClasses: string,
  className: string,
}) {
  const raw = Children.onlyText(children)
  return (
    <pre {...props} className={clsx('relative', props.className)}>
      {children}
      <CopyButton text={raw} className={buttonClasses} />
    </pre>
  )
}

