import Image from 'next/image'
import { getTestimonials } from './data/testimonials'
import Particles from './particles';

export default function Testimonial({
  testimonialIndex,
}: {
  testimonialIndex?: number,
}) {

  const testimonials = getTestimonials()
  const testimonial = testimonialIndex !== undefined ? testimonials[testimonialIndex] : testimonials[Math.floor(Math.random() * testimonials.length)]

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
          {/* Blurred shape */}
          {/* <div className="absolute top-0 -mt-24 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7"></stop>
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
            </svg>
          </div> */}

          {/* Particles animation */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-6">
            <Particles className="absolute inset-0 -z-10" quantity={10} staticity={40} /> 
          </div>
          
          <div className="text-center">
            <Image
              className="mb-3 inline-flex rounded-full"
              src={ testimonial.img }
              width={40}
              height={40}
              alt="Testimonial image"
            />
            <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.slate.200),theme(colors.blue.200),theme(colors.slate.50),theme(colors.blue.300),theme(colors.slate.200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-xl font-semibold text-slate-200 text-transparent">
              “{ testimonial.quote }”
            </p>
            <div className="text-sm font-medium text-slate-200">
              <span>{ testimonial.name }</span>
              <span className="text-slate-600"> - </span>
              <span className="text-slate-400">{ testimonial.role }</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}