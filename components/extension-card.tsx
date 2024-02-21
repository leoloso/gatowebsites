import Link from 'next/link'
import Image from 'next/image'
import Star from '@/public/images/star.svg'
import AppConfig from '@/app/app.config'
import { Extension } from '@/.contentlayer/generated'
import DefaultExtensionIcon from '@/public/images/default/extension-icon.svg'

type ExtensionCardProps = {
  extension: Extension
  index: number
}

export default function ExtensionCard({ extension, index }: ExtensionCardProps) {
  const extensionIcon = extension.icon || DefaultExtensionIcon
  return (
    <div key={index} className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
      <div className="flex flex-col p-5 h-full">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <Image src={extensionIcon} width="40" height="40" alt={extension.name} />
            {extension.featured && (
              <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
            )}
          </div>
          <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href={`/${AppConfig.paths.extensions}/${extension.slug}`}>{extension.name}</Link>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-400">{extension.description}</div>
        </div>
      </div>
    </div>
  )
}