import { Plugin } from '@/.contentlayer/generated'
import { PostMdx } from 'gatoapp/components/mdx/post-mdx'
import PluginThumb from '@/components/plugin-thumb'
import PageHeader from 'gatoapp/components/page-header'
import PluginThumbModalVideo from '@/components/video/modal-video-plugin-thumb'
import BrowsePluginDocButton from '@/components/browse-plugin-doc-button'
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'
import { getPluginSectionsForPlugin } from '@/utils/content/document'
import SectionHeader from 'gatoapp/components/section-header'
import FeaturesList from 'gatoapp/components/features-list-02';
import TickImage from 'gatoapp/public/assets/theme/tick-03.svg'
import { style2 } from 'gatoapp/components/thumbnails/thumb'

export default function SinglePlugin({
  plugin,
  // printIntegrations = true,
}: {
  plugin: Plugin,
  // printIntegrations?: boolean,
}) {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20"> 

        <CampaignBanner />

        <div className="max-w-3xl mx-auto">

          <article>

            {/* Title and excerpt */}
            <PageHeader
              {...plugin}
              // headerClassname="md:text-left"
              leading='Plugin'
            />

            <div className="mb-8 lg:-ml-32 lg:-mr-32">
              <PluginThumb
                plugin={plugin}
                isLandscape={true}
                applyStyle={style2}
              />
            </div>

            {/* { printIntegrations && !! plugin.integrations && (
              <div className="mb-8">
                <h4 className="text-2xl font-bold font-inter mb-8">Integrations</h4>
                <div className="flex flex-col border-t border-gray-200">
                  {plugin.integrations.map((integration, index) => (
                    <PostItemIntegration key={index} {...integration} />
                  ))}
                </div>
              </div>
            )} */}

            {/* Article content */}
            <PostMdx code={plugin.body.code} />

            {!! plugin.video && (
              <div className="mt-8 md:mt-12 lg:-ml-32 lg:-mr-32">
                <PluginThumbModalVideo
                  // clickTitle={`Click to watch video - ${plugin.videoDuration}`}
                  clickTitle="Click to watch video"
                  plugin={plugin}
                  video={plugin.video}
                  videoWidth={1920}
                  videoHeight={1080}
                  printPluginTitle={true}
                  titleClassname = "h2"
                />
              </div>
            )}

            {!! plugin.features && (
              <div className="pt-16 md:pt-32 lg:-ml-32 lg:-mr-32">
                <SectionHeader
                  title="Features"
                />
                
                <FeaturesList
                  features={plugin.features}
                  featureIcon={TickImage}
                />
              </div>
            )}

            {/* Plugin Sections */}
            { getPluginSectionsForPlugin(plugin.slug).map((pluginSection, index) => (
              <div className="pt-16 md:pt-32" key={index}>
                {/* Title and excerpt */}
                <SectionHeader
                  {...pluginSection}
                  // headerClassname="md:text-left"
                  // leading='Plugin'
                />

                {/* Article content */}
                <PostMdx code={pluginSection.body.code} />

                {!! pluginSection.video && (
                  <div className="mt-8 md:mt-12 lg:-ml-16 lg:-mr-16">
                    <PluginThumbModalVideo
                      // clickTitle={`Click to watch video - ${pluginSection.videoDuration}`}
                      clickTitle="Click to watch video"
                      plugin={plugin}
                      video={pluginSection.video}
                      videoWidth={1920}
                      videoHeight={1080}
                      pluginTitle={pluginSection.title}
                      printPluginTitle={true}
                      titleClassname = "h2"
                  />
                  </div>
                )}
              </div>
            ))}
          </article>

          <div className="sm:mt-20 mt-32 flex items-center">
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <BrowsePluginDocButton
                plugin={plugin}
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}