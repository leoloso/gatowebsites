'use client'

import { useState } from 'react'
import ModalVideoTransition from './modal-video-transition'
import ExtensionThumb from '@gato/components/extension-thumb'
import { Extension } from '@/.contentlayer/generated'
import ModalVideoTitle from './modal-video-title'
import ModalVideoButton from './modal-video-button'

interface ModalVideoProps {
  extension: Extension
  video: string
  videoWidth: number
  videoHeight: number,
  children?: React.ReactNode,
  title?: string
  printExtensionTitle?: boolean,
  bgClassname?: string,
}

export default function ExtensionThumbModalVideo({
  extension,
  video,
  videoWidth,
  videoHeight,
  children,
  title,
  printExtensionTitle,
  bgClassname,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <>
      {/* Video thumbnail */}
      <div className="w-full h-full aspect-video object-cover relative flex justify-center items-center my-2 group hover:cursor-pointer" onClick={() => { setModalOpen(true) }}>
        <ExtensionThumb
          extension={extension}
          isLandscape={true}
          printExtensionTitle={printExtensionTitle}
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