import { Extension } from 'contentlayer/generated'
import { PostMdx } from '@/components/mdx/post-mdx'
import ExtensionThumb from '@/components/extension-thumb'
import PageHeader from '@/components/page-header'
import PostItemIntegration from '@/components/post-item-integration'
import ThumbModalVideo from '@/components/mdx/components/modal-video-thumb'
import ExtensionThumbModalVideo from '@/components/mdx/components/modal-video-extension-thumb'

export default function SingleExtension({
  extension,
  printIntegrations = true,
}: {
  extension: Extension,
  printIntegrations?: boolean,
}) {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto">

          <article>

            {/* Title and excerpt */}
            <PageHeader
              {...extension}
              // headerClassname="md:text-left"
              leading='Extension'
            />

            <div className="mb-8 lg:-ml-32 lg:-mr-32">
              {! extension.video && (
                <ExtensionThumb
                  extension={extension}
                  isLandscape={true}
                />
              )}
              {!! extension.video && (
                <ExtensionThumbModalVideo
                  // title={`Click Play to watch a demo of the ${extension.title} extension`}
                  title="Click to watch video"
                  extension={extension}
                  video={extension.video}
                  videoWidth={1920}
                  videoHeight={1080}
                />
              )}
            </div>

            { printIntegrations && !! extension.integrations && (
              <div className="mb-8">
                <h4 className="text-2xl font-bold font-inter mb-8">Integrations</h4>
                <div className="flex flex-col border-t border-gray-200">
                  {extension.integrations.map((integration, index) => (
                    <PostItemIntegration key={index} {...integration} />
                  ))}
                </div>
              </div>
            )}

            {/* Article content */}
            <PostMdx code={extension.body.code} />
          </article>

        </div>

      </div>
    </div>
  )
}