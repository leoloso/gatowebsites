import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/assets/GatoGraphQL-logo-suki-rectangular.png'

export default function FooterLogo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Gato GraphQL logo">
      <Image className="max-w-none" src={LogoImg} width={100} height={70} priority alt="Gato GraphQL logo" />
    </Link>
  )
}