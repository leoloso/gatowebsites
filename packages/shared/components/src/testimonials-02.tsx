import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Testimonial01 from '@/public/assets/theme/testimonial-01.png'
import Testimonial02 from '@/public/assets/theme/testimonial-02.png'
import Testimonial03 from '@/public/assets/theme/testimonial-03.png'
import RadiantGradient from './radial-gradient'
import SectionHeader from './section-header'

interface Item {
  img: StaticImageData
  name: string
  role: string
  twitter: string
  quote: string
}

export default function Testimonials02() {

  const items: Item[] = [
    {
      img: Testimonial01,
      name: 'Mary Janiczak',
      role: 'Data Engineer',
      twitter: '#0',
      quote: "The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics, and walk in a variety of users' shoes.",
    },
    {
      img: Testimonial02,
      name: 'Jack Smith',
      role: 'Software Engineer',
      twitter: '#0',
      quote: "The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics, and walk in a variety of users' shoes.",
    },
    {
      img: Testimonial03,
      name: 'Anna Johnson',
      role: 'Product Designer',
      twitter: '#0',
      quote: "The pace of change and velocity of the product force you to pick up new skills, experiment with new tactics, and walk in a variety of users' shoes.",
    },
  ]

  return (
    <section className="relative">
      {/* Radial gradient */}
      <RadiantGradient />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <SectionHeader
            title='Hear from our people'
            description="Our company is comprised of people who make bold choices for our clients and the security sector. It's in our DNA to push our limits and make bold changes."
          />
          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">
            {items.map((item, index) => ( 
              <div key={index} className="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Image className="shrink-0" src={item.img} width={44} height={44} alt={item.name} />
                    <div className="grow">
                      <div className="font-bold text-slate-100">{item.name}</div>
                      <div className="text-sm text-purple-500 font-medium">{item.role}</div>
                    </div>
                  </div>
                  <a className="shrink-0 text-slate-500" href="#0" aria-label="Member's Twitter">
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                      <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-slate-400">“{item.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}