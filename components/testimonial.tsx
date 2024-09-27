import Image from 'next/image'
import { getTestimonials } from './data/testimonials'

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Testimonial({
  testimonialIndex,
}: {
  testimonialIndex?: number,
}) {

  const testimonials = getTestimonials()
  const index = testimonialIndex !== undefined ? testimonialIndex : randomNumber(0, testimonials.length - 1 )
  const testimonial = testimonials[index]

  return (
    <div className="mx-auto max-w-3xl">
      <div className="pt-12 md:pt-20">
        <div className="text-center">
          <Image
            className="mb-3 inline-flex rounded-full"
            src={ testimonial.img }
            width={40}
            height={40}
            alt="Testimonial image"
          />
          <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-3 font-nacelle text-xl font-semibold text-gray-200 text-transparent">
            “{ testimonial.quote }”
          </p>
          <div className="text-sm font-medium text-gray-200">
            <span>{ testimonial.name }</span>
            <span className="text-gray-700"> - </span>
            <span className="text-indigo-200/65 transition-colors hover:text-indigo-500">{ testimonial.role }</span>
          </div>
        </div>
      </div>
    </div>
  )
}