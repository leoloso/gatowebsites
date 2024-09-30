import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import Star from '@/public/assets/theme/star.svg'
import DefaultArtifactIcon from '@/public/assets/theme/default/artifact-icon.png'
import { getArtifactURLPath } from '@/utils/content/application-urls'
import { Artifact } from '@/utils/content/types'
import clsx from 'clsx'

type ArtifactCardProps = {
  artifact: Artifact,
  defaultArtifactIcon?: StaticImageData,
  bgClassname?: string,
}

export default function ArtifactCard({
  artifact,
  defaultArtifactIcon,
  bgClassname = "bg-gradient-to-tr from-slate-800 to-slate-800/25"
}: ArtifactCardProps) {
  const artifactIcon = artifact.icon || defaultArtifactIcon || DefaultArtifactIcon
  return (
    <div className={clsx(bgClassname, "rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative")}>
      <div className="flex flex-col p-5 h-full">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <Image src={artifactIcon} width="40" height="40" alt={artifact.title} />
            {/* {artifact.featured && (
              <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
            )} */}
          </div>
          <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href={getArtifactURLPath(artifact)}>{artifact.title}</Link>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-400">{artifact.description}</div>
        </div>
      </div>
    </div>
  )
}