import { Plugin } from '@/.contentlayer/generated'
import ProductThumbModalVideo from 'gatoapp/components/video/modal-video-product-thumb'

interface ModalVideoProps {
  plugin: Plugin
  video: string
  videoWidth: number
  videoHeight: number,
  children?: React.ReactNode,
  title?: string
  printPluginTitle?: boolean,
  bgClassname?: string,
}

export default function PluginThumbModalVideo({
  plugin,
  video,
  videoWidth,
  videoHeight,
  children,
  title,
  printPluginTitle,
  bgClassname,
}: ModalVideoProps) {
  return (
    <ProductThumbModalVideo
      product={plugin}
      video={video}
      videoWidth={videoWidth}
      videoHeight={videoHeight}
      children={children}
      title={title}
      printProductTitle={printPluginTitle}
      bgClassname={bgClassname}
    />
  )
}