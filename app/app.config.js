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
    shopPurchase: isProd
      ? "https://shop.gatographql.com/checkout/buy/24018c6f-1fd2-4c95-a22b-cce5844eb910"
      : "@todo",
    shopPurchaseTier1: isProd
      ? "https://shop.gatographql.com/checkout/buy/24018c6f-1fd2-4c95-a22b-cce5844eb910"
      : "@todo",
    shopPurchaseTier2: isProd
      ? "https://shop.gatographql.com/checkout/buy/afaff3a7-b2d4-4eaa-bf57-c8f600216aec"
      : "@todo",
    shopPurchaseTier3: isProd
      ? "https://shop.gatographql.com/checkout/buy/37565248-d898-4ab7-832d-cddb0fba1d87"
      : "@todo",
    shopPurchaseTier4: isProd
      ? "https://shop.gatographql.com/checkout/buy/37565248-d898-4ab7-832d-cddb0fba1d87"
      : "@todo",
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