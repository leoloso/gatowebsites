'use client'

import React from 'react'
import { createContext, useContext } from 'react'

type ContextProps = {
  footerMenu: React.ReactNode
}

const FooterContext = createContext<ContextProps>({
  footerMenu: <div></div>
})

export default function FooterProvider({
  children,
  footerMenu,
}: {
  children: React.ReactNode,
  footerMenu: React.ReactNode
}) {  
  return (
    <FooterContext.Provider value={{ footerMenu }}>
      {children}
    </FooterContext.Provider>
  )
}

export const useFooterProvider = () => useContext(FooterContext)