'use client'

import React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  config: {
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
  },  
}

const AppConfigContext = createContext<ContextProps>({
  config: {
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
  }
})

export interface AppConfigProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppConfigProvider({
  children,
  config,
}: AppConfigProviderInterface) {  
  return (
    <AppConfigContext.Provider
      value={{
        config,
      }}
    >
      {children}
    </AppConfigContext.Provider>
  )
}

export const useAppConfigProvider = () => useContext(AppConfigContext)