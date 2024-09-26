'use client'

import Dropdown from '@/components/standard/dropdown'

export default function ExtensionDropdown() {

  const options = [
    {
      id: 0,
      period: 'Today'
    },
    {
      id: 1,
      period: 'Last 7 Days'
    },
    {
      id: 2,
      period: 'Last Month'
    },
    {
      id: 3,
      period: 'Last 12 Months'
    },
    {
      id: 4,
      period: 'All Time'
    }
  ]

  
  return (
    <Dropdown options={options} />
  )
}