import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/assets/GatoGraphQL-logo-face.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Gato GraphQL logo">
      <Image className="max-w-none" src={LogoImg} width={38} height={38} priority alt="Gato GraphQL logo" />
    </Link>
  )
}