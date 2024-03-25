import { allComparisonPosts } from 'contentlayer/generated'
import { sortByOrderAndTitle } from './sort'
import ComparisonTargetBg01 from '@/public/assets/theme/customer-bg-01.png'
import ComparisonTargetBg02 from '@/public/assets/theme/customer-bg-02.png'
import ComparisonTargetBg03 from '@/public/assets/theme/customer-bg-03.png'
import ComparisonTargetBg04 from '@/public/assets/theme/customer-bg-04.png'
import ComparisonTargetBg05 from '@/public/assets/theme/customer-bg-05.png'
import ComparisonTargetBg06 from '@/public/assets/theme/customer-bg-06.png'
import ComparisonTargetBg07 from '@/public/assets/theme/customer-bg-07.png'
import ComparisonTargetBg08 from '@/public/assets/theme/customer-bg-08.png'
import ComparisonTargetBg09 from '@/public/assets/theme/customer-bg-09.png'
import ComparisonTargetBg10 from '@/public/assets/theme/customer-bg-10.png'
import { StaticImageData } from 'next/image'

const backgrounds = [
  ComparisonTargetBg01,
  ComparisonTargetBg02,
  ComparisonTargetBg03,
  ComparisonTargetBg04,
  ComparisonTargetBg05,
  ComparisonTargetBg06,
  ComparisonTargetBg07,
  ComparisonTargetBg08,
  ComparisonTargetBg09,
  ComparisonTargetBg10,
]

export function getComparisonPostBackgrounds() {
  const comparisonPostTargetNames = allComparisonPosts.sort(sortByOrderAndTitle).map((comparisonPost) => comparisonPost.targetName)
  let comparisonPostTargetNameBackgrounds : { [key: string]: StaticImageData } = {}
  comparisonPostTargetNames.forEach(function (comparisonPostTargetName: string, index: number) {
    comparisonPostTargetNameBackgrounds[comparisonPostTargetName] = backgrounds[index % backgrounds.length]
  })
  return comparisonPostTargetNameBackgrounds
}

export function getComparisonPostBackground(comparisonPostTargetName: string) {
  const comparisonPostTargetNameBackgrounds = getComparisonPostBackgrounds()
  if (!comparisonPostTargetNameBackgrounds[comparisonPostTargetName]) {
    throw new Error(`There is no comparison post with target name '${comparisonPostTargetName}'`)
  }
  return comparisonPostTargetNameBackgrounds[comparisonPostTargetName]
}
