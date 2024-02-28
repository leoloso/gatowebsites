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
              description='Stellar powers thousands of high-impact product teams. From next-gen startups who reach for the stars to established greats who change the world.'
            />

            <Newsletter
              label='Tutorials, updates, & more'
            />

          </div>
        </div>

      </section>
    </>
  )
}
