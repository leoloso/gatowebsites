import { allPlugins } from '@/.contentlayer/generated'
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'
import BgImage01 from 'gatoapp/public/assets/theme/customer-bg-01.png'
import BgImage02 from 'gatoapp/public/assets/theme/customer-bg-02.png'
import BgImage03 from 'gatoapp/public/assets/theme/customer-bg-03.png'
import BgImage04 from 'gatoapp/public/assets/theme/customer-bg-04.png'
import BgImage05 from 'gatoapp/public/assets/theme/customer-bg-05.png'
import BgImage06 from 'gatoapp/public/assets/theme/customer-bg-06.png'
import BgImage07 from 'gatoapp/public/assets/theme/customer-bg-07.png'
import BgImage08 from 'gatoapp/public/assets/theme/customer-bg-08.png'
import BgImage09 from 'gatoapp/public/assets/theme/customer-bg-09.png'
import BgImage10 from 'gatoapp/public/assets/theme/customer-bg-10.png'
import { StaticImageData } from 'next/image'

const backgrounds = [
  BgImage01,
  BgImage02,
  BgImage03,
  BgImage04,
  BgImage05,
  BgImage06,
  BgImage07,
  BgImage08,
  BgImage09,
  BgImage10,
]

export function getPluginBackgrounds() {
  const pluginNames = allPlugins.sort(sortByOrderAndTitle).map((plugin) => plugin.title)
  let pluginNameBackgrounds : { [key: string]: StaticImageData } = {}
  pluginNames.forEach(function (pluginName: string, index: number) {
    pluginNameBackgrounds[pluginName] = backgrounds[index % backgrounds.length]
  })
  return pluginNameBackgrounds
}

export function getPluginBackground(pluginName: string) {
  const pluginNameBackgrounds = getPluginBackgrounds()
  if (!pluginNameBackgrounds[pluginName]) {
    throw new Error(`There is no plugin with name '${pluginName}'`)
  }
  return pluginNameBackgrounds[pluginName]
}
