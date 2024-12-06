'use client'

import clsx from 'clsx'
import { useState, useEffect } from 'react'

export default function PostNav({
  contentId,
  header = 'Table of contents',
  navClassName
}: {
  contentId: string,
  header?: string,
  navClassName?: string
}) {

  const [targets, setTargets] = useState<HTMLElement[]>([])
  const [links, setLinks] = useState<HTMLElement[]>([])

  const scrollSpy = () => {
    const links = document.querySelectorAll('[data-scrollspy-link]') as NodeListOf<HTMLElement>
    if (links.length < 1) return
    const addActive = (i: number) => {
      const link = links[i] ? links[i] : links[0]
      link.classList.add('scrollspy-active')
    }
    const removeActive = (i: number) => {
      links[i].classList.remove('scrollspy-active')
    }
    const removeAllActive = () => [...Array(targets.length).keys()].forEach((link) => removeActive(link))
    const targetMargin = 100
    let currentActive = 0
    addActive(0)
    // listen for scroll events
    window.addEventListener('scroll', () => {
      const current = targets.length - [...targets].reverse().findIndex((target) => window.scrollY >= target.offsetTop - targetMargin) - 1
      if (current !== currentActive) {
        removeAllActive()
        currentActive = current
        addActive(current)
      }
    })
  }
  
  // select targets
  useEffect(() => {
    const targets = document.querySelectorAll(`#${contentId} h2`) as NodeListOf<HTMLElement>
    setTargets(Array.from(targets))
  }, [])  

  // populate the right sidebar
  useEffect(() => {
    let linksArray: HTMLElement[]  = []
    targets.map((target) => {
      linksArray.push(target)
    })
    setLinks(linksArray)
  }, [targets])

  // init scrollspy
  useEffect(() => {
    scrollSpy()
  }, [links])

  return (
    <aside className="relative hidden lg:block w-64 mr-20 shrink-0">
      {links.length > 0 &&
        <div className={clsx(`sticky top-20`, navClassName)}>
          <h4 className="font-bold leading-snug tracking-tight mb-4">{header}</h4>
          <ul className="text-sm font-medium -my-1">
          {links.map((link, linkIndex) => (
            <li key={linkIndex} className="py-1">
              <a
                data-scrollspy-link
                className="flex items-center"
                href={`#${link.id}`}
              >
                <svg className="w-4 h-4 fill-current text-gray-400 dark:text-slate-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                </svg>                
                <span>{link.innerText}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      }
    </aside>
  )
}