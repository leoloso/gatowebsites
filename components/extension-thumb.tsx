
import { Extension } from '@/.contentlayer/generated';
import { StaticImageData } from 'next/image'
import WithLogoThumb from './thumbnails/with-logo-thumb';

export default function ExtensionThumb({
  extension,
  paddingClassname,
  bgClassname,
  isLandscape,
  svgImage,
  logoImage,
  reverseItems,
  svgClassname,
}: {
  extension: Extension,
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
      // skipGatoGraphQLLogo={true}
      skipPlusImage={true}

      targetImageSources={extension.targetImages}
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
