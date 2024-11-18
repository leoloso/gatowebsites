// 'use client'

// import { useAppStyleProvider } from 'gatoapp/app/appstyle-provider'
// import { LightDarkColorTheme } from 'gatoapp/app/appstyle-provider'

// export function getBackgroundColorStyle(): string {
//   const { style: AppStyle } = useAppStyleProvider()

//   if (AppStyle.lightDarkColorTheme === LightDarkColorTheme.Dark) {
//     return 'dark'
//   }

//   return ''
// }

export const enum LightDarkColorTheme {
  Light = 'light',
  Dark = 'dark',
  Configurable = 'configurable',
}

export function getBackgroundColorStyle(lightDarkColorTheme: LightDarkColorTheme): string {
  if (lightDarkColorTheme === LightDarkColorTheme.Dark) {
    return 'dark'
  }

  return ''
}

