import StunningBackground from '@gato/components/src/stunning-background'
import Newsletter from '@gato/components/src/newsletter'
import PageHeader from '@gato/components/src/page-header'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Newsletter'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Stay in the loop on all new things concerning Gato GraphQL',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
}

export default function NewsletterPage() {
  return (
    <>
      <section className="relative">

      <StunningBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40">

            {/* Section header */}
            <PageHeader
              leading='Receive news on your email inbox'
              title='Subscribe to our newsletter'
              description='Stay in the loop on all new things concerning Gato GraphQL.'
            />

            <Newsletter />

          </div>
        </div>

      </section>
    </>
  )
}