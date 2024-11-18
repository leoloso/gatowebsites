import CustomerImg01 from '@/public/assets/theme/customer-01.jpg'
import CustomerImg02 from '@/public/assets/theme/customer-02.jpg'
import CustomerImg04 from '@/public/assets/theme/customer-04.jpg'
import CustomerImg06 from '@/public/assets/theme/customer-06.jpg'
import CustomerImg08 from '@/public/assets/theme/customer-08.jpg'
import CustomerImg09 from '@/public/assets/theme/customer-09.jpg'
import { TestimonialItem } from 'gatoapp/components/data/testimonial-item'

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
    },
    {
      img: CustomerImg06,
      quote: "This plugin is extraordinary, it unlocks a new world of possibilities within WordPress.",
      name: 'Nathan W.',
      role: 'Tech writer',
      // twitter: {
      //   handle: '@jessiem9',
      //   link: '#0'
      // }
    },
    {
      img: CustomerImg09,
      quote: "A very good developer toolkit with many features and tons of guides on the website.",
      name: 'Louis G.',
      role: 'Plugin business owner',
      // twitter: {
      //   handle: '@deva07p',
      //   link: '#0'
      // }
    },
    {
      img: CustomerImg02,
      quote: "This plugin brings all of the power of GraphQL to WordPress, but adding easier entry points for non-developers",
      name: 'David W.',
      role: 'Agency owner',
      // twitter: {
      //   handle: '@mark-gerk',
      //   link: '#0'
      // }
    }
  ]
}