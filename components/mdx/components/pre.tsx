import clsx from 'clsx'
import { CopyButton } from './copy-button'
import Children from 'react-children-utilities'

// @see https://www.tybarho.com/articles/adding-a-copy-button-mdx-code-snippets
// @see https://github.com/rehype-pretty/rehype-pretty-code/issues/34#issuecomment-1529567170
export function Pre({
  children,
  buttonClasses = 'absolute top-3 right-3 bg-slate-900 hover:bg-amber-900',
  ...props
}: {
  children: React.ReactNode,
  buttonClasses?: string,
  className?: string,
}) {
  const raw = Children.onlyText(children)
  return (
    <pre {...props} className={clsx('relative group', props.className)}>
      {children}
      <CopyButton text={raw} className={buttonClasses} />
    </pre>
  )
}

