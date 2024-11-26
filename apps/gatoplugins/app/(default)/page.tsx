import Hero from 'gatoapp/components/hero'
// import Cta from '@/components/cta'
import HomePluginsSection from '@/components/home-plugins-section'

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
      <HomePluginsSection />
      {/* <Cta /> */}
    </>
  )
}
