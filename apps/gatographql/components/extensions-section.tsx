import { Extension } from '@/.contentlayer/generated'
import StunningBackground from '@gato/components/stunning-background'
import ArtifactsCarousel from '@gato/components/artifacts-carousel'
import PageHeader from '@gato/components/page-header'
import DefaultArtifactIcon from '@/public/assets/theme/default/artifact-icon-01.png'

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
            defaultArtifactIcon={DefaultArtifactIcon}
          />

        </div>
      </div>
    </section>
  )
}