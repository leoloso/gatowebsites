'use client'

import React, { useState } from 'react'
import ModalVideoTransition from 'gatoapp/components/mdx/components/modal-video-transition'
import ProductThumb, { ProductProps } from 'gatoapp/components/product-thumb'
import ModalVideoTitle from 'gatoapp/components/mdx/components/modal-video-title'
import ModalVideoButton from 'gatoapp/components/mdx/components/modal-video-button'

interface ModalVideoProps {
  product: ProductProps
  video: string
  videoWidth: number
  videoHeight: number,
  children?: React.ReactNode,
  title?: string
  printProductTitle?: boolean,
  titleClassname?: string,
  bgClassname?: string,
}

export default function ProductThumbModalVideo({
  product,
  video,
  videoWidth,
  videoHeight,
  children,
  title,
  printProductTitle,
  titleClassname,
  bgClassname,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <>
      {/* Video thumbnail */}
      <div className="w-full h-full aspect-video object-cover relative flex justify-center items-center my-2 group hover:cursor-pointer" onClick={() => { setModalOpen(true) }}>
        <ProductThumb
          product={product}
          isLandscape={true}
          printProductTitle={printProductTitle}
          titleClassname={titleClassname}
          bgClassname={bgClassname}
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