'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

type Content = {
  home: {
    title: string
    description: string
  }
  about: {
    content: string
  }
  services: Array<{
    title: string
    description: string
  }>
}

type ContentContextType = {
  content: Content
  updateContent: (newContent: Content) => void
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<Content>({
    home: {
      title: "Launch Your Tech Career with Real-World Experience",
      description: "Gain valuable skills through internships and project-based learning"
    },
    about: {
      content: "TechTrain is a leading software consulting company dedicated to nurturing the next generation of tech talent..."
    },
    services: [
      { title: "Web Technologies", description: "Master modern web development frameworks and tools" },
      { title: "Artificial Intelligence", description: "Dive into machine learning and AI applications" },
      { title: "Data Analytics", description: "Learn to extract insights from complex datasets" },
      { title: "Business Intelligence", description: "Develop skills in data visualization and reporting" }
    ]
  })

  const updateContent = (newContent: Content) => {
    setContent(newContent)
  }

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  )
}