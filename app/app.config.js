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
    },
    wpDirectory: "https://wordpress.org/plugins/gatographql/",
    wpDownload: "https://downloads.wordpress.org/plugin/gatographql.latest-stable.zip",
  },
  shop: {
    prices: {
      tier1: 99,
      tier2: 199,
      tier3: 299,
      tier4: 399,
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