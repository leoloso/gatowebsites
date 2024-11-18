import { useAppStyleProvider } from 'gatoapp/app/appstyle-provider'
import { LightDarkColorTheme } from 'gatoapp/app/appstyle-provider'

export function getBackgroundColorStyle(): string {
  const { style: AppStyle } = useAppStyleProvider()

  if (AppStyle.lightDarkColorTheme === LightDarkColorTheme.Dark) {
    return 'dark'
  }

  return ''
}
