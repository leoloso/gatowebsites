'use client'

import { Extension } from '@/.contentlayer/generated'
import FullWidthDropdown from '@/components/standard/dropdown-full-width'

export default function ExtensionDropdown({
  extensions,
}: {
  extensions: Extension[]
}) {

  const extensionNames = extensions.map((extension, index) => extension.title)
  
  return (
    <FullWidthDropdown values={extensionNames} />
  )
}