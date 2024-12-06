import ProductCoverItem from './product-cover-item'
import { ProductProps } from 'gatoapp/components/product-thumb'
import React from 'react'

export default function ProductCover({
  product,
  leadingTitle,
  applyStyle,
}: {
  product: ProductProps
  leadingTitle?: string,
  applyStyle?: number,
}) {

  return (
    <>

      {/* Content */}
      <section className="relative">

        <ProductCoverItem
          product={product}
          leadingTitle={leadingTitle}
          applyStyle={applyStyle}
        />

      </section>

    </>
  )
}
