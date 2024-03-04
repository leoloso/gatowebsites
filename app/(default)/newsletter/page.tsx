export const metadata = {
  title: 'Newsletter - Stellar',
  description: 'Page description',
}

import StunningBackground from '@/components/stunning-background'
import Newsletter from '@/components/newsletter'
import PageHeader from '@/components/page-header'

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
