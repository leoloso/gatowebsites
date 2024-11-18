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
  services: {
    newsletter: {
      formActionURL: string,
      emailFieldName: string,
    }
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
  services: {
    newsletter: {
      formActionURL: "",
      emailFieldName: "",
    }
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
  services,
}: AppConfigProviderInterface) {  
  return (
    <AppConfigContext.Provider
      value={{
        meta,
        emails,
        domains,
        urls,
        services,
      }}
    >
      {children}
    </AppConfigContext.Provider>
  )
}

export const useAppConfigProvider = () => useContext(AppConfigContext)