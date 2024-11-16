'use client'

import React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  footerMenu: React.ReactNode
}

const AppComponentContext = createContext<ContextProps>({
  footerMenu: <div></div>
})

export default function AppComponentProvider({
  children,
  footerMenu,
}: {
  children: React.ReactNode,
  footerMenu: React.ReactNode
}) {  
  return (
    <AppComponentContext.Provider value={{ footerMenu }}>
      {children}
    </AppComponentContext.Provider>
  )
}

export const useAppComponentProvider = () => useContext(AppComponentContext)