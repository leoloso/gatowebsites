import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/assets/GatoGraphQL-logo-suki-text-rectangular.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Gato GraphQL logo">
      <Image className="max-w-none" src={LogoImg} width={210} height={40} priority alt="Gato GraphQL logo" />
    </Link>
  )
}