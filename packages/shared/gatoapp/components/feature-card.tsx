import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import DefaultFeatureIcon from 'gatoapp/public/assets/theme/default/feature-icon.png'
import { getFeatureURLPath } from 'gatoapp/utils/content/application-urls'
import { Feature } from 'gatoapp/types/types'
import clsx from 'clsx'

type FeatureCardProps = {
  feature: Feature,
  defaultFeatureIcon?: StaticImageData,
  bgClassname?: string,
}

export default function FeatureCard({
  feature,
  defaultFeatureIcon,
  bgClassname = "bg-gradient-to-tr from-slate-800 to-slate-800/25"
}: FeatureCardProps) {
  const featureIcon = /*feature.icon || */defaultFeatureIcon || DefaultFeatureIcon
  return (
    <div className={clsx(bgClassname, "rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative")}>
      <div className="flex flex-col p-5 h-full">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <Image src={featureIcon} width="40" height="40" alt={feature.title} />
          </div>
          <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href={getFeatureURLPath(feature)}>{feature.title}</Link>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-400">{feature.description}</div>
        </div>
      </div>
    </div>
  )
}