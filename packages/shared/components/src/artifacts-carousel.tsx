'use client'

import { useEffect, useState } from 'react'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
import ArtifactCard from './artifact-card'
import { Artifact } from '@/utils/content/types'
import { StaticImageData } from 'next/image'
Swiper.use([Navigation])

type ArtifactsSectionProps = {
  artifacts: Array<Artifact>
  defaultArtifactIcon?: StaticImageData,
}

export default function ArtifactsCarousel({
  artifacts,
  defaultArtifactIcon,
}: ArtifactsSectionProps) {

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

  return (
    <>
      <div className="stellar-carousel swiper-container group">
        <div className="swiper-wrapper w-fit">
          {/* Carousel items */}
          {artifacts.map((extension, extensionIndex) => (
            <div key={extensionIndex} className="swiper-slide h-auto">
              <ArtifactCard
                artifact={extension}
                defaultArtifactIcon={defaultArtifactIcon}
                bgClassname="bg-gradient-to-tr from-slate-800 to-blue-800/25"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex py-8 justify-end">
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

    </>
  )
}