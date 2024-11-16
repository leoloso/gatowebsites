'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAppComponentProvider } from '@gato/app/appcomponent-provider'

export default function Logo() {
  const { logoImage } = useAppComponentProvider()
  return (
    <Link className="inline-flex" href="/" aria-label="Gato GraphQL logo">
      <Image className="max-w-none opacity-70 hover:opacity-100 transition duration-150 ease-in-out" src={logoImage} width={210} height={40} priority alt="Logo" />
    </Link>
  )
}