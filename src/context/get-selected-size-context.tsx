'use client'

import { ReactNode, createContext, useState } from 'react'

interface SelectedSizeContextProps {
  selectedSize: string | null
  isSizeSelected: boolean
  getSelectedSize: (size: string) => void
}

export const SelectedSizeContext = createContext({} as SelectedSizeContextProps)

interface SizeContextProviderProps {
  children: ReactNode
}

export function SelectedSizeContextProvider({
  children,
}: SizeContextProviderProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const isSizeSelected = Boolean(selectedSize)

  function getSelectedSize(size: string) {
    console.log('aq')
    setSelectedSize(size)
  }

  return (
    <SelectedSizeContext.Provider
      value={{ selectedSize, isSizeSelected, getSelectedSize }}
    >
      {children}
    </SelectedSizeContext.Provider>
  )
}
