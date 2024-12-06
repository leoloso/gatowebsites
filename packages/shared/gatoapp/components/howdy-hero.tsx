import PageHeader from './page-header'
import StunningBackground from './stunning-background'

export default function HowdyHero() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40">

          {/* Hero content */}
          <PageHeader
            leading="It's been a pleasure to meet you"
            title="Howdy, my friend!"
            paddingClassname='pb-6'
          />

        </div>
      </div>

    </section>
  )
}