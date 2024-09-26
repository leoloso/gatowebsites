const isProd = process.env.NODE_ENV === 'production'
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
            : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",
        },
      },

      extensions: {
        "access-control": {
          defaultTier: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",
        },

        caching: {
          defaultTier: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",
        },

        "custom-endpoints": {
          defaultTier: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",
        },

        deprecation: {
          defaultTier: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",
        },

        "multiple-query-execution": {
          defaultTier: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",
        },

        "persisted-queries": {
          defaultTier: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",
        },

        "polylang-integration": {
          defaultTier: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",
        },

        "query-functions": {
          defaultTier: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",
        },

        "schema-functions": {
          defaultTier: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
          tier1: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
          tier2: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
          tier3: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
          tier4: isProd
            ? "@todo"
            : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
        },
      }
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
          tier1: 24.99,
          tier2: 49.99,
          tier3: 74.99,
          tier4: 99.99,
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