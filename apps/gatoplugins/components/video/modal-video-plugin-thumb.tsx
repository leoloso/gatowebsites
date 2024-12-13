import { Plugin } from '@/.contentlayer/generated'
import ProductThumbModalVideo from 'gatoapp/components/video/modal-video-product-thumb'

interface ModalVideoProps {
  plugin: Plugin
  video: string
  videoWidth: number
  videoHeight: number,
  children?: React.ReactNode,
  clickTitle?: string
  pluginTitle?: string,
  printPluginTitle?: boolean,
  titleClassname?: string
  bgClassname?: string,
}

export default function PluginThumbModalVideo({
  plugin,
  video,
  videoWidth,
  videoHeight,
  children,
  clickTitle,
  pluginTitle,
  printPluginTitle,
  titleClassname,
  bgClassname,
}: ModalVideoProps) {
  return (
    <ProductThumbModalVideo
      product={plugin}
      video={video}
      videoWidth={videoWidth}
      videoHeight={videoHeight}
      children={children}
      clickTitle={clickTitle}
      productTitle={pluginTitle}
      printProductTitle={printPluginTitle}
      bgClassname={bgClassname}
      titleClassname={titleClassname}
    />
  )
}