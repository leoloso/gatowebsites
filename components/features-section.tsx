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
            leading='Flexibility, versatility, and power'
            title='Features'
            description='GraphQL offers ways to augment, protect, and speed up your application'
          />

        </div>
      </div>
    </section>
  )
}
