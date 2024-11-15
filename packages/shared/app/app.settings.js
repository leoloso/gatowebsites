module.exports = {
  campaigns: {
    enableBlackFriday: process.env.NEXT_PUBLIC_GATOAPP_ENABLE_BLACK_FRIDAY ? process.env.NEXT_PUBLIC_GATOAPP_ENABLE_BLACK_FRIDAY === "true" : false,
  },
  useCDNForMovies: true,
  enableLightDarkThemeMode: process.env.NEXT_PUBLIC_GATOAPP_ENABLE_LIGHT_DARK_THEME_MODE ? process.env.NEXT_PUBLIC_GATOAPP_ENABLE_LIGHT_DARK_THEME_MODE === "true" : false,
  useLemonSqueezyOverlay: true,
  postsPerPage: {
    blog: 12
  }
}