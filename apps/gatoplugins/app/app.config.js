module.exports = {
  paths: {
    /**
     * Watch out! These values are a duplicate from the shared AppConfig!
     * @see packages/shared/app/app.config.js
     */
    blog: "blog",
    demoPosts: "demos",
    // ----------------------------------------
    
    docs: {
      guides: "guides",
      pluginsReference: "plugins-reference",
      queryLibrary: "library",
    },
    plugins: "plugins",
  },
  urls: {
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
    prices: {
      bundles: {
        allExtensions: {
          tier1: {
            yearly: 99,
            ltd: 249,
          },
          tier2: {
            yearly: 199,
            ltd: 499,
          },
          tier3: {
            yearly: 299,
            ltd: 749,
          },
          tier4: {
            yearly: 399,
            ltd: 999,
          },
        },
      },
      plugins: {
        gatoMultilingualForPolylang: {
          tier1: {
            yearly: 99,
            // ltd: 249,
          },
          tier2: {
            yearly: 199,
            // ltd: 499,
          },
          tier3: {
            yearly: 299,
            // ltd: 749,
          },
          tier4: {
            yearly: 399,
            // ltd: 999,
          },
        },
      },
    }
  },
  services: {
    newsletter: {
      formActionURL: "https://shop.gatoplugins.com/email-subscribe/external",
      emailFieldName: "email",
    },
    shop: {
      affiliateTrackingShopSlug: "gato"
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