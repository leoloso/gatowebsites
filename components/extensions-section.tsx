import { Extension } from '@/.contentlayer/generated'
import StunningBackground from './stunning-background'
import ArtifactsCarousel from './artifacts-carousel'
import PageHeader from './page-header'

export default function ExtensionsSection({ extensions }: {
  extensions: Array<Extension>
}) {
  return (
    <section className="relative">

      <StunningBackground addOpacityLayer={true} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <PageHeader
            leading='Integrations & Add-ons'
            title='Make Stellar uniquely yours'
            description='Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.'
          />

          <ArtifactsCarousel
            artifacts={ extensions }
          />

        </div>
      </div>
    </section>
  )
}
