'use client'

import React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  meta: {
    name: string,
  },
  emails: {
    info: string,
  },
}

const AppConfigContext = createContext<ContextProps>({
  meta: {
    name: "",
  },
  emails: {
    info: ""
  },
})

export interface AppConfigProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppConfigProvider({
  children,
  meta,
  emails,
}: AppConfigProviderInterface) {  
  return (
    <AppConfigContext.Provider
      value={{
        meta: meta,
        emails: emails,
      }}
    >
      {children}
    </AppConfigContext.Provider>
  )
}

export const useAppConfigProvider = () => useContext(AppConfigContext)