const isProd = process.env.NODE_ENV === 'production'
const allExtensionsDevShopURL = "https://shop.gatographql.com/buy/5ae830bc-93c5-475c-9370-b3d13bf12619"

module.exports = {
  paths: {
    /**
     * Watch out! These values are a duplicate from the shared AppConfig!
     * @see packages/shared/app/app.config.js
     */
    blog: "blog",
    demoPosts: "demos",
    /**
     * ----------------------------------------
     */

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
    features: "features"
  },
  urls: {
    githubExtensionStarter: "https://github.com/GatoGraphQL/ExtensionStarter",
    githubRepo: "https://github.com/GatoGraphQL/GatoGraphQL",
    instawpSandboxDemo: "https://app.instawp.io/launch?t=gatographql-demo&d=v2&via=leonardo",
    nextjsWordPressStarter: "https://github.com/GatoGraphQL/next-wordpress-starter",
    shopAffiliateProgram: "https://shop.gatographql.com/affiliates",
    shopClientOrders: "https://app.lemonsqueezy.com/my-orders",
    shopCustomerPortal: "https://shop.gatographql.com/billing",
    shopProducts: {
      bundles: {
        allExtensions: {
          defaultTier: {
            yearly: isProd
              ? "https://shop.gatographql.com/buy/78d3e6b8-0e4a-47e6-8ccc-e23244bbf3d0"
              : allExtensionsDevShopURL,
            ltd: isProd
              ? "https://shop.gatographql.com/buy/cb7ef719-0bfa-44ab-bfed-2f9092b188cf"
              : allExtensionsDevShopURL,
          },
          tier1: {
            yearly: isProd
              ? "https://shop.gatographql.com/buy/ad364899-4a2e-4b72-b615-4a83d546c95c"
              : allExtensionsDevShopURL,
            ltd: isProd
              ? "https://shop.gatographql.com/buy/570ed7a0-9ef6-44b1-a4bd-0ce3bad5682c"
              : allExtensionsDevShopURL,
          },
          tier2: {
            yearly: isProd
              ? "https://shop.gatographql.com/buy/41d53168-1bdd-497c-9cc6-477a21a25911"
              : allExtensionsDevShopURL,
            ltd: isProd
              ? "https://shop.gatographql.com/buy/68e3559e-67b1-4b55-82be-69cd5aef903f"
              : allExtensionsDevShopURL,
          },
          tier3: {
            yearly: isProd
              ? "https://shop.gatographql.com/buy/78d3e6b8-0e4a-47e6-8ccc-e23244bbf3d0"
              : allExtensionsDevShopURL,
            ltd: isProd
              ? "https://shop.gatographql.com/buy/cb7ef719-0bfa-44ab-bfed-2f9092b188cf"
              : allExtensionsDevShopURL,
          },
          tier4: {
            yearly: isProd
              ? "https://shop.gatographql.com/buy/570ed7a0-9ef6-44b1-a4bd-0ce3bad5682c"
              : allExtensionsDevShopURL,
            ltd: isProd
              ? "https://shop.gatographql.com/buy/2d1ede11-4afa-41f7-802f-36b1926a43b3"
              : allExtensionsDevShopURL,
          },
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
      extensions: {
        _shared: {
          tier1: {
            yearly: 24.99,
            ltd: 62.49,
          },
          tier2: {
            yearly: 49.99,
            ltd: 124.99,
          },
          tier3: {
            yearly: 74.99,
            ltd: 187.49,
          },
          tier4: {
            yearly: 99.99,
            ltd: 249.99,
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
      affiliateTrackingShopSlug: "gato"
    }
  }
}