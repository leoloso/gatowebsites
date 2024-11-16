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
  domains: {
    cdn: string,
  },
}

const AppConfigContext = createContext<ContextProps>({
  meta: {
    name: "",
  },
  emails: {
    info: ""
  },
  domains: {
    cdn: ""
  },
})

export interface AppConfigProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppConfigProvider({
  children,
  meta,
  emails,
  domains,
}: AppConfigProviderInterface) {  
  return (
    <AppConfigContext.Provider
      value={{
        meta: meta,
        emails: emails,
        domains: domains,
      }}
    >
      {children}
    </AppConfigContext.Provider>
  )
}

export const useAppConfigProvider = () => useContext(AppConfigContext)