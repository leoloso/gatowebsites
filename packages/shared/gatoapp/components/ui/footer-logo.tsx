import Link from 'next/link'
import Image from 'next/image'
import LogoImg from 'gatoapp/public/assets/Gato-logo-suki-rectangular.png'

export default function FooterLogo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Logo">
      <Image className="max-w-none" src={LogoImg} width={100} height={70} priority alt="Logo" />
    </Link>
  )
}