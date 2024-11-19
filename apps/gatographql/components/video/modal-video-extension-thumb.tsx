import { Extension } from '@/.contentlayer/generated'
import ProductThumbModalVideo from 'gatoapp/components/video/modal-video-product-thumb'

interface ModalVideoProps {
  extension: Extension
  video: string
  videoWidth: number
  videoHeight: number,
  children?: React.ReactNode,
  title?: string
  printExtensionTitle?: boolean,
  bgClassname?: string,
}

export default function ExtensionThumbModalVideo({
  extension,
  video,
  videoWidth,
  videoHeight,
  children,
  title,
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
      title={title}
      printProductTitle={printExtensionTitle}
      bgClassname={bgClassname}
    />
  )
}