'use client'

import { useState } from 'react'
import ModalVideoTransition from './modal-video-transition'

interface ModalVideoProps {
  video: string
  videoWidth: number
  videoHeight: number,
  title?: string
}

export default function LinkModalVideo({
  video,
  videoWidth,
  videoHeight,
  title = "Watch video",
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <>
      {/* Video thumbnail */}
      <button className="group p-2.5 my-4 btn inset-0 rounded-full bg-slate-950 hover:bg-slate-950/50 duration-300 hover:scale-105" onClick={() => { setModalOpen(true) }} aria-label={title}>
        {/* Play icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
        >
          <path
            fill="url(#pla)"
            fillRule="evenodd"
            d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="pla"
              x1={10}
              x2={10}
              y1={0}
              y2={20}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6366F1" />
              <stop offset={1} stopColor="#6366F1" stopOpacity=".72" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-sm font-medium leading-tight text-gray-300 ml-2">
          { title }
        </span>
      </button>
      {/* </div> */}
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