'use client'

import { HighlightMdx } from '@gato/components/src/mdx/highlight-mdx'
import WithTitleThumb from '@gato/components/src/thumbnails/with-title-thumb'
import { useRef } from 'react'
import slugify from '@sindresorhus/slugify';
import AppSettings from '@/app/app.settings'
import { getCDNURL } from '@/utils/domain';

export default function HighlightItem({ ...props }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <article className="pt-12 first-of-type:pt-0 group">
      <div className="md:flex">
        <div className="w-48 shrink-0">
          <span className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
            <span className="ml-[1.625rem] md:ml-5">{props.category}</span>
          </span>
        </div>
        <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
          <header id={slugify(props.title)} className='scroll-mt-20 pb-8'>
            {/* <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">{props.title}</h2> */}
            <WithTitleThumb
              title={props.title}
              extraThumbClassname="rounded-2xl"
              bgClassname="bg-gradient-to-tr from-slate-900 to-blue-900"
            />
          </header>
          <div className="p-px mb-8">
            <HighlightMdx code={props.body.code} />
          </div>
          <figure className="bg-gradient-to-b from-slate-300/20 to-transparent rounded mb-4">
            <video className="w-full rounded-[inherit]" ref={videoRef} width={768} height={432} loop controls>
              <source src={AppSettings.useCDNForMovies ? getCDNURL(props.video) : props.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figcaption className="text-sm text-center font-bold text-slate-400 mt-4">{props.videoDesc}</figcaption>
          </figure>
        </div>
      </div>
    </article>
  )
}
