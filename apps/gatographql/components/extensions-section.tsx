import { Extension } from '@/.contentlayer/generated'
import StunningBackground from 'gatoapp/components/stunning-background'
import ArtifactsCarousel from 'gatoapp/components/artifacts-carousel'
import PageHeader from 'gatoapp/components/page-header'
import DefaultFeatureIcon from 'gatoapp/public/assets/theme/default/feature-icon-01.png'

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
            leading='PRO extensions'
            title='Superpower your WordPress site'
            description='Gato GraphQL PRO extensions enhance the GraphQL server, and extend the GraphQL schema. As new extensions are created, they will be included in Gato GraphQL PRO.'
          />

          <ArtifactsCarousel
            artifacts={ extensions }
            defaultArtifactIcon={DefaultFeatureIcon}
          />

        </div>
      </div>
    </section>
  )
}
