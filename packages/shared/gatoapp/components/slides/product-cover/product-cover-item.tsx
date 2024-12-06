'use client'

import { useSearchParams } from 'next/navigation';
import { ProductProps } from 'gatoapp/components/product-thumb'
import ProductThumb from 'gatoapp/components/product-thumb'
import React from 'react';

export default function ProductCoverItem({
  product,
  leadingTitle,
}: {
  product: ProductProps,
  leadingTitle?: string,
}) {
  const searchParams = useSearchParams();
  const printProductTitle = searchParams.has('title') || false
  const includeGatoLogo = searchParams.has('logo') || false
  return (
    <header
      className='aspect-video'
    >
      <ProductThumb
        bgClassname='bg-gradient-to-tr from-blue-600 to-cyan-300 text-white dark:from-slate-900 dark:to-blue-900'
        product={product}
        isLandscape={true}
        printProductTitle={printProductTitle}
        skipGatoLogo={!includeGatoLogo}
        leadingTitle={leadingTitle}
      />
    </header>
  )
}
