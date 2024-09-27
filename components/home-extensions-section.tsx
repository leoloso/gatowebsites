import ExtensionsSection, { style2, svgEffect2 } from "@/app/(default)/extensions/extensions-section";
import SectionHeader from "./section-header";
import Particles from "./particles";

export default function HomeExtensionsSection() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Particles animation */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
          <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />    
        </div>

        {/* Blurred shape */}
        <div className="absolute top-0 mt-32 -translate-y-1/4 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none -z-10 rotate-[90deg]" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs3-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
          </svg>
        </div>

        <div className="pt-16 pb-12 md:pt-32 md:pb-20">

          {/* Section header */}
          <SectionHeader
            leading='Empower your application'
            title="Extensions"
            description='Provide additional functionality to the GraphQL server, and expand the GraphQL schema'
          />

          <ExtensionsSection
            useThumbEffect={svgEffect2}
            applyStyle={style2}
          />

        </div>
      </div>
    </section>
  )
}