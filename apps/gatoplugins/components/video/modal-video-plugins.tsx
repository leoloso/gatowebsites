import ProductsModalVideo from 'gatoapp/components/video/modal-video-products'

interface ModalVideoProps {
  video: string
  videoWidth: number
  videoHeight: number,
  children?: React.ReactNode,
  title?: string
  bgClassname?: string,
}

export default function PluginsModalVideo({
  video,
  videoWidth,
  videoHeight,
  children,
  title,
  bgClassname,
}: ModalVideoProps) {
  return (
    <ProductsModalVideo
      video={video}
      videoWidth={videoWidth}
      videoHeight={videoHeight}
      children={children}
      title={title}
      bgClassname={bgClassname}
      topTitle="Gato Plugins"
      // leadingTitle="Gato GraphQL"
    />
  )
}