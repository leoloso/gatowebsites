import { Extension } from '@/.contentlayer/generated'
import { PostMdx } from 'gatoapp/components/mdx/post-mdx'
import ExtensionThumb from '@/components/extension-thumb'
import PageHeader from 'gatoapp/components/page-header'
import PostItemIntegration from 'gatoapp/components/post-item-integration'
import ExtensionThumbModalVideo from '@/components/video/modal-video-extension-thumb'
import BrowseExtensionReferenceDocButton from '@/components/browse-extension-reference-doc-button'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'

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

        <CampaignBanner />

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
                  clickTitle={`Click to watch tutorial video - ${extension.videoDuration}`}
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

          <div className="sm:mt-12 mt-24 flex items-center">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <BrowseExtensionReferenceDocButton
                extension={extension}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}