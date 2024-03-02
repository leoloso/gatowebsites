import Image from 'next/image'
import CustomerImg01 from '@/public/assets/theme/customer-01.jpg'
import CustomerImg02 from '@/public/assets/theme/customer-02.jpg'
import CustomerImg04 from '@/public/assets/theme/customer-04.jpg'
import CustomerImg06 from '@/public/assets/theme/customer-06.jpg'
import CustomerImg08 from '@/public/assets/theme/customer-08.jpg'
import CustomerImg09 from '@/public/assets/theme/customer-09.jpg'
import RadiantGradient from './radial-gradient'
import SectionHeader from './section-header'

export default function Customers() {

  const items = [
    {
      img: CustomerImg01,
      quote: "You have built an incredibly well-thought out and powerful tool—plus the support material is stellar.",
      name: 'Quint',
      // twitter: {
      //   handle: '@MikeSmets',
      //   link: '#0'
      // }
    },
    {
      img: CustomerImg08,
      quote: "We loved this plugin and are annoyed that it’s better than a similar thing we are working on 😂 (we have a network of news sites and Gato GraphQL will save us a lot of time!)",
      name: 'Joebe',
      // twitter: {
      //   handle: '@mike0point7',
      //   link: '#0'
      // }
    },
    {
      img: CustomerImg04,
      quote: "Amazing! I have translated most of my posts and pages, this was brilliant. Gato GraphQL saved me a fortune and hours of time and effort.",
      name: 'Patrick',
      // twitter: {
      //   handle: '@liz-park82',
      //   link: '#0'
      // }
    },
    {
      img: CustomerImg06,
      quote: "This plugin is extraordinary, it unlocks a new world of possibilities within WordPress.",
      name: 'Nathan',
      // twitter: {
      //   handle: '@jessiem9',
      //   link: '#0'
      // }
    },
    {
      img: CustomerImg09,
      quote: "A very good developer toolkit with many features and tons of guides on the website.",
      name: 'Louis',
      // twitter: {
      //   handle: '@deva07p',
      //   link: '#0'
      // }
    },
    {
      img: CustomerImg02,
      quote: "This plugin brings all of the power of GraphQL to WordPress, but adding easier entry points for non-developers",
      name: 'David',
      // twitter: {
      //   handle: '@mark-gerk',
      //   link: '#0'
      // }
    }
  ]

  return (
    <section className="relative">
      {/* Radial gradient */}
      <RadiantGradient />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <SectionHeader
            title='Meet our customers'
            description="There are many variations available, but the majority have suffered, by injected humour, or randomised words which don't look even slightly believable."
          />
          
          {/* Customers */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">

            {items.map((item, index) => (
              <div key={index} className="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
                <div className="flex items-center justify-between space-x-2 mb-4">
                  <div className="flex items-center space-x-4">
                    <Image className="shrink-0 rounded-full" src={item.img} width={44} height={44} alt={item.name} />
                    <div className="grow truncate">
                      <div className="font-bold text-slate-100 truncate">{item.name}</div>
                      {/* <a className="text-sm text-slate-500 hover:text-slate-300 font-medium truncate transition-colors" href={item.twitter.link}>{item.twitter.handle}</a> */}
                    </div>
                  </div>
                  <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="90" height="14">
                    <path className="fill-purple-500" d="M7 0 5.006 5.368H0l4.232 3.221L2.195 14 7 10.344 11.82 14 9.768 8.589 14 5.368H8.98zM26 0l-1.994 5.368H19l4.232 3.221L21.195 14 26 10.344 30.82 14l-2.052-5.411L33 5.368h-5.02zM45 0l-1.994 5.368H38l4.232 3.221L40.195 14 45 10.344 49.82 14l-2.052-5.411L52 5.368h-5.02zM64 0l-1.994 5.368H57l4.232 3.221L59.195 14 64 10.344 68.82 14l-2.052-5.411L71 5.368h-5.02zM83 0l-1.994 5.368H76l4.232 3.221L78.195 14 83 10.344 87.82 14l-2.052-5.411L90 5.368h-5.02z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">{item.quote}</p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}