'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Particles from './particles'
import Highlighter, { HighlighterItem } from './highlighter'
import { allFeatures } from 'contentlayer/generated'

import CarouselImg01 from '@/public/assets/theme/carousel-icon-01.svg'
import CarouselImg02 from '@/public/assets/theme/carousel-icon-02.svg'
import CarouselImg03 from '@/public/assets/theme/carousel-icon-03.svg'
import CarouselImg04 from '@/public/assets/theme/carousel-icon-04.svg'
import CarouselImg05 from '@/public/assets/theme/carousel-icon-05.svg'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
import SectionHeader from './section-header'
import { getFeatureURLPath } from '@/utils/content/application-urls'
import { sortByOrder } from '@/utils/content/sort'
import AppConfig from '@/app/app.config'
Swiper.use([Navigation])

export default function FeaturesCarousel() {

  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false)

  useEffect(() => {
    const carousel = new Swiper('.stellar-carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
    setSwiperInitialized(true)
  }, [])

  const itemPics = [
    CarouselImg01,
    // CarouselImg02,
    CarouselImg03,
    CarouselImg04,
    CarouselImg05,
    CarouselImg01,
    CarouselImg03,
    CarouselImg04,
    CarouselImg05,
    
    CarouselImg02,
  ]

  const featureSlugs = [
    'oneof-input-object',
    'multiple-query-execution',
    'access-control',
    'http-caching',
    'custom-endpoints',
    'persisted-queries',
    'nested-mutations',
  ]
  const features = allFeatures.filter((feature) => featureSlugs.includes(feature.slug)).sort(sortByOrder)

  return (
    <section className='relative'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Particles animation */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
          <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />    
        </div>

        {/* Blurred shape */}
        <div className="absolute top-0 -translate-y-1/4 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs3-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
          </svg>
        </div>

        <div className="pt-16 pb-12 md:pt-32 md:pb-20 border-b border-slate-800">

          {/* Section header */}
          <SectionHeader
            leading='Features'
            title='The GraphQL server that you expect, and then some more'
            description='Gato GraphQL delivers features designed to empower and protect your application.'
          />

          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
            <div className="stellar-carousel swiper-container group">
              <Highlighter className="swiper-wrapper w-fit" refresh={swiperInitialized}>
                {/* Carousel items */}
                {features.map((feature, index) => (
                  <HighlighterItem className="swiper-slide h-auto group/slide" key={index}>
                    <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                      {/* Particles animation */}
                      <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} /> 
                      {/* Radial gradient */}
                      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                        <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                      </div>
                      <div className="flex flex-col p-6 h-full">
                        <Image className="mb-3" src={itemPics[index]} width={56} height={56} alt="Carousel Icon" />
                        <div className="grow">
                          <div className="font-bold text-lg mb-1">{feature.title}</div>
                          <div className="text-slate-400 mb-3">{feature.description}</div>
                        </div>
                        <div className="text-right">
                          <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href={getFeatureURLPath(feature)}>Learn More <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                        </div>
                      </div>
                    </div>
                  </HighlighterItem>
                ))}
                { /* Add one final slide */}
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-800 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out" quantity={3} refresh={swiperInitialized} /> 
                    {/* Radial gradient */}
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-700 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image className="mb-3" src={itemPics[itemPics.length - 1]} width={56} height={56} alt="Carousel Icon" />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">And much more!</div>
                        <div className="text-slate-400 mb-3">Disable the single endpoint, disable modules to remove accessing data in your API, execute HTTP requests to fetch external data, and more</div>
                      </div>
                      <div className="text-right">
                        <a className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group" href={`/${AppConfig.paths.features}`}>View all features <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </Highlighter>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}