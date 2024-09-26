import { allExtensions } from 'contentlayer/generated'
import Link from 'next/link'
import { getExtensionURLPath } from '@/utils/content/application-urls'
import { sortByOrderAndTitle } from '@/utils/content/sort'
import PageHeader from '@/components/page-header'
import ExtensionThumb from '@/components/extension-thumb'
import clsx from 'clsx'
import LinkModalVideo from '@/components/mdx/components/modal-video-link'
import ExtensionDropdownPricing from '@/components/pricing/extension-dropdown/pricing'

export const svgEffect1 = 1;
export const svgEffect2 = 2;

export default function ExtensionsSection({
  alternateColumns = false,
  useThumbEffect = svgEffect1,
}: {
  alternateColumns?: boolean,
  useThumbEffect?: number,
}) {

  const extensions = allExtensions.sort(sortByOrderAndTitle)

  const bgClassnames = [
    "bg-purple-900",
    "bg-sky-900",
    "bg-blue-900",
    "bg-cyan-900",
    "bg-violet-900",
    "bg-indigo-900",
    // "bg-fuchsia-900",
    // "bg-pink-900",
    // "bg-orange-900",
  ]

  return (        
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">

        {/*  Page header */}
        <PageHeader
          leading='Empower your application'
          title='Extensions'
          description='Provide additional functionality to the GraphQL server, and expand the GraphQL schema'
        />

        <div className="pb-12 md:pb-20">

          {/* Extensions */}
          {extensions.map((extension, index) => (
            <div className="pb-12 md:pb-20" key={index}>
              <article className="max-w-3xl mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <Link
                  href={getExtensionURLPath(extension)}
                  className={clsx("relative block group", alternateColumns && index % 2 === 1 ? 'md:order-last' : '')}
                  // data-aos="fade-right" data-aos-delay="200"
                >
                  { useThumbEffect === svgEffect1 && (
                    <div className="absolute inset-0 bg-gray-700 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                  )}
                  <div className={clsx("relative", useThumbEffect === svgEffect1 && "overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out", useThumbEffect === svgEffect2 && "transform hover:scale-105 transition duration-700 ease-out")}>
                    <ExtensionThumb
                      extension={extension}
                      paddingClassname="py-5 px-4 md:py-8 md:px-6"
                      isLandscape={true}
                      bgClassname={bgClassnames[index % bgClassnames.length]}
                    />
                  </div>
                </Link>
                <div
                  // data-aos="fade-left" data-aos-delay="200"
                >
                  <header>
                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                      <Link href={getExtensionURLPath(extension)} className="hover:text-purple-300 transition duration-150 ease-in-out">{extension.title}</Link>
                    </h3>
                  </header>
                  <p className="text-lg text-gray-300 grow">{extension.description}</p>
                  { !! extension.video && (
                    <LinkModalVideo
                      // title="Watch video"
                      video={extension.video}
                      videoWidth={1920}
                      videoHeight={1080}
                    />
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="">
          <div className="mb-8 text-center">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-2 md:pb-4">
              Pick your extension
            </h2>
            <p className="h4 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-2 md:pb-4">
              or
            </p>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-2 md:pb-4">
              Get all extensions, with a big discount
            </h2>
            {/* <p className="text-lg text-slate-400">Purchase the extension you need, or get a bundle with all of them with a big discount.</p> */}
          </div>
          <ExtensionDropdownPricing />
        </div>
      </div>
    </div>
  )
}