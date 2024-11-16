'use client'

import React from 'react'
import { createContext, useContext } from 'react'
import { StaticImageData } from 'next/image'
import LogoImg from '@gato/public/assets/Gato-logo-suki-rectangular.png'

type ContextProps = {
  footerMenu: React.ReactNode,
  logoImage: StaticImageData,
}

const AppComponentContext = createContext<ContextProps>({
  footerMenu: <div></div>,
  logoImage: LogoImg,
})

export default function AppComponentProvider({
  children,
  footerMenu,
  logoImage,
}: {
  children: React.ReactNode,
  footerMenu: React.ReactNode,
  logoImage: StaticImageData,
}) {  
  return (
    <AppComponentContext.Provider value={{ footerMenu, logoImage }}>
      {children}
    </AppComponentContext.Provider>
  )
}

export const useAppComponentProvider = () => useContext(AppComponentContext)