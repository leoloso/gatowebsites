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
      allExtensionsBundleDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",
      allExtensionsBundleTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",
      allExtensionsBundleTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",
      allExtensionsBundleTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",
      allExtensionsBundleTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/5ae830bc-93c5-475c-9370-b3d13bf12619",

      accessControlExtensionDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",
      accessControlExtensionTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",
      accessControlExtensionTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",
      accessControlExtensionTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",
      accessControlExtensionTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/fd5b3b10-7a8c-4ee2-9d9f-000566743b9d",

      cachingExtensionDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",
      cachingExtensionTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",
      cachingExtensionTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",
      cachingExtensionTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",
      cachingExtensionTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/808f5132-0e79-4cbb-be4d-e40b78b5b99e",

      customEndpointsExtensionDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",
      customEndpointsExtensionTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",
      customEndpointsExtensionTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",
      customEndpointsExtensionTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",
      customEndpointsExtensionTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/035d58dd-7f45-4c30-afe2-c01df0141cad",

      deprecationExtensionDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",
      deprecationExtensionTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",
      deprecationExtensionTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",
      deprecationExtensionTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",
      deprecationExtensionTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6bf6e511-8c8a-4524-a382-62f5b43463b4",

      multipleQueryExecutionExtensionDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",
      multipleQueryExecutionExtensionTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",
      multipleQueryExecutionExtensionTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",
      multipleQueryExecutionExtensionTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",
      multipleQueryExecutionExtensionTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/1d70d151-8b83-46e9-9ffa-888b6b1285e6",

      persistedQueriesExtensionDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",
      persistedQueriesExtensionTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",
      persistedQueriesExtensionTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",
      persistedQueriesExtensionTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",
      persistedQueriesExtensionTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/6b8f6a1e-4474-486f-9214-2cdb649c0bab",

      polylangIntegrationExtensionDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",
      polylangIntegrationExtensionTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",
      polylangIntegrationExtensionTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",
      polylangIntegrationExtensionTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",
      polylangIntegrationExtensionTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/897b9058-2385-48e7-b69e-3e237812d24b",

      queryFunctionsExtensionDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",
      queryFunctionsExtensionTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",
      queryFunctionsExtensionTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",
      queryFunctionsExtensionTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",
      queryFunctionsExtensionTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/eed12f49-83ba-4e01-958b-04b957a8074a",

      schemaFunctionsExtensionDefaultTier: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
      schemaFunctionsExtensionTier1: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
      schemaFunctionsExtensionTier2: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
      schemaFunctionsExtensionTier3: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
      schemaFunctionsExtensionTier4: isProd
        ? "@todo"
        : "https://shop.gatographql.com/checkout/buy/bc18bb56-b22c-47e0-829f-22e400530c5c",
    },
    wpDirectory: "https://wordpress.org/plugins/gatographql/",
    wpDownload: "https://downloads.wordpress.org/plugin/gatographql.latest-stable.zip",
  },
  shop: {
    prices: {
      allExtensionsBundle: {
        tier1: 99,
        tier2: 199,
        tier3: 299,
        tier4: 399,
      }
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