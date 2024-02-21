import Link from 'next/link'
import Image from 'next/image'
import Star from '@/public/images/star.svg'

type CardProps = {
  item: {
    category: string
    img: string
    name: string
    featured: boolean
    link: string
    description: string
  }
  index: number
}

export default function ExtensionCard({ item, index }: CardProps) {
  return (
    <div key={index} className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
      <div className="flex flex-col p-5 h-full">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <Image src={item.img} width="40" height="40" alt={item.name} />
            {item.featured && (
              <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
            )}
          </div>
          <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href={item.link}>{item.name}</Link>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-400">{item.description}</div>
        </div>
      </div>
    </div>
  )
}