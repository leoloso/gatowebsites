import FeaturesSection from './features-section'
import FeaturesList from 'gatoapp/components/features-list'
import CtaTryout02 from '@/components/cta-tryout-02'
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Features'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'All the standard GraphQL features, plus custom ones for speed, performance and functionality',
}

export default function Features() {
  return (
    <>
      <FeaturesSection />
      <FeaturesList/>
      <CtaTryout02 />
    </>
  )
}
