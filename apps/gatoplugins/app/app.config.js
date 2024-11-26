module.exports = {
  paths: {
    /**
     * Watch out! These values are a duplicate from the shared AppConfig!
     * @see packages/shared/gatoapp/app/app.config.js
     */
    blog: "blog",
    demoPosts: "demos",
    // features: "features",
    docs: "docs",
    // ----------------------------------------
    
    plugins: "plugins",
  },
  urls: {
    gatoGraphQL: "https://gatographql.com",
    instawpSandboxDemo: "@todo Complete here!!!",
    shopAffiliateProgram: "https://shop.gatoplugins.com/affiliates",
    shopClientOrders: "https://app.lemonsqueezy.com/my-orders",
    shopCustomerPortal: "https://shop.gatoplugins.com/billing",
  },
  shop: {
    licenseDomainNumber: {
      tier1: 5,
      tier2: 25,
      tier3: 100,
      tier4: 500,
    },
  },
  services: {
    newsletter: {
      formActionURL: "https://shop.gatoplugins.com/email-subscribe/external",
      emailFieldName: "email",
    },
    shop: {
      affiliateTrackingShopSlug: "gato"
    },
    analytics: {
      domain: "gatoplugins.com"
    }
  },
  domains: {
    cdn: '@todo Complete here!!!',
  },
  emails: {
    info: "info@gatoplugins.com",
  },
  meta: {
    name: 'Gato Plugins',
  }
}