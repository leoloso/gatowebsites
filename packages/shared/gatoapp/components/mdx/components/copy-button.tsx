'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { ClipboardIcon, CheckIcon } from '@heroicons/react/20/solid'

const buttonClasses = 'flex hidden group-hover:flex items-center text-xs font-medium text-white rounded btn-sm'

export function CopyButton({
  text,
  className,
}: {
  text: string,
  className: string,
}) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2500)
  }

  const Icon = isCopied ? CheckIcon : ClipboardIcon

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={clsx(buttonClasses, className)}
    >
      <Icon className="mr-1 h-4 w-4" />
      <span>{isCopied ? 'Copied!' : 'Copy'}</span>
    </button>
  )
}

