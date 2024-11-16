'use client'

import React from 'react'
import { createContext, useContext } from 'react'
import { StaticImageData } from 'next/image'
import LogoImg from '@gato/public/assets/Gato-logo-suki-rectangular.png'

type ContextProps = {
  footer: {
    menu: React.ReactNode,
  },
  header: {
    logoImage: StaticImageData,
    menu: React.ReactNode,
    mobileMenu: React.ReactNode,
  },
}

const AppComponentContext = createContext<ContextProps>({
  footer: {
    menu: <div></div>,
  },
  header: {
    logoImage: LogoImg,
    menu: <div></div>,
    mobileMenu: <div></div>,
  },
})

export interface AppComponentProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppComponentProvider({
  children,
  footer,
  header,
}: AppComponentProviderInterface) {  
  return (
    <AppComponentContext.Provider value={{ footer, header }}>
      {children}
    </AppComponentContext.Provider>
  )
}

export const useAppComponentProvider = () => useContext(AppComponentContext)