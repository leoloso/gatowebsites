'use client'

import { useSearchParams } from 'next/navigation';
import { Extension } from '@/.contentlayer/generated'
import ExtensionThumb from '@/components/extension-thumb'

export default function ExtensionCoverItem({
  extension,
}: {
  extension: Extension,
}) {
  const searchParams = useSearchParams();
  const printExtensionTitle = searchParams.has('title') || false
  const includeGatoGraphQLLogo = searchParams.has('logo') || false
  return (
    <header
      className='aspect-video'
    >
      <ExtensionThumb
        bgClassname='bg-gradient-to-tr from-slate-900 to-blue-900'
        // numberParticles={20}
        extension={extension}
        isLandscape={true}
        printExtensionTitle={printExtensionTitle}
        skipGatoGraphQLLogo={!includeGatoGraphQLLogo}
      />
    </header>
  )
}
