'use client'

import React from 'react'
import { createContext, useContext } from 'react'

export const enum LightDarkColorTheme {
  Light = 'light',
  Dark = 'dark',
  Configurable = 'configurable',
}

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