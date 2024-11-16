'use client'

import React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  campaigns: {
    enableBlackFriday: boolean,
  },
}

const AppSettingsContext = createContext<ContextProps>({
  campaigns: {
    enableBlackFriday: false,
  },
})

export interface AppSettingsProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppSettingsProvider({
  children,
  campaigns,
}: AppSettingsProviderInterface) {  
  return (
    <AppSettingsContext.Provider
      value={{
        campaigns: campaigns,
      }}
    >
      {children}
    </AppSettingsContext.Provider>
  )
}

export const useAppSettingsProvider = () => useContext(AppSettingsContext)