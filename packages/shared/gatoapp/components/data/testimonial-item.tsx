import { StaticImageData } from 'next/image'

export interface TestimonialItem {
  img: StaticImageData
  quote: string
  name: string
  role: string
  productSlug?: string
}