
import { Extension } from '@/.contentlayer/generated';
import { StaticImageData } from 'next/image'
import WithLogoThumb from './thumbnails/with-logo-thumb';

// @todo Use images from extension
import WordPressLogo from '@/public/assets/external-logos/wordpress-logo.svg'
import GraphQLLogo from '@/public/assets/external-logos/graphql-logo.svg'

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
      // @todo Use images from extension
      // targetImageSources={extension.targetImages}
      targetImageSources={[
        WordPressLogo,
        GraphQLLogo
      ]}

      skipGatoGraphQLLogo={true}

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
