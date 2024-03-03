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
            leading='Gato GraphQL plugin'
            title='Interact with all your data in WordPress'
            description='Superpower your WordPress site using standard and custom GraphQL features, included in the free Gato GraphQL plugin.'
          />

        </div>
      </div>
    </section>
  )
}
