import { allPlugins } from '@/.contentlayer/generated'
import Link from 'next/link'
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'
import PluginThumb from '@/components/plugin-thumb'
import clsx from 'clsx'
import LinkModalVideo from 'gatoapp/components/mdx/components/modal-video-link'

export const svgEffect1 = 1;
export const svgEffect2 = 2;

export const style1 = 1;
export const style2 = 2;

export default function PluginsSection({
  alternateColumns = false,
  applyThumbEffect = svgEffect1,
  applyStyle = style1,
}: {
  alternateColumns?: boolean,
  applyThumbEffect?: number,
  applyStyle?: number,
}) {

  const plugins = allPlugins.sort(sortByOrderAndTitle)

  const bgClassnames = [
    "bg-purple-900 group-hover:bg-purple-700",
    "bg-sky-900 group-hover:bg-sky-700",
    "bg-blue-900 group-hover:bg-blue-700",
    "bg-cyan-900 group-hover:bg-cyan-700",
    "bg-violet-900 group-hover:bg-violet-700",
    "bg-indigo-900 group-hover:bg-indigo-700",
  ]

  return (
    <div className="pb-12 md:pb-20">

      {/* Plugins */}
      {plugins.map((plugin, index) => (
        <div className={clsx(applyStyle === style1 && "pb-12 md:pb-20", applyStyle === style2 && "pb-8 md:pb-12")} key={index}>
          <article className="max-w-3xl mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <Link
              href={plugin.urlPath}
              className={clsx("relative block group", alternateColumns && index % 2 === 1 ? 'md:order-last' : '')}
            >
              { applyThumbEffect === svgEffect1 && (
                <div className="absolute inset-0 bg-gray-700 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
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
                <h3 className={clsx(applyStyle === style1 && "h3 mb-2 text-2xl lg:text-3xl", applyStyle === style2 && "h3 mb-2 text-2xl")}>
                  <Link href={plugin.urlPath} className="hover:text-purple-300 transition duration-150 ease-in-out">{plugin.title}</Link>
                </h3>
              </header>
              <p className="text-lg text-gray-300 grow">{plugin.description}</p>
              { !! plugin.video && (
                <LinkModalVideo
                  // title="Tutorial video"
                  video={plugin.video}
                  videoWidth={1920}
                  videoHeight={1080}
                  duration={plugin.videoDuration}
                />
              )}
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}