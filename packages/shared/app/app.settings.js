module.exports = {
  campaigns: {
    enableBlackFriday: process.env.NEXT_PUBLIC_GATOAPP_ENABLE_BLACK_FRIDAY ? process.env.NEXT_PUBLIC_GATOAPP_ENABLE_BLACK_FRIDAY === "true" : false,
  },
  useCDNForMovies: true,
  enableLightDarkThemeMode: false,
  useLemonSqueezyOverlay: true,
  postsPerPage: {
    blog: 12
  }
}