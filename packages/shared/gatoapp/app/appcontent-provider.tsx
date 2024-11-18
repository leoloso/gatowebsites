'use client'

import React from 'react'
import { createContext, useContext } from 'react'
import { BlogPost, DemoPost, Doc, DocTopic, Feature, Page, Snippet } from 'gatoapp/types/types';

type ContextProps = {
  allBlogPosts: BlogPost[],
  allDemoPosts: DemoPost[],
  allDocs: Doc[],
  allDocTopics: DocTopic[],
  allFeatures: Feature[],
  allPages: Page[],
  allSnippets: Snippet[],
}

const AppContentContext = createContext<ContextProps>({
  allBlogPosts: [],
  allDemoPosts: [],
  allDocs: [],
  allDocTopics: [],
  allFeatures: [],
  allPages: [],
  allSnippets: [],
})

export interface AppContentProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppContentProvider({
  children,
  allBlogPosts,
  allDemoPosts,
  allDocs,
  allDocTopics,
  allFeatures,
  allPages,
  allSnippets,
}: AppContentProviderInterface) {  
  return (
    <AppContentContext.Provider
      value={{
        allBlogPosts,
        allDemoPosts,
        allDocs,
        allDocTopics,
        allFeatures,
        allPages,
        allSnippets,
      }}
    >
      {children}
    </AppContentContext.Provider>
  )
}

export const useAppContentProvider = () => useContext(AppContentContext)