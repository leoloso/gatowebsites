
import { StaticImageData } from 'next/image'
import WithLogoThumb from 'gatoapp/components/thumbnails/with-logo-thumb';
import React from 'react';

export type ProductProps = {
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
  printProductTitle=false,
  skipGatoLogo=false,
  logoClassname,
  leadingTitle,
}: {
  product: ProductProps,
  paddingClassname?: string,
  bgClassname?: string,
  extraThumbClassname?: string,
  isLandscape?: boolean,
  svgImage?: StaticImageData,
  logoImage?: StaticImageData,
  reverseItems?: boolean,
  svgClassname?: string,
  printProductTitle?: boolean,
  skipGatoLogo?: boolean,
  logoClassname?: string,
  leadingTitle?: string,
}) {
  return (
    <WithLogoThumb
      skipGatoLogo={skipGatoLogo}
      skipPlusImage={true}

      leadingTitle={leadingTitle}
      extraLeadingTitleClassname="text-slate-300"
      title={printProductTitle ? product.title : ''}
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
