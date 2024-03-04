import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/assets/GatoGraphQL-logo-suki-rectangular.png'

export default function FooterLogo() {
  return (
    <Link className="inline-flex mb-2 md:mb-0" href="/" aria-label="Gato GraphQL logo">
      <Image src={LogoImg} width={100} height={70} alt="Gato GraphQL logo" />
    </Link>
  )
}
