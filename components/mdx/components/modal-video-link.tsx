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
    <div>

      {/* Video thumbnail */}
      {/* <div className="relative inline-flex justify-center items-center my-2 group hover:cursor-pointer" onClick={() => { setModalOpen(true) }}> */}
        <button className="group" onClick={() => { setModalOpen(true) }} aria-label={title}>
          {/* Play icon */}
          <span className="absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950 before:duration-300 group-hover:before:scale-110">
            <span className="relative flex items-center gap-3">
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
              <span className="text-sm font-medium leading-tight text-gray-300">
                { title }
              </span>
            </span>
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

    </div>
  )
}