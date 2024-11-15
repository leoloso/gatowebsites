import Image from 'next/image'
import Particles from './particles';
import { TestimonialItem } from './data/testimonials';

export default function Testimonial({
  testimonials,
  testimonialIndex,
}: {
  testimonials: TestimonialItem[],
  testimonialIndex?: number,
}) {

  const testimonial = testimonialIndex !== undefined ? testimonials[testimonialIndex] : testimonials[Math.floor(Math.random() * testimonials.length)]

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

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