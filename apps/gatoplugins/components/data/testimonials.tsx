import CustomerImg01 from '@/public/assets/theme/customer-01.jpg'
import CustomerImg02 from '@/public/assets/theme/customer-02.jpg'
import CustomerImg03 from '@/public/assets/theme/customer-03.jpg'
import { TestimonialItem } from 'gatoapp/components/data/testimonial-item'

export function getTestimonials(): TestimonialItem[] {

  return [
    {
      img: CustomerImg01,
      quote: "I use Gato Multilingual to automatically translate new posts from English to several other languages with Polylang Pro + Google Translate API. Leo’s support has been next level.",
      name: 'Thomas D.',
      role: 'Agency dev',
      productSlug: 'multilingual-polylang'
    },
    {
      img: CustomerImg03,
      quote: "Amazing! I have translated most of my posts and pages, this was brilliant. It saved me a fortune and hours of time and effort.",
      name: 'Patrick T.',
      role: 'Agency dev',
      productSlug: 'multilingual-polylang'
    },
    {
      img: CustomerImg02,
      quote: "The support we’ve received from the team has been nothing short of fantastic. They are highly responsive, knowledgeable and truly willing to help when issues arise, providing detailed assistance that gets to the root of any problems.",
      name: 'Korry N.',
      role: 'Developer',
      productSlug: 'multilingual-polylang'
    },
    // {
    //   img: CustomerImg06,
    //   quote: "This plugin is extraordinary, it unlocks a new world of possibilities within WordPress.",
    //   name: 'Nathan W.',
    //   role: 'Tech writer',
    //   // twitter: {
    //   //   handle: '@jessiem9',
    //   //   link: '#0'
    //   // }
    // },
    // {
    //   img: CustomerImg09,
    //   quote: "A very good developer toolkit with many features and tons of guides on the website.",
    //   name: 'Louis G.',
    //   role: 'Plugin business owner',
    //   // twitter: {
    //   //   handle: '@deva07p',
    //   //   link: '#0'
    //   // }
    // },
    // {
    //   img: CustomerImg02,
    //   quote: "This plugin brings all of the power of GraphQL to WordPress, but adding easier entry points for non-developers",
    //   name: 'David W.',
    //   role: 'Agency owner',
    //   // twitter: {
    //   //   handle: '@mark-gerk',
    //   //   link: '#0'
    //   // }
    // }
  ]
}