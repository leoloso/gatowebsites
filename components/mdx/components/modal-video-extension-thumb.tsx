'use client'

import { useState } from 'react'
import ModalVideoTransition from './modal-video-transition'
import ExtensionThumb from '@/components/extension-thumb'
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
}

export default function ExtensionThumbModalVideo({
  extension,
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
      <div className="relative flex justify-center items-center my-2 group hover:cursor-pointer" onClick={() => { setModalOpen(true) }}>
        <ExtensionThumb
          extension={extension}
          isLandscape={true}
        />
        <ModalVideoTitle title={title} extraClassname='z-30' />
        <ModalVideoButton title={title} extraClassname='z-30' />
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