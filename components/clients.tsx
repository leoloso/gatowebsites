'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Particles from './particles'

import Client01 from '@/public/assets/client-logos/agendaurbana-logo.png'
import Client02 from '@/public/assets/client-logos/mesym-logo-inverse.png'
import Client03 from '@/public/assets/client-logos/pop-logo-horizontal.png'
import Client04 from '@/public/assets/client-logos/sdg-sse-logo.png'
import Client05 from '@/public/assets/client-logos/tppdebate-logo-inverse.png'

// Import Swiper
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Autoplay])

export default function Clients() {

  useEffect(() => {
    const carousel = new Swiper('.clients-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    })
  }, [])

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-900">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <Image src={Client01} alt="Agenda Urbana logo" width={120} height={120} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Client02} alt="MESYM logo" width={120} height={62} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image className="mt-1" src={Client03} alt="PoP logo" width={128} height={50} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image src={Client04} alt="SDG-SSE logo" width={120} height={80} />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image className="mt-2" src={Client05} alt="TPPDebate logo" width={120} height={38} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}