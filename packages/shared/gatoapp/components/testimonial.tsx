'use client'

import Image from 'next/image'
import Particles from './particles';
import { TestimonialItem } from './data/testimonial-item';
import { usingDarkColorThemeMode } from 'gatoapp/utils/context/style'
import Illustration from 'gatoapp/public/assets/theme/lightmode/testimonial-illustration.svg'

export default function Testimonial({
  testimonials,
  testimonialIndex,
}: {
  testimonials: TestimonialItem[],
  testimonialIndex?: number,
}) {

  const testimonial = testimonials[testimonialIndex !== undefined ? testimonialIndex : 0/*Math.floor(Math.random() * testimonials.length)*/]
  const isDarkColorThemeMode = usingDarkColorThemeMode()

  return (
    <section className='relative'>
      { !isDarkColorThemeMode && (
        <>
          {/* Illustration */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none -z-10 mt-5" aria-hidden="true">
            <Image className="max-w-none" src={Illustration} alt="Illustration" />
          </div>
        </>
      )}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.cyan.400),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

          { isDarkColorThemeMode && (
            <>
              {/* Particles animation */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-6">
                <Particles className="absolute inset-0 -z-10" quantity={10} staticity={40} /> 
              </div>
            </>
          )}
          
          <div className="text-center">
            <Image
              className="mb-3 inline-flex rounded-full"
              src={ testimonial.img }
              width={40}
              height={40}
              alt="Testimonial image"
            />
            <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.blue.200),theme(colors.slate.50),theme(colors.blue.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-xl font-semibold text-gray-900 dark:text-slate-200 dark:text-transparent">
              “{ testimonial.quote }”
            </p>
            <div className="text-sm font-medium text-gray-900 dark:text-slate-200">
              <span>{ testimonial.name }</span>
              <span className="text-slate-600"> - </span>
              <span className="text-blue-500 dark:text-slate-400">{ testimonial.role }</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}