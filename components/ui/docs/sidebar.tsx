'use client'

import { useRef, useEffect } from 'react'
import { useAppProvider } from '@/app/(docs)/app-provider'
import { useSelectedLayoutSegments } from 'next/navigation'
import { Transition } from '@headlessui/react'
import SidebarLink from './sidebar-link'
import SidebarLinkGroup from './sidebar-link-group'
import {
  sortDocumentTopics,
  getDocumentsByTopic,
  sortDocuments,
  getDocumentTopicsBySection,
} from '@/utils/content/document'
import { getDocURLPath } from '@/utils/content/application-urls'
import AppConstants from '@/app/app.constants'
import SidebarDocTopicSVG, { sidebarDocTopicSVG1, sidebarDocTopicSVG2, sidebarDocTopicSVG3 } from './sidebar-doctopic-svg'

function getDocTopicSidebarSVG1() {
  return (
    <svg className="mr-3 shrink-0" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-blue-400"
        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
      />
      <path
        className="fill-white dark:fill-slate-800"
        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
      />
      <path
        className="fill-blue-600"
        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
      />
    </svg>
  )
}

function getDocTopicSidebarSVG2() {
  return (
    <svg className="mr-3 shrink-0" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-purple-400"
        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
      />
      <path
        className="fill-white dark:fill-slate-800"
        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
      />
      <path
        className="fill-purple-600"
        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
      />
    </svg>
  )
}

function getDocTopicSidebarSVG3() {
  return (
    <svg className="mr-3 shrink-0" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-sky-400"
        d="M19.888 7.804a.88.88 0 0 0-.314-.328l-7.11-4.346a.889.889 0 0 0-.927 0L4.426 7.476a.88.88 0 0 0-.314.328L12 12.624l7.888-4.82Z"
      />
      <path
        className="fill-white dark:fill-slate-800"
        d="M4.112 7.804a.889.889 0 0 0-.112.43v7.892c0 .31.161.597.426.758l7.11 4.346c.14.085.3.13.464.13v-8.736l-7.888-4.82Z"
      />
      <path
        className="fill-sky-600"
        d="M19.888 7.804c.073.132.112.28.112.43v7.892c0 .31-.161.597-.426.758l-7.11 4.346c-.14.085-.3.13-.464.13v-8.736l7.888-4.82Z"
      />
    </svg>
  )
}

export default function SupportSidebar() {
  const sidebar = useRef<HTMLDivElement>(null)
  const { sidebarOpen, setSidebarOpen } = useAppProvider()
  const segments = useSelectedLayoutSegments()

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!sidebar.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node)) return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })
  
  // Filter only needed docs (guides, extensions reference, tutorial, etc)
  // If the docTopic is not provided in the URL, then it's implicit as "_default",
  // for those sections that have a single level, not two (extensions-reference,
  // tutorial and queries library). However, the data is still organized under
  // 2 levels, with all docs placed under the "_default" folder.
  // To tell one case from another, we check the length of segments:
  // segments[0] is the section, eg: "guides" or "extensions-reference"
  // For guides:
  // - segments[1] is the topic, segments[2] is the slug
  // For extensions-reference:
  // - segments[1] is the slug
  // In this latter case, the topic is implicit as "_default"
  const requestedDocSection = segments.length >= 2 ? segments[0] : ''
  const requestedDocTopicSlug = segments.length >= 3 ? segments[1] : AppConstants.implicitDocTopicSlug

  // Filter by section, sort docs and doc topics by order
  const docTopics = getDocumentTopicsBySection(requestedDocSection).sort(sortDocumentTopics)

  return (
    <>
      {/* Backdrop */}
      <Transition
        className="md:hidden fixed inset-0 z-10 bg-slate-900 bg-opacity-20 transition-opacity"
        show={sidebarOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div ref={sidebar}>
        <Transition
          show={sidebarOpen}
          unmount={false}
          as="aside"
          id="sidebar"
          className="fixed left-0 top-0 bottom-0 w-64 h-screen border-r border-slate-200 md:left-auto md:shrink-0 z-10 md:!opacity-100 md:!block dark:border-slate-800 dark:bg-slate-900 md:dark:bg-slate-900/10"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Gradient bg displaying on light layout only */}
          <div
            className="absolute inset-0 -left-[9999px] bg-gradient-to-b from-slate-50 to-white pointer-events-none -z-10 dark:hidden"
            aria-hidden="true"
          ></div>

          <div className="fixed top-0 bottom-0 w-64 px-4 sm:px-6 md:pl-0 md:pr-8 overflow-y-auto no-scrollbar">
            <div className="pt-24 md:pt-28 pb-8">
              {/* Docs nav */}
              <nav className="md:block">
                <ul className="text-sm">
                  {/* 1st level */}
                  {docTopics.map((docTopic, docTopicIndex) => {
                    // clicking on prev/next will recalculate the "open" state
                    const isDocTopicSelected = docTopic.slug === requestedDocTopicSlug;
                    return (
                      <li className="mb-1" key={docTopicIndex}>
                        <SidebarLinkGroup open={isDocTopicSelected}>
                          {(handleClick, open) => {
                            const docsByTopic = getDocumentsByTopic(docTopic).sort(sortDocuments)
                            return (
                              <>
                                <a
                                  href="#"
                                  className={`relative flex items-center font-[650] text-slate-800 p-1 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-blue-400 before:to-purple-500 before:opacity-20 before:-z-10 before:pointer-events-none dark:text-slate-200 ${!isDocTopicSelected && 'before:hidden'}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleClick();
                                  }}
                                >
                                  <SidebarDocTopicSVG
                                    name={docTopic.name}
                                    svgOption={sidebarDocTopicSVG2}
                                  />
                                </a>
                                <ul className={`mb-3 ml-4 pl-6 border-l border-slate-200 dark:border-slate-800 ${!open && 'hidden'}`}>
                                  {docsByTopic.map((doc, docIndex) => (
                                    <li className="mt-3" key={docIndex}>
                                      <SidebarLink href={getDocURLPath(doc)}>
                                        {doc.title}
                                      </SidebarLink>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )
                          }}
                        </SidebarLinkGroup>
                      </li>
                    )
                  })}    
                </ul>
              </nav>
            </div>
          </div>
        </Transition>
      </div>           
    </>
  )
}