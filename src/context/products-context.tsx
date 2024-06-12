'use client'

import { ReactNode, createContext, useState } from 'react'

export interface ProductProps {
  id: string
  images: {
    url: string
  }[]
  title: string
  price: number
  category: string[]
  sizes: string[]
}

interface ProductContextProps {
  productsInHomePage: ProductProps[]
  updateProductListInHomePage: (products: ProductProps[]) => void
}

export const ProductContext = createContext({} as ProductContextProps)

interface productsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: productsContextProviderProps) {
  const [productsInHomePage, setProductsInHomePage] = useState<ProductProps[]>(
    [],
  )

  function updateProductListInHomePage(products: ProductProps[]) {
    setProductsInHomePage(products)
  }

  return (
    <ProductContext.Provider
      value={{ productsInHomePage, updateProductListInHomePage }}
    >
      {children}
    </ProductContext.Provider>
  )
}
