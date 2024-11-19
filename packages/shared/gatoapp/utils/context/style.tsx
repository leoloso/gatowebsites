'use client'

import { useAppStyleProvider } from 'gatoapp/app/appstyle-provider'
import { LightDarkColorTheme } from 'gatoapp/utils/style/light-dark-theme-mode'

export function usingDarkColorThemeMode(): boolean {
  const { style: AppStyle } = useAppStyleProvider()

  return AppStyle.lightDarkColorTheme === LightDarkColorTheme.Dark;
}
