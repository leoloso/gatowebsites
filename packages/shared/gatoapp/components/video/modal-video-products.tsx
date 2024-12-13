'use client'

import React, { useState } from 'react'
import ModalVideoTransition from 'gatoapp/components/mdx/components/modal-video-transition'
import ModalVideoTitle from 'gatoapp/components/mdx/components/modal-video-title'
import ModalVideoButton from 'gatoapp/components/mdx/components/modal-video-button'
import WithLogoThumb from 'gatoapp/components/thumbnails/with-logo-thumb'

interface ModalVideoProps {
  video: string
  videoWidth: number
  videoHeight: number,
  children?: React.ReactNode,
  title?: string
  bgClassname?: string,
  topTitle?: string,
  leadingTitle?: string,
}

export default function ProductsModalVideo({
  video,
  videoWidth,
  videoHeight,
  children,
  title,
  bgClassname,
  topTitle,
  leadingTitle,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <>
      {/* Video thumbnail */}
      <div className="w-full h-full aspect-video object-cover relative flex justify-center items-center my-2 group hover:cursor-pointer" onClick={() => { setModalOpen(true) }}>
        <WithLogoThumb
          isLandscape={true}
          targetImageSources={[]}
          skipPlusImage={true}
          bgClassname={bgClassname}

          leadingTitle={leadingTitle}
          title={topTitle}
          extraTitleClassname="hidden md:block"
          extraLeadingTitleClassname="text-slate-300 hidden md:block"
        />
        <ModalVideoTitle title={title} extraClassname='z-30' />
        <ModalVideoButton title={title} extraClassname='z-30 group-hover:scale-110 transition duration-700 ease-out' />
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

    </>
  )
}