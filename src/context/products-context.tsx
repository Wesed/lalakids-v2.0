'use client'

import { ReactNode, createContext, useState } from 'react'

const products = [
  {
    id: 1,
    image: '/img-01.jpg',
    title: 'Camiseta Adidas Branca',
    price: 25.99,
    category: ['camiseta', 'feminina'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 2,
    image: '/img-02.jpg',
    title: 'Camiseta Nike Preta',
    price: 39.99,
    category: ['camiseta', 'masculina'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 3,
    image: '/img-03.jpg',
    title: 'Calça Jeans Skinny',
    price: 19.99,
    category: ['calça', 'feminina'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 4,
    image: '/img-04.jpg',
    title: 'Blusa de Moletom Cinza',
    price: 49.99,
    category: ['moletom', 'unissex'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 5,
    image: '/img-01.jpg',
    title: 'Jaqueta Corta Vento',
    price: 29.99,
    category: ['jaqueta', 'unissex'],
    sizes: ['S', 'M', 'L'],
  },
]

export interface ProductProps {
  id: number
  image: string
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
  const [productsInHomePage, setProductsInHomePage] =
    useState<ProductProps[]>(products)

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
