import { allExtensions } from '@/.contentlayer/generated'
import Link from 'next/link'
import { getExtensionURLPath } from '@/utils/content/application-urls'
import { sortByOrderAndTitle } from '@/utils/content/sort'
import ExtensionThumb from '@gato/components/extension-thumb'
import clsx from 'clsx'
import LinkModalVideo from '@gato/components/mdx/components/modal-video-link'
import ExtensionsModalVideo from '@gato/components/mdx/components/modal-video-extensions'

export const svgEffect1 = 1;
export const svgEffect2 = 2;

export const style1 = 1;
export const style2 = 2;

export default function ExtensionsSection({
  alternateColumns = false,
  applyThumbEffect = svgEffect1,
  applyStyle = style1,
}: {
  alternateColumns?: boolean,
  applyThumbEffect?: number,
  applyStyle?: number,
}) {

  const extensions = allExtensions.sort(sortByOrderAndTitle)

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

      <div className="pb-12 md:pb-20 mb-12 md:mb-20 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
        <ExtensionsModalVideo
          title="Click to watch a clip of Gato GraphQL extensions"
          video="/videos/GatoGraphQL-extensions.mp4"
          videoWidth={1920}
          videoHeight={1080}
          bgClassname='bg-gradient-to-tr from-slate-900 to-blue-900'
        />
      </div>

      {/* Extensions */}
      {extensions.map((extension, index) => (
        <div className={clsx(applyStyle === style1 && "pb-12 md:pb-20", applyStyle === style2 && "pb-8 md:pb-12")} key={index}>
          <article className="max-w-3xl mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <Link
              href={getExtensionURLPath(extension)}
              className={clsx("relative block group", alternateColumns && index % 2 === 1 ? 'md:order-last' : '')}
            >
              { applyThumbEffect === svgEffect1 && (
                <div className="absolute inset-0 bg-gray-700 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
              )}
              <div className={clsx("relative", applyThumbEffect === svgEffect1 && "overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out")}>
                <ExtensionThumb
                  extension={extension}
                  paddingClassname={clsx("py-5 px-4", applyStyle === style1 && "md:py-8 md:px-6", applyStyle === style2 && "md:py-6 md:px-5")}
                  isLandscape={true}
                  bgClassname={clsx(bgClassnames[index % bgClassnames.length], "transition duration-700 ease-out")}
                  skipGatoGraphQLLogo={ true }
                  logoClassname={ clsx("transform group-hover:scale-110 transition duration-700 ease-out") }
                />
              </div>
            </Link>
            <div>
              <header>
                <h3 className={clsx(applyStyle === style1 && "h3 mb-2 text-2xl lg:text-3xl", applyStyle === style2 && "h3 mb-2 text-2xl")}>
                  <Link href={getExtensionURLPath(extension)} className="hover:text-purple-300 transition duration-150 ease-in-out">{extension.title}</Link>
                </h3>
              </header>
              <p className="text-lg text-gray-300 grow">{extension.description}</p>
              { !! extension.video && (
                <LinkModalVideo
                  title="Tutorial video"
                  video={extension.video}
                  videoWidth={1920}
                  videoHeight={1080}
                  duration={extension.videoDuration}
                />
              )}
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}