'use client'

import React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  settings: {
    campaigns: {
      enableBlackFriday: boolean,
    },
  },
}

const AppSettingsContext = createContext<ContextProps>({
  settings: {
    campaigns: {
      enableBlackFriday: false,
    },
  },
})

export interface AppSettingsProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppSettingsProvider({
  children,
  settings,
}: AppSettingsProviderInterface) {  
  return (
    <AppSettingsContext.Provider
      value={{
        settings,
      }}
    >
      {children}
    </AppSettingsContext.Provider>
  )
}

export const useAppSettingsProvider = () => useContext(AppSettingsContext)