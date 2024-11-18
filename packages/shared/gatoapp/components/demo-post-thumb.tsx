
import { DemoPost } from 'gatoapp/types/types';
import { StaticImageData } from 'next/image'
import WithLogoThumb from 'gatoapp/components/thumbnails/with-logo-thumb';

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
    <WithLogoThumb
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
