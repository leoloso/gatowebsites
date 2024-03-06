'use client'

import { useEffect } from 'react'

export default function InitializeLemonSqueezyShop() {
  // @see https://docs.lemonsqueezy.com/guides/tutorials/nextjs-saas-billing#creating-checkouts-and-letting-customers-subscribe
  // Make sure Lemon.js is loaded, you need to enqueue the Lemon Squeezy SDK in your app first.
  useEffect(() => {
    if (typeof window.createLemonSqueezy === 'function') {
      window.createLemonSqueezy()
    }
  }, [])

  return (
    <></>
  )
}
