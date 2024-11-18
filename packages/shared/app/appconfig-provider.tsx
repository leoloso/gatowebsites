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
  urls: {
    instawpSandboxDemo: string,
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
  urls: {
    instawpSandboxDemo: "",
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
  urls,
}: AppConfigProviderInterface) {  
  return (
    <AppConfigContext.Provider
      value={{
        meta: meta,
        emails: emails,
        domains: domains,
        urls: urls,
      }}
    >
      {children}
    </AppConfigContext.Provider>
  )
}

export const useAppConfigProvider = () => useContext(AppConfigContext)