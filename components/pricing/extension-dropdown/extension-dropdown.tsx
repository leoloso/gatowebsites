'use client'

import { Extension } from '@/.contentlayer/generated'
import FullWidthDropdown from '@/components/standard/dropdown-full-width'

export default function ExtensionDropdown({
  extensions,
}: {
  extensions: Extension[]
}) {

  const options = extensions.map((extension, index) => (
    {
      id: index,
      value: extension.title
    }
  ))
  
  return (
    <FullWidthDropdown options={options} />
  )
}