import Cta from '@/components/cta-02'
import StunningBackground from '@/components/stunning-background'
import { createSEOPageTitle } from '@/utils/content/metadata'
import ExtensionsSection, { svgEffect2 } from './extensions-section'

const pageTitle = 'Extensions'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Provide additional functionality to Gato GraphQL, and expand the GraphQL schema',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
}

export default function Extensions() {

  return (
    <>
      <section className="relative">

        <StunningBackground />

        <ExtensionsSection useThumbEffect={svgEffect2} />
      </section>  
      <Cta />
    </>
  )
}