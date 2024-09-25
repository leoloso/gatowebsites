
import { Extension } from '@/.contentlayer/generated';
import { StaticImageData } from 'next/image'
import WithLogoThumb from './thumbnails/with-logo-thumb';

export default function ExtensionThumb({
  extension,
  paddingClassname,
  bgClassname,
  extraThumbClassname,
  isLandscape,
  svgImage,
  logoImage,
  reverseItems,
  svgClassname,
  printExtensionTitle=false,
}: {
  extension: Extension,
  paddingClassname?: string,
  bgClassname?: string,
  extraThumbClassname?: string,
  isLandscape?: boolean,
  svgImage?: StaticImageData,
  logoImage?: StaticImageData,
  reverseItems?: boolean,
  svgClassname?: string,
  printExtensionTitle?: boolean,
}) {
  return (
    <WithLogoThumb
      // skipGatoGraphQLLogo={true}
      skipPlusImage={true}

      title={printExtensionTitle ? extension.title : ''}
      subtitle="Extension:"
      targetImageSources={extension.targetImages}
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      extraThumbClassname={extraThumbClassname}
      isLandscape={isLandscape}
      svgImage={svgImage}
      logoImage={logoImage}
      reverseItems={reverseItems}
      svgClassname={svgClassname}
    />
  )
}
