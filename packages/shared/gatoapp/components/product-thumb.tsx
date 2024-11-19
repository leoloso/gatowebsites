
import { StaticImageData } from 'next/image'
import WithLogoThumb from 'gatoapp/components/thumbnails/with-logo-thumb';
import React from 'react';

export type Product = {
  title: string
  targetImages: string[]
}

export default function ProductThumb({
  product,
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
  product: Product,
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
    <WithLogoThumb
      skipGatoLogo={skipGatoLogo}
      skipPlusImage={true}

      leadingTitle="Extension:"
      extraLeadingTitleClassname="text-slate-300"
      title={printExtensionTitle ? product.title : ''}
      targetImageSources={product.targetImages}
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      extraThumbClassname={extraThumbClassname}
      isLandscape={isLandscape}
      svgImage={svgImage}
      logoImage={logoImage}
      reverseItems={reverseItems}
      svgClassname={svgClassname}
      logoClassname={logoClassname}
    />
  )
}
