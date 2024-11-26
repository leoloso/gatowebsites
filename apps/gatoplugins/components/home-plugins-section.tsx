import PluginsSection, { style2, svgEffect2 } from "@/app/(default)/plugins/plugins-section";
import SectionHeader from "gatoapp/components/section-header";
import Particles from "gatoapp/components/particles";
import RadiantGradient from "gatoapp/components/radial-gradient";

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
            leading='Plugins'
            title="Satisfy your requirements"
            description='With plugins you can augment the server functionality, and extend the schema'
          />

          <PluginsSection
            applyThumbEffect={svgEffect2}
            applyStyle={style2}
          />

        </div>
      </div>
    </section>
  )
}