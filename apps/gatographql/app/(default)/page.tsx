import Hero from '@/components/hero'
import UseCases from '@/components/use-cases/use-cases'
import FeaturesCarousel from 'gatoapp/components/features-carousel'
import PricingSection from '@/components/pricing-section'
import CtaTryout01 from '@/components/cta-tryout-01'
import HomeExtensionsSection from '@/components/home-extensions-section'
import AppConfig from '@/app/app.config'

export const metadata = {
  title: 'Gato GraphQL',
  description: 'Powerful and flexible GraphQL server for WordPress',
}

export default function Home() {
  return (
    <>
      <Hero
        title="Powerful and flexible GraphQL server for WordPress"
        description={<span>Use <strong>Gato GraphQL</strong> to interact with all your data in your <strong>WordPress</strong> site.</span>}
      />
      <UseCases />
      <FeaturesCarousel
        linkURL={`/${AppConfig.paths.features}`}
        lastSlideText='Browse the list of all features, discover how Gato GraphQL can empower and protect your application.'
      />
      <HomeExtensionsSection />
      <PricingSection />
      <CtaTryout01 />
    </>
  )
}
