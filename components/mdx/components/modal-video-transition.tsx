'use client'

import { useRef, Fragment, Dispatch, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalVideoProps {
  video: string
  videoWidth: number
  videoHeight: number,
  modalOpen: boolean,
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

export default function ModalVideoTransition({
  video,
  videoWidth,
  videoHeight,
  modalOpen,
  setModalOpen,
}: ModalVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
      <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

        {/* Modal backdrop */}
        <Transition.Child
          className="fixed inset-0 z-[99999] bg-slate-900 bg-opacity-20 transition-opacity"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          aria-hidden="true"
        />
        {/* End: Modal backdrop */}

        {/* Modal dialog */}
        <Transition.Child
          className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center px-4 sm:px-6"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ttransition ease-out duration-200"
          leaveFrom="oopacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="max-w-4xl mx-auto h-full flex items-center">
            <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
              <video ref={videoRef} width={videoWidth} height={videoHeight} controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Dialog.Panel>
          </div>
        </Transition.Child>
        {/* End: Modal dialog */}

      </Dialog>
    </Transition>
  )
}