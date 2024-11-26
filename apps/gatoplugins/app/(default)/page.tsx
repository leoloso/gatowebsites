import Hero from 'gatoapp/components/hero'
import UseCases from '@/components/use-cases/use-cases'
import FeaturesCarousel from 'gatoapp/components/features-carousel'
import PricingSection from '@/components/pricing-section'
import Cta from '@/components/cta'
import HomeExtensionsSection from '@/components/home-extensions-section'
import AppConfig from '@/app/app.config'

export const metadata = {
  title: 'Gato Plugins',
  description: 'A collection of super useful plugins for WordPress',
}

export default function Home() {
  return (
    <>
      <Hero
        title="A collection of super useful plugins for WordPress"
        description={<span>Empower your <strong>WordPress</strong> site with <strong>Gato Plugins</strong>.</span>}
      />
      <UseCases />
      <FeaturesCarousel
        linkURL={`/${AppConfig.paths.features}`}
        lastSlideText='Browse the list of all features, discover how Gato GraphQL can empower and protect your application.'
      />
      <HomeExtensionsSection />
      <PricingSection />
      <Cta />
    </>
  )
}
