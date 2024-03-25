import StunningBackground from '@/components/stunning-background'
import PageHeader from '@/components/page-header'
import Cta from '@/components/cta-02'
import ComparisonList from './comparison-list'

export const metadata = {
  title: 'Comparisons - Gato GraphQL',
  description: 'How is Gato GraphQL different than many other WordPress plugins?',
}

export default function ComparisonsPage() {

  return (
    <>
      <section className="relative">

        <StunningBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40">

            {/* Section header */}
            <PageHeader
              leading='Plugins for WordPress'
              title='Comparing Gato GraphQL vs [...]'
              description='How is Gato GraphQL different than many other WordPress plugins?'
            />

            <ComparisonList />

          </div>
        </div>

      </section>
      <Cta />
    </>
  )
}
