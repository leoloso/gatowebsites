import PluginsSection, { style2, svgEffect2 } from "@/app/(default)/plugins/plugins-section";
import SectionHeader from "gatoapp/components/section-header";
import Particles from "gatoapp/components/particles";
import RadiantGradient from "gatoapp/components/radial-gradient";
import HomePricingSection from "./home-pricing-section";

export default function HomePluginsSection() {
  return (
    <section className="relative">

      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />    
      </div>
      
      {/* Radial gradient */}
      <RadiantGradient />      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-32">
          
          {/* Section header */}
          <SectionHeader
            leading='Our collection of plugins for WordPress'
            title="Plugins"
            description='Browse the list of plugins, and choose the one you need'
          />

          <PluginsSection
            applyThumbEffect={svgEffect2}
            applyStyle={style2}
          />

          <HomePricingSection />

        </div>
      </div>
    </section>
  )
}