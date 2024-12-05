'use client'

import Image from 'next/image'
import RadiantGradient from './radial-gradient'
import SectionHeader from './section-header'
import { TestimonialItem } from './data/testimonial-item'
import { usingDarkColorThemeMode } from 'gatoapp/utils/context/style'
import Illustration from 'gatoapp/public/assets/theme/lightmode/testimonial-illustration.svg'

export default function Customers({
  testimonials,
}: {
  testimonials: TestimonialItem[],
}) {

  const isDarkColorThemeMode = usingDarkColorThemeMode()
  return (
    <section className="relative overflow-hidden">
      { !isDarkColorThemeMode && (
        <>
          {/* Illustration */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 mt-5" aria-hidden="true">
            <Image className="max-w-none" src={Illustration} alt="Illustration" />
          </div>
        </>
      )}
      { isDarkColorThemeMode && (
        <>
          {/* Radial gradient */}
          <RadiantGradient />
        </>
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.blue.200),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
          {/* Content */}
          <SectionHeader
            title='People love our plugins'
            description="Developers, plugin business owners, and agency owners say this about our plugins..."
          />
          
          {/* Customers */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">

            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
                <div className="flex items-center justify-between space-x-2 mb-4">
                  <div className="flex items-center space-x-4">
                    <Image className="shrink-0 rounded-full" src={testimonial.img} width={44} height={44} alt={testimonial.name} />
                    <div className="grow truncate">
                      <div className="font-bold text-slate-100 truncate">{testimonial.name}</div>
                      {/* <a className="text-sm text-slate-500 hover:text-slate-300 font-medium truncate transition-colors" href={testimonial.twitter.link}>{testimonial.twitter.handle}</a> */}
                    </div>
                  </div>
                  <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="90" height="14">
                    <path className="fill-purple-500" d="M7 0 5.006 5.368H0l4.232 3.221L2.195 14 7 10.344 11.82 14 9.768 8.589 14 5.368H8.98zM26 0l-1.994 5.368H19l4.232 3.221L21.195 14 26 10.344 30.82 14l-2.052-5.411L33 5.368h-5.02zM45 0l-1.994 5.368H38l4.232 3.221L40.195 14 45 10.344 49.82 14l-2.052-5.411L52 5.368h-5.02zM64 0l-1.994 5.368H57l4.232 3.221L59.195 14 64 10.344 68.82 14l-2.052-5.411L71 5.368h-5.02zM83 0l-1.994 5.368H76l4.232 3.221L78.195 14 83 10.344 87.82 14l-2.052-5.411L90 5.368h-5.02z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">{testimonial.quote}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}