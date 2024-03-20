import type { Metadata } from 'next'
import { allExtensions } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import AppConfig from '@/app/app.config'
import ArtifactSection from '@/components/sections/artifact'
import DefaultArtifactIcon from '@/public/assets/theme/default/artifact-icon-01.png'
import DefaultArtifactImage from '@/public/assets/theme/default/extension-image.png'
import { getDocURLPath, getExtensionDocumentationURLPath } from '@/utils/content/application-urls'
import { getGuideDocuments } from '@/utils/content/document'

export async function generateStaticParams() {
  return allExtensions.map((extension) => ({
    slug: extension.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const extension = allExtensions.find((extension) => extension.slug === params.slug)

  if (!extension) return

  const { title, description } = extension

  return {
    title,
    description,
  }
}

export default async function SingleExtension({ params }: {
  params: { slug: string }
}) {

  const extension = allExtensions.find((extension) => extension.slug === params.slug)

  if (!extension) notFound()

  const relatedGuide = extension.relatedGuide ? getGuideDocuments().find((doc) => doc.slug === extension.relatedGuide?.slug && doc.topicSlug === extension.relatedGuide?.topic) : null

  return (
    <ArtifactSection
      artifact={extension}
      sectionURL={`/${AppConfig.paths.extensions}`}
      testimonialIndex={0}
      defaultArtifactImage={DefaultArtifactImage}
      defaultArtifactIcon={DefaultArtifactIcon}
      widgetChildren={
        <a className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/70 before:rounded-full before:pointer-events-none" href={getExtensionDocumentationURLPath(extension)}>
          <span className="relative inline-flex items-center">
            Open reference doc <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
          </span>
        </a>
      }
    >
      <ul className="text-sm">
        <li className="flex items-center justify-between space-x-4 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
          <span className="text-slate-400">Extension</span>
          <span className="text-slate-300 font-medium">{extension.title}</span>
        </li>
        {!! extension.integration && (
          <li className="flex items-center justify-between space-x-4 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
            <span className="text-slate-400">Integration for</span>
            <a className="text-purple-500 font-medium flex items-center space-x-1" href={extension.integration.url} target="_blank">
              <span>{extension.integration.name}</span>
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
              </svg>
            </a>
          </li>
        )}
        <li className="flex items-center justify-between space-x-4 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
          <span className="text-slate-400">Category</span>
          <span className="text-slate-300 font-medium">{extension.category}</span>
        </li>
        {!! relatedGuide && (
          <li className="py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
            <div className="text-slate-400">Related guide:</div>
            <div className="mt-1">
              <a className="text-purple-500 font-medium" href={getDocURLPath(relatedGuide)}>
                <span>{relatedGuide.title}</span>
              </a>
            </div>
          </li>
        )}
      </ul>
    </ArtifactSection>
  )
}