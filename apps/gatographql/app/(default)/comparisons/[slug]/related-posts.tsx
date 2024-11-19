import Link from 'next/link'
import Image from 'next/image'
import Particles from 'gatoapp/components/particles'
import Highlighter, { HighlighterItem02 } from 'gatoapp/components/highlighter'
import { ComparisonPost, allComparisonPosts } from '@/.contentlayer/generated'
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'
import { getComparisonPostBackground } from '@/utils/content/comparison-backgrounds'

export default function RelatedPosts({ current }: { current: ComparisonPost }) {

  const comparisonPosts = allComparisonPosts.filter((comparisonPost) => (comparisonPost !== current)).sort(sortByOrderAndTitle)

  return (
    <aside>
      <h2 className="inline-flex font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">More comparisons</h2>
      <div className="mx-auto sm:max-w-[728px] lg:max-w-none">
        <Highlighter className="grid gap-4 lg:gap-6 sm:grid-cols-3 lg:grid-cols-3 group">

          {comparisonPosts.map((comparisonPost, index) => (
            <div key={index}>
              <Link href={comparisonPost.urlPath}>
                <HighlighterItem02>
                  <div className="relative h-full bg-purple-900/50 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles className="absolute inset-0 -z-10" quantity={3} />
                    <div className="flex items-center justify-center h-32 lg:h-36">
                      <Image className="w-full h-full aspect-video object-cover" src={getComparisonPostBackground(comparisonPost.targetName)} width={352} height={198} alt="Comparison Target Background" aria-hidden="true" />
                      <Image className="absolute" src={comparisonPost.targetImage} alt={comparisonPost.title} width={352} height={198} />
                      <div className="absolute bottom-0 text-center text-sm font-medium font-inter antialiased bg-slate-900/70 text-slate-100 tracking-tight px-2">
                        {comparisonPost.targetName}
                      </div>
                    </div>
                  </div>
                </HighlighterItem02>
              </Link>
            </div>
          ))}

        </Highlighter>
      </div>
    </aside>
  )
}
