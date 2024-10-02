const isProd = process.env.NODE_ENV === 'production'
const allExtensionsDevShopURL = "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619"
module.exports = {
  paths: {
    blog: "blog",
    highlights: "highlights",
    comparisonPosts: "comparisons",
    docs: {
      extensionsReference: "extensions-reference",
      guides: "guides",
      tutorial: "tutorial",
      queryLibrary: "library",
      architecture: "architecture",
    },
    extensions: "extensions",
    features: "features",
    demoPosts: "demos"
  },
  urls: {
    githubExtensionStarter: "https://github.com/GatoGraphQL/ExtensionStarter",
    githubRepo: "https://github.com/GatoGraphQL/GatoGraphQL",
    instawpSandboxDemo: "https://app.instawp.io/launch?t=gatographql-demo&d=v2",
    nextjsWordPressStarter: "https://github.com/GatoGraphQL/next-wordpress-starter",
    shopAffiliateProgram: "https://shop.gatographql.com/affiliates",
    shopClientOrders: "https://app.lemonsqueezy.com/my-orders",
    shopCustomerPortal: "https://shop.gatographql.com/billing",
    shopProducts: {
      bundles: {
        allExtensions: {
          defaultTier: isProd
            ? "@todo"
            : allExtensionsDevShopURL,
          tier1: isProd
            ? "@todo"
            : allExtensionsDevShopURL,
          tier2: isProd
            ? "@todo"
            : allExtensionsDevShopURL,
          tier3: isProd
            ? "@todo"
            : allExtensionsDevShopURL,
          tier4: isProd
            ? "@todo"
            : allExtensionsDevShopURL,
        },
      },
    },
    wpDirectory: "https://wordpress.org/plugins/gatographql/",
    wpDownload: "https://downloads.wordpress.org/plugin/gatographql.latest-stable.zip",
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
          tier1: 99,
          tier2: 199,
          tier3: 299,
          tier4: 399,
        }
      },
      extensions: {
        _shared: {
          yearly: {
            tier1: 24.99,
            tier2: 49.99,
            tier3: 74.99,
            tier4: 99.99,
          },
          ltd: {
            tier1: 62.49,
            tier2: 124.99,
            tier3: 187.49,
            tier4: 249.99,
          },
        },
      },
    }
  },
  services: {
    newsletter: {
      formActionURL: "https://shop.gatographql.com/email-subscribe/external",
      emailFieldName: "email",
    },
    shop: {
      affiliateTrackingShopSlug: "gatographql"
    }
  }
}