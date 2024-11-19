import SlidesCover from 'gatoapp/components/slides/cover/slides-cover'
import { createSEOPageTitle } from '@/utils/content/metadata'
import Logo from '@/public/assets/GatoGraphQL-logo-suki-text-square.png'
import Image from 'next/image'

const pageTitle = 'Slides Cover'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato GraphQL Slides Cover',
}

export default function AppSlidesCover() {
  const logo = (
    <Image src={Logo} alt="Logo" width={375} height={375} />
  )
  return (
    <SlidesCover
      logo={logo}
    />
  )
}
