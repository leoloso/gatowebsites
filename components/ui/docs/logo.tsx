import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/assets/GatoGraphQL-logo-face.png'

export default function Logo() {
  return (
    <Link className="inline-flex mb-2 md:mb-0" href="/" aria-label="Gato GraphQL logo">
      <Image src={LogoImg} width={32} height={32} alt="Gato GraphQL logo" />
    </Link>
  )
}
