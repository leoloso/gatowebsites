import ExtensionsSection, { style2, svgEffect2 } from "@/app/(default)/extensions/extensions-section";
import SectionHeader from "./section-header";
import Particles from "./particles";
import RadiantGradient from "./radial-gradient";

export default function HomeExtensionsSection() {
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
            leading='Extensions'
            title="Extend your server"
            description='Provide additional functionality to the GraphQL server'
          />

          <ExtensionsSection
            applyThumbEffect={svgEffect2}
            applyStyle={style2}
          />

        </div>
      </div>
    </section>
  )
}