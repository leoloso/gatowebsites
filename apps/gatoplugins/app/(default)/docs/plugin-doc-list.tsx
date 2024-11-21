import Link from 'next/link'
import Image from 'next/image'
import Particles from 'gatoapp/components/particles'
import Highlighter, { HighlighterItem02 } from 'gatoapp/components/highlighter'
import { allPlugins } from '@/.contentlayer/generated'
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'
import { getPluginBackground } from '@/utils/content/plugin-backgrounds'

export default function PluginDocList() {
  const plugins = allPlugins.sort(sortByOrderAndTitle)
  
  return (
    <div className="max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none pb-12 md:pb-20">
      <Highlighter className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 group [&_*:nth-child(n+5):not(:nth-child(n+12))]:order-1 [&_*:nth-child(n+10):not(:nth-child(n+11))]:!order-2">

        {plugins.map((plugin, index) => (
          <div key={index}>
            <Link href={plugin.docUrlPath}>
              <HighlighterItem02>
                <div className="relative h-full bg-purple-900/50 rounded-[inherit] z-20 overflow-hidden">
                  {/* Particles animation */}
                  <Particles className="absolute inset-0 -z-10" quantity={3} />
                  <div className="flex items-center justify-center">
                    <Image className="w-full h-full aspect-video object-cover" src={getPluginBackground(plugin.title)} width={175} height={175} alt="Plugin Background" aria-hidden="true" />
                    <Image className="absolute" src={plugin.targetImages[0]} alt={plugin.title} width={175} height={175} />
                    <div className="absolute bottom-0 text-center text-sm font-medium font-inter antialiased bg-slate-900/70 text-slate-100 tracking-tight px-2">
                      {plugin.title}
                    </div>
                  </div>
                </div>
              </HighlighterItem02>
            </Link>
          </div>
        ))}

      </Highlighter>
    </div>
  )
}
