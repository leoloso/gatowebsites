'use client'

import { Extension } from '@/.contentlayer/generated'
import FullWidthDropdown from '@/components/standard/dropdown-full-width'
import { Dispatch, SetStateAction } from 'react'

export default function ExtensionDropdown({
  extensions,
  state,
}: {
  extensions: Extension[]
  state?: [number, Dispatch<SetStateAction<number>>],
}) {

  const extensionNames = extensions.map((extension, index) => extension.title)
  
  return (
    <FullWidthDropdown values={extensionNames} state={state} />
  )
}