import { Extension } from '@/.contentlayer/generated'
import StunningBackground from './stunning-background'
import ArtifactsCarousel from './artifacts-carousel'

export default function ExtensionsSection({ extensions }: {
  extensions: Array<Extension>
}) {
  return (
    <section className="relative">

      <StunningBackground addOpacityLayer={true} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Integrations & Add-ons</div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Make Stellar uniquely yours</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            </div>
          </div>

          <ArtifactsCarousel
            artifacts={ extensions }
          />

        </div>
      </div>
    </section>
  )
}
