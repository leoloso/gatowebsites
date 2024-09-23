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
            leading='Unleash your capabilities'
            title='Features'
            description='Empower and protect your application with these features by Gato GraphQL.'
          />

        </div>
      </div>
    </section>
  )
}
