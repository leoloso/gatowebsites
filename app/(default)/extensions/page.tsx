import Cta from '@/components/cta-02'
import StunningBackground from '@/components/stunning-background'
import { createSEOPageTitle } from '@/utils/content/metadata'
import ExtensionsSection from './extensions-section'
import ExtensionsPricingSection from './extensions-pricing-section'
import PageHeader from '@/components/page-header'

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
      <section className="relative pb-12 md:pb-20">

        <StunningBackground />
    
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/*  Page header */}
            <PageHeader
              leading='Empower your application'
              title='Extensions'
              description='Provide additional functionality to the GraphQL server, and expand the GraphQL schema'
            />

            <ExtensionsSection />
          </div>

          <div className="pb-12 md:pb-20">

            <ExtensionsPricingSection />

          </div>
        </div>

      </section>

      <Cta />
    </>
  )
}