import ProductCoverItem from './product-cover-item'
import { Product } from 'gatoapp/components/product-thumb'
import React from 'react'

export default function ProductCover({
  product,
  leadingTitle,
}: {
  product: Product
  leadingTitle?: string,
}) {

  return (
    <>

      {/* Content */}
      <section className="relative">

        <ProductCoverItem
          product={product}
          leadingTitle={leadingTitle}
        />

      </section>

    </>
  )
}
