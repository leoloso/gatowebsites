import StunningBackground from 'gatoapp/components/stunning-background'
import Newsletter from 'gatoapp/components/newsletter'
import PageHeader from 'gatoapp/components/page-header'
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Newsletter'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Stay in the loop on all new things concerning Gato Plugins',
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
              leading='Do not miss an update!'
              title='Subscribe to our newsletter'
              description='Stay in the loop on all new products by Gato Plugins.'
            />

            <Newsletter
              label="Be the first to know!"
              description="Receive timely updates as Gato Plugins releases new plugins"
            />

          </div>
        </div>

      </section>
    </>
  )
}
