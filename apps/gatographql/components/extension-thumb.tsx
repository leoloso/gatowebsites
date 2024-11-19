
import { Extension } from '@/.contentlayer/generated';
import { StaticImageData } from 'next/image'
import ProductThumb from 'gatoapp/components/product-thumb';

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
  skipGatoLogo=false,
  logoClassname,
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
  skipGatoLogo?: boolean,
  logoClassname?: string,
}) {
  return (
    <ProductThumb
      product={extension}
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      extraThumbClassname={extraThumbClassname}
      isLandscape={isLandscape}
      svgImage={svgImage}
      logoImage={logoImage}
      reverseItems={reverseItems}
      svgClassname={svgClassname}
      printExtensionTitle={printExtensionTitle}
      skipGatoLogo={skipGatoLogo}
      logoClassname={logoClassname}
      leadingTitle="Extension:"
    />
  )
}
