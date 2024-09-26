'use client'

import { Extension } from '@/.contentlayer/generated'
import Dropdown from '@/components/standard/dropdown'

export default function ExtensionDropdown({
  extensions,
}: {
  extensions: Extension[]
}) {

  const options = extensions.map((extension, index) => (
    {
      id: index,
      period: extension.title
    }
  ))
  
  return (
    <Dropdown options={options} />
  )
}