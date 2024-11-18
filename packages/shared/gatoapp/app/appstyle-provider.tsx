'use client'

import React from 'react'
import { createContext, useContext } from 'react'
import { LightDarkColorTheme } from 'gatoapp/utils/style/light-dark-theme-mode'

type ContextProps = {
  style: {
    lightDarkColorTheme: LightDarkColorTheme
  },
}

const AppStyleContext = createContext<ContextProps>({
  style: {
    lightDarkColorTheme: LightDarkColorTheme.Light
  },
})

export interface AppStyleProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppStyleProvider({
  children,
  style,
}: AppStyleProviderInterface) {  
  return (
    <AppStyleContext.Provider
      value={{
        style,
      }}
    >
      {children}
    </AppStyleContext.Provider>
  )
}

export const useAppStyleProvider = () => useContext(AppStyleContext)