import { Extension } from '@/.contentlayer/generated'
import ProductThumbModalVideo from 'gatoapp/components/video/modal-video-product-thumb'

interface ModalVideoProps {
  extension: Extension
  video: string
  videoWidth: number
  videoHeight: number,
  children?: React.ReactNode,
  clickTitle?: string
  printExtensionTitle?: boolean,
  bgClassname?: string,
}

export default function ExtensionThumbModalVideo({
  extension,
  video,
  videoWidth,
  videoHeight,
  children,
  clickTitle,
  printExtensionTitle,
  bgClassname,
}: ModalVideoProps) {
  return (
    <ProductThumbModalVideo
      product={extension}
      video={video}
      videoWidth={videoWidth}
      videoHeight={videoHeight}
      children={children}
      clickTitle={clickTitle}
      printProductTitle={printExtensionTitle}
      bgClassname={bgClassname}
    />
  )
}