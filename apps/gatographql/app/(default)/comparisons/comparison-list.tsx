import Link from 'next/link'
import Image from 'next/image'
import Particles from '@gato/components/particles'
import Highlighter, { HighlighterItem02 } from '@gato/components/highlighter'
import { allComparisonPosts } from '@/.contentlayer/generated'
import { sortByOrderAndTitle } from '@/utils/content/sort'
import { getComparisonPostURLPath } from '@/utils/content/application-urls'
import { getTestimonials } from '@gato/components/data/testimonials'
import { getComparisonPostBackground } from '@/utils/content/comparison-backgrounds'

export default function ComparisonList() {
  const comparisonPosts = allComparisonPosts.sort(sortByOrderAndTitle)
  const testimonials = getTestimonials()
  const chosenTestimonials = [
    testimonials[3],

    // @todo Re-enable when adding more comparison items
    // testimonials[5],
  ]

  return (
    <div className="max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none pb-12 md:pb-20">
      <Highlighter className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 group [&_*:nth-child(n+5):not(:nth-child(n+12))]:order-1 [&_*:nth-child(n+10):not(:nth-child(n+11))]:!order-2">

        {comparisonPosts.map((comparisonPost, index) => (
          <div key={index}>
            <Link href={getComparisonPostURLPath(comparisonPost)}>
              <HighlighterItem02>
                <div className="relative h-full bg-purple-900/50 rounded-[inherit] z-20 overflow-hidden">
                  {/* Particles animation */}
                  <Particles className="absolute inset-0 -z-10" quantity={3} />
                  <div className="flex items-center justify-center">
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

        {/* Testimonials */}
        {chosenTestimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center p-4">
            <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
              <span className="line-clamp-4">
                “ {testimonial.quote} ”
              </span>
            </p>
            <div className="inline-flex mb-2">
              <Image className="rounded-full" src={testimonial.img} width={32} height={32} alt="Testimonial author picture" />
            </div>
            <div className="text-sm font-medium text-slate-300">
            {testimonial.name} <span className="text-slate-700">-</span> <span className="text-slate-400">{testimonial.role}</span>
            </div>
          </div>
        ))}

      </Highlighter>
    </div>
  )
}
