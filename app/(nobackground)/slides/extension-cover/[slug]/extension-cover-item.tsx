import { Extension } from '@/.contentlayer/generated'
import ExtensionThumb from '@/components/extension-thumb'

export default function ExtensionCoverItem({
  extension,
}: {
  extension: Extension,
}) {
  return (
    <header
      className='aspect-video'
    >
      <ExtensionThumb
        bgClassname='bg-gradient-to-tr from-slate-900 to-blue-900'
        // numberParticles={20}
        extension={extension}
        isLandscape={true}
        printExtensionTitle={true}
      />
    </header>
  )
}
