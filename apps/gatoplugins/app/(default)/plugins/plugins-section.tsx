import { allPlugins, Plugin } from '@/.contentlayer/generated'
import Link from 'next/link'
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'
import PluginThumb from '@/components/plugin-thumb'
import clsx from 'clsx'
import LinkModalVideo from 'gatoapp/components/mdx/components/modal-video-link'
import ProductThumb from 'gatoapp/components/product-thumb'

export const svgEffect1 = 1;
export const svgEffect2 = 2;

export const style1 = 1;
export const style2 = 2;
export const style3 = 3;

export const linkToPlugin = 1;
export const linkToPluginDoc = 2;

export default function PluginsSection({
  alternateColumns = false,
  applyThumbEffect = svgEffect1,
  applyStyle = style1,
  linkTarget = linkToPlugin,
}: {
  alternateColumns?: boolean,
  applyThumbEffect?: number,
  applyStyle?: number,
  linkTarget?: number,
}) {

  const plugins = allPlugins.sort(sortByOrderAndTitle)

  const bgClassnames = [
    "bg-purple-500 group-hover:bg-purple-400",
    "bg-indigo-500 group-hover:bg-indigo-400",
    "bg-blue-500 group-hover:bg-blue-400",
    "bg-sky-500 group-hover:bg-sky-400",
    "bg-cyan-500 group-hover:bg-cyan-400",
    "bg-teal-500 group-hover:bg-teal-400",
    "bg-violet-500 group-hover:bg-violet-400",
  ]

  function getPluginLink(plugin: Plugin) {
    if (linkTarget === linkToPlugin) {
      return plugin.urlPath;
    }
    return plugin.docUrlPath;
  }

  const morePluginsComingSoonProps = {
    title: "More plugins coming soon",
    description: "We are working on several new plugins. Be notified when there is a new release by subscribing to our newsletter (form below).",
    targetImages: [
      '/images/icons/coming-soon.png'
    ]
  }

  return (
    <div className={clsx("pb-12 md:pb-20", applyStyle === style3 && "max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none")}>
      <div className={clsx(applyStyle === style3 && "grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3")}>

        {/* Plugins */}
        {plugins.map((plugin, index) => (
          <div className={clsx(applyStyle === style1 && "pb-12 md:pb-20", applyStyle === style2 && "pb-8 md:pb-12")} key={index}>
            <article className={clsx((applyStyle === style1 || applyStyle === style2) && "max-w-3xl mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center")}>
              <Link
                href={getPluginLink(plugin)}
                className={clsx("relative block group", alternateColumns && index % 2 === 1 ? 'md:order-last' : '')}
              >
                { applyThumbEffect === svgEffect1 && (
                  <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                )}
                <div className={clsx("relative", applyThumbEffect === svgEffect1 && "overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out")}>
                  <PluginThumb
                    plugin={plugin}
                    paddingClassname={clsx("py-5 px-4", applyStyle === style1 && "md:py-8 md:px-6", applyStyle === style2 && "md:py-6 md:px-5")}
                    isLandscape={true}
                    bgClassname={clsx(bgClassnames[index % bgClassnames.length], "transition duration-700 ease-out")}
                    skipGatoLogo={ true }
                    logoClassname={ clsx("transform group-hover:scale-110 transition duration-700 ease-out") }
                  />
                </div>
              </Link>
              <div>
                <header>
                  <h3 className={clsx(applyStyle === style1 && "h3 mb-2 text-2xl lg:text-3xl", applyStyle === style2 && "h3 mb-2 text-2xl", applyStyle === style3 && "h3 mt-4 text-2xl")}>
                    <Link href={getPluginLink(plugin)} className="hover:text-blue-500 transition duration-150 ease-in-out">{plugin.title}</Link>
                  </h3>
                </header>
                { (applyStyle === style1 || applyStyle === style2) && (
                  <>
                    <p className="text-lg text-gray-600 grow">{plugin.description}</p>
                    { !! plugin.video && (
                      <LinkModalVideo
                        // title="Tutorial video"
                        video={plugin.video}
                        videoWidth={1920}
                        videoHeight={1080}
                        // duration={plugin.videoDuration}
                      />
                    )}
                  </>
                )}
              </div>
            </article>
          </div>
        ))}

        {/* Coming soon plugin. Remove when all new plugins delivered */}
        <div className={clsx(applyStyle === style1 && "pb-12 md:pb-20", applyStyle === style2 && "pb-8 md:pb-12")}>
          <article className={clsx((applyStyle === style1 || applyStyle === style2) && "max-w-3xl mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center")}>
            <div
              className={clsx("relative block group", alternateColumns && plugins.length % 2 === 1 ? 'md:order-last' : '')}
            >
              { applyThumbEffect === svgEffect1 && (
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
              )}
              <div className={clsx("relative", applyThumbEffect === svgEffect1 && "overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out")}>
                <ProductThumb
                  product={morePluginsComingSoonProps}
                  paddingClassname={clsx("py-5 px-4", applyStyle === style1 && "md:py-8 md:px-6", applyStyle === style2 && "md:py-6 md:px-5")}
                  isLandscape={true}
                  bgClassname={clsx(bgClassnames[plugins.length % bgClassnames.length], "transition duration-700 ease-out")}
                  skipGatoLogo={ true }
                  logoClassname={ clsx("transform group-hover:scale-110 transition duration-700 ease-out") }
                />
              </div>
            </div>
            <div>
              <header>
                <h3 className={clsx("text-amber-700", applyStyle === style1 && "h3 mb-2 text-2xl lg:text-3xl", applyStyle === style2 && "h3 mb-2 text-2xl", applyStyle === style3 && "h3 mt-4 text-2xl")}>
                  <div className="">{morePluginsComingSoonProps.title}</div>
                </h3>
              </header>
              { (applyStyle === style1 || applyStyle === style2) && (
                <>
                  <p className="text-gray-500 grow">{morePluginsComingSoonProps.description}</p>
                </>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}