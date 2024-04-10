
import { DemoPost } from '@/.contentlayer/generated';
import { StaticImageData } from 'next/image'
import Thumb from './thumb';

export default function DemoPostThumb({
  demoPost,
  paddingClassname,
  bgClassname,
  isLandscape,
  svgImage,
  logoImage,
  reverseItems,
  svgClassname,
}: {
  demoPost: DemoPost,
  paddingClassname?: string,
  bgClassname?: string,
  isLandscape?: boolean,
  svgImage?: StaticImageData,
  logoImage?: StaticImageData,
  reverseItems?: boolean,
  svgClassname?: string,
}) {
  return (
    <Thumb
      title={demoPost.title}
      targetImageSources={demoPost.targetImages}
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      isLandscape={isLandscape}
      svgImage={svgImage}
      logoImage={logoImage}
      reverseItems={reverseItems}
      svgClassname={svgClassname}
    />
  )
}
