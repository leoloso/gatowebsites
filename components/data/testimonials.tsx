import { StaticImageData } from 'next/image'

import CustomerImg01 from '@/public/assets/theme/customer-01.jpg'
import CustomerImg08 from '@/public/assets/theme/customer-08.jpg'
import CustomerImg04 from '@/public/assets/theme/customer-04.jpg'

interface TestimonialItem {
  img: StaticImageData
  quote: string
  name: string
  role: string
}

export function getTestimonials(): TestimonialItem[] {

  return [
    {
      img: CustomerImg01,
      quote: "You have built an incredibly well-thought out and powerful tool—plus the support material is stellar.",
      name: 'Quint R.',
      role: 'Developer'
    },
    {
      img: CustomerImg08,
      quote: "We loved this plugin and are annoyed that it’s better than a similar thing we are working on 😂 (we have a network of news sites and Gato GraphQL will save us a lot of time!)",
      name: 'Joebe W.',
      role: 'Developer'
    },
    {
      img: CustomerImg04,
      quote: "Amazing! I have translated most of my posts and pages, this was brilliant. Gato GraphQL saved me a fortune and hours of time and effort.",
      name: 'Patrick T.',
      role: 'Agency dev'
    }
  ]
}