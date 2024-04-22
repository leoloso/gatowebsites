import { allHighlights } from 'contentlayer/generated'
import HighlightItem from './post-item'
import Cta from '@/components/cta-03'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import { sortByOrder } from '@/utils/content/sort'
import StunningBackground from '@/components/stunning-background'
import PageHeader from '@/components/page-header'

const pageTitle = 'Highlights'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Distinctive features from Gato GraphQL to power your application',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
}

export default function Highlights() {

  // Sort highlights by order
  allHighlights.sort(sortByOrder)

  return (
    <>

      {/* Content */}
      <section className="relative">

        <StunningBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <PageHeader
              leading='Experience how to reap the benefits from Gato GraphQL'
              title='Highlights'
              description='Distinctive features to power your application'
            />

            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute h-full top-4 left-[2px] w-0.5 bg-slate-800 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_150px,theme(colors.white))] -z-10 overflow-hidden after:absolute after:h-4 after:top-0 after:-translate-y-full after:left-0 after:w-0.5 after:bg-[linear-gradient(180deg,_transparent,_theme(colors.purple.500/.65)_25%,_theme(colors.purple.200)_50%,_theme(colors.purple.500/.65)_75%,_transparent)] after:animate-shine" aria-hidden="true"></div>
                {allHighlights.map((highlight, highlightIndex) => (
                  <HighlightItem key={highlightIndex} {...highlight} />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="max-w-3xl mx-auto">
              <ul className="flex items-center justify-between mt-12 pl-8 md:pl-48">
                <li>
                  <span className="btn-sm text-slate-700 transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none cursor-not-allowed">
                    <span className="relative inline-flex items-center">
                      <span className="tracking-normal text-slate-700 mr-1">&lt;-</span> Previous Page
                    </span>
                  </span>
                </li>
                <li>
                  <a className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href="#0">
                    <span className="relative inline-flex items-center">
                      Next Page <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </section>

      <Cta />
    </>
  )
}
