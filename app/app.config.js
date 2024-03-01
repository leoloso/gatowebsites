const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  paths: {
    blog: "blog",
    changelog: "update",
    docs: {
      extensionsReference: "extensions-reference",
      guides: "guides",
      tutorial: "tutorial",
      queryLibrary: "library",
    },
    extensions: "extensions",
    features: "features",
    videoPosts: "videos"
  },
  urls: {
    githubExtensionStarter: "https://github.com/GatoGraphQL/ExtensionStarter",
    githubRepo: "https://github.com/GatoGraphQL/GatoGraphQL",
    instawpSandboxDemo: "https://app.instawp.io/launch?t=gatographql-demo&d=v2",
    shopAffiliateProgram: "https://shop.gatographql.com/affiliates",
    shopClientOrders: "https://app.lemonsqueezy.com/my-orders",
    shopPurchase: isProd
      ? "https://shop.gatographql.com/checkout/buy/834ead62-1125-4e96-9bcb-5deb8ea768f5"
      : "https://shop.gatographql.com/checkout/buy/8fec9bf7-5809-455a-90e7-475312f32488",
    shopPurchaseTier1: isProd
      ? "https://shop.gatographql.com/checkout/buy/834ead62-1125-4e96-9bcb-5deb8ea768f5"
      : "https://shop.gatographql.com/checkout/buy/8fec9bf7-5809-455a-90e7-475312f32488",
    shopPurchaseTier2: isProd
      ? "https://shop.gatographql.com/checkout/buy/e8254ca0-ba6b-4875-a090-e0557b59c7d1"
      : "https://shop.gatographql.com/checkout/buy/7cd80f3d-da3f-4d83-a712-15cdacdcd4be",
    shopPurchaseTier3: isProd
      ? "https://shop.gatographql.com/checkout/buy/017ca707-0114-4a9a-bf41-7afd278fec03"
      : "https://shop.gatographql.com/checkout/buy/0eb25649-d977-4784-bf96-68aeed24211f",
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
    }
  }
}