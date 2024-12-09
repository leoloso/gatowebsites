
import { Plugin } from '@/.contentlayer/generated';
import { StaticImageData } from 'next/image'
import ProductThumb from 'gatoapp/components/product-thumb';

export default function PluginThumb({
  plugin,
  paddingClassname,
  bgClassname,
  extraThumbClassname,
  isLandscape,
  svgImage,
  logoImage,
  reverseItems,
  svgClassname,
  printPluginTitle,
  skipGatoLogo,
  logoClassname,
  applyStyle,
}: {
  plugin: Plugin,
  paddingClassname?: string,
  bgClassname?: string,
  extraThumbClassname?: string,
  isLandscape?: boolean,
  svgImage?: StaticImageData,
  logoImage?: StaticImageData,
  reverseItems?: boolean,
  svgClassname?: string,
  printPluginTitle?: boolean,
  skipGatoLogo?: boolean,
  logoClassname?: string,
  applyStyle?: number,
}) {
  return (
    <ProductThumb
      product={plugin}
      paddingClassname={paddingClassname}
      bgClassname={bgClassname}
      extraThumbClassname={extraThumbClassname}
      isLandscape={isLandscape}
      svgImage={svgImage}
      logoImage={logoImage}
      reverseItems={reverseItems}
      svgClassname={svgClassname}
      printProductTitle={printPluginTitle}
      skipGatoLogo={skipGatoLogo}
      logoClassname={logoClassname}
      applyStyle={applyStyle}
      // leadingTitle="Plugin:"
    />
  )
}
