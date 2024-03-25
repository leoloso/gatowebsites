import Link from 'next/link'
import Image from 'next/image'
import ComparisonTargetImg01 from '@/public/assets/theme/customer-01.svg'
import ComparisonTargetBg01 from '@/public/assets/theme/customer-bg-01.png'
import ComparisonTargetImg02 from '@/public/assets/theme/customer-02.svg'
import ComparisonTargetBg02 from '@/public/assets/theme/customer-bg-02.png'
import ComparisonTargetImg03 from '@/public/assets/theme/customer-03.svg'
import ComparisonTargetBg03 from '@/public/assets/theme/customer-bg-03.png'
import ComparisonTargetImg04 from '@/public/assets/theme/customer-04.svg'
import ComparisonTargetBg04 from '@/public/assets/theme/customer-bg-04.png'
import ComparisonTargetImg05 from '@/public/assets/theme/customer-05.svg'
import ComparisonTargetBg05 from '@/public/assets/theme/customer-bg-05.png'
import ComparisonTargetImg06 from '@/public/assets/theme/customer-06.svg'
import ComparisonTargetBg06 from '@/public/assets/theme/customer-bg-06.png'
import ComparisonTargetImg07 from '@/public/assets/theme/customer-07.svg'
import ComparisonTargetBg07 from '@/public/assets/theme/customer-bg-07.png'
import ComparisonTargetImg08 from '@/public/assets/theme/customer-08.svg'
import ComparisonTargetBg08 from '@/public/assets/theme/customer-bg-08.png'
import ComparisonTargetImg09 from '@/public/assets/theme/customer-09.svg'
import ComparisonTargetBg09 from '@/public/assets/theme/customer-bg-09.png'
import ComparisonTargetImg10 from '@/public/assets/theme/customer-10.svg'
import ComparisonTargetBg10 from '@/public/assets/theme/customer-bg-10.png'
import ComparisonTargetAvatar01 from '@/public/assets/theme/customer-avatar-01.jpg'
import ComparisonTargetAvatar02 from '@/public/assets/theme/customer-avatar-02.jpg'
import Particles from '@/components/particles'
import Highlighter, { HighlighterItem02 } from '@/components/highlighter'
import { allComparisonPosts } from '@/.contentlayer/generated'
import { sortByOrderAndTitle } from '@/utils/content/sort'
import { getComparisonPostURLPath } from '@/utils/content/application-urls'

export default function ComparisonList() {
  const comparisonPosts = allComparisonPosts.sort(sortByOrderAndTitle)
  const backgrounds = [
    ComparisonTargetBg01,
    ComparisonTargetBg02,
    ComparisonTargetBg03,
    ComparisonTargetBg04,
    ComparisonTargetBg05,
    ComparisonTargetBg06,
    ComparisonTargetBg07,
    ComparisonTargetBg08,
    ComparisonTargetBg09,
    ComparisonTargetBg10,
  ]

  return (
    <div className="max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none pb-12 md:pb-20">
      <Highlighter className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 group [&_*:nth-child(n+5):not(:nth-child(n+12))]:order-1 [&_*:nth-child(n+10):not(:nth-child(n+11))]:!order-2">

        {comparisonPosts.map((comparisonPost, index) => (
          <div key={index}>
            <Link href={getComparisonPostURLPath(comparisonPost)}>
              <HighlighterItem02>
                <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  {/* Particles animation */}
                  <Particles className="absolute inset-0 -z-10" quantity={3} />
                  <div className="flex items-center justify-center">
                    <Image className="w-full h-full aspect-video object-cover" src={backgrounds[index % backgrounds.length]} width={352} height={198} alt="Comparison Target Background" aria-hidden="true" />
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

        {/* Testimonial #01 */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
            <span className="line-clamp-4">
              “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.”
            </span>
          </p>
          <div className="inline-flex mb-2">
            <Image className="rounded-full" src={ComparisonTargetAvatar01} width={32} height={32} alt="Comparison Target Avatar 01" />
          </div>
          <div className="text-sm font-medium text-slate-300">
            Mike Hunt <span className="text-slate-700">-</span> <a className="text-purple-500 hover:underline" href="#0">Thunderbolt</a>
          </div>
        </div>

        {/* Testimonial #02 */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
            <span className="line-clamp-4">
              “We struggled to bring all our conversations into one place until we found Stellar. The UI is very clean and we love the integration with Spark.”
            </span>
          </p>
          <div className="inline-flex mb-2">
            <Image className="rounded-full" src={ComparisonTargetAvatar02} width={32} height={32} alt="Comparison Target Avatar 02" />
          </div>
          <div className="text-sm font-medium text-slate-300">
            Mirko Mitt <span className="text-slate-700">-</span> <a className="text-purple-500 hover:underline" href="#0">Mildrink</a>
          </div>
        </div>

      </Highlighter>
    </div>
  )
}
