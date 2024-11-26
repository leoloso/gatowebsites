'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAppComponentProvider } from 'gatoapp/app/appcomponent-provider'

export default function Logo() {
  const AppComponent = useAppComponentProvider()
  return (
    <Link className="inline-flex" href="/" aria-label="Logo">
      <Image className="max-w-none opacity-75 hover:opacity-100 transition duration-150 ease-in-out" src={AppComponent.header.logoImage} width={210} height={40} priority alt="Logo" />
    </Link>
  )
}