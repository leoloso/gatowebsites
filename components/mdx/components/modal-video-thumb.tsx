'use client'

import { useState } from 'react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import ModalVideoTransition from './modal-video-transition'
import ModalVideoTitle from './modal-video-title'
import ModalVideoButton from './modal-video-button'

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
        <ModalVideoTitle title={title} />
        <ModalVideoButton title={title} />
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