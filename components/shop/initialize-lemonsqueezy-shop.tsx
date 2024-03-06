'use client'

import { useEffect } from 'react'

export default function InitializeLemonSqueezyShop() {
  // @see https://stackoverflow.com/questions/56457935/typescript-error-property-x-does-not-exist-on-type-window
  // @see https://docs.lemonsqueezy.com/guides/tutorials/nextjs-saas-billing#creating-checkouts-and-letting-customers-subscribe
  useEffect(() => {
    if (typeof (window as any).createLemonSqueezy === 'function') {
      (window as any).createLemonSqueezy()
    }
  }, [])

  return (
    <></>
  )
}
