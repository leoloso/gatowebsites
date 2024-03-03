import PageHeader from './page-header'
import StunningBackground from './stunning-background'

export default function FeaturesSection() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <PageHeader
            leading='Empower your site with Gato GraphQL'
            title='Interact with all your data in WordPress'
            description='The free Gato GraphQL plugin provides all the standard GraphQL features, plus many custom ones for speed, performance and functionality.'
          />

        </div>
      </div>
    </section>
  )
}
