'use client'

import { useState } from 'react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import ModalVideoTransition from './modal-video-transition'

interface ModalVideoProps {
  thumb: StaticImageData | string
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number,
  children?: React.ReactNode,
  title?: string
}

export default function ThumbModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
  children,
  title,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div>

      {/* Video thumbnail */}
      <div className="relative inline-flex justify-center items-center my-2 group hover:cursor-pointer" onClick={() => { setModalOpen(true) }}>
        <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
        {!! title && (
          <p className="absolute bottom-0 text-slate-300 mb-4 sm:text-lg sm:mb-12" data-aos="fade-down" data-aos-delay="400">{title}</p>
        )}
        <button className="absolute group" aria-label="Watch the video">
          <svg className="w-16 h-16 fill-current sm:w-20 sm:h-20 group" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
            <circle className="text-white opacity-90 group-hover:opacity-100 transition duration-150 ease-in-out" cx="44" cy="44" r="44" />
            <path
              className="text-blue-600"
              d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
            />
          </svg>
        </button>
        {children}
      </div>
      {/* End: Video thumbnail */}

      <ModalVideoTransition
        video={video}
        videoWidth={videoWidth}
        videoHeight={videoHeight}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />

    </div>
  )
}