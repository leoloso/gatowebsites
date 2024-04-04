const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  paths: {
    blog: "blog",
    changelog: "update",
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
    demoPosts: "videos"
  },
  urls: {
    githubExtensionStarter: "https://github.com/GatoGraphQL/ExtensionStarter",
    githubRepo: "https://github.com/GatoGraphQL/GatoGraphQL",
    instawpSandboxDemo: "https://app.instawp.io/launch?t=gatographql-demo&d=v2",
    nextjsWordPressStarter: "https://github.com/GatoGraphQL/next-wordpress-starter",
    shopAffiliateProgram: "https://shop.gatographql.com/affiliates",
    shopClientOrders: "https://app.lemonsqueezy.com/my-orders",
    shopPurchase: isProd
      ? "https://shop.gatographql.com/checkout/buy/24018c6f-1fd2-4c95-a22b-cce5844eb910"
      : "https://shop.gatographql.com/checkout/buy/3a50305d-a275-40e9-a8ac-56c01321b83c",
    shopPurchaseTier1: isProd
      ? "https://shop.gatographql.com/checkout/buy/24018c6f-1fd2-4c95-a22b-cce5844eb910"
      : "https://shop.gatographql.com/checkout/buy/3a50305d-a275-40e9-a8ac-56c01321b83c",
    shopPurchaseTier2: isProd
      ? "https://shop.gatographql.com/checkout/buy/afaff3a7-b2d4-4eaa-bf57-c8f600216aec"
      : "https://shop.gatographql.com/checkout/buy/e86196ba-47de-4583-8c23-10c1e4d8859a",
    shopPurchaseTier3: isProd
      ? "https://shop.gatographql.com/checkout/buy/37565248-d898-4ab7-832d-cddb0fba1d87"
      : "https://shop.gatographql.com/checkout/buy/6cfe250c-6b6b-41f2-bc23-f63521961089",
    wpDirectory: "https://wordpress.org/plugins/gatographql/",
    wpDownload: "https://downloads.wordpress.org/plugin/gatographql.latest-stable.zip",
  },
  shop: {
    prices: {
      tier1: 129,
      tier2: 249,
      tier3: 499,
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