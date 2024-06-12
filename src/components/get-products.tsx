'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  id: string
  images: {
    url: string
  }[]
  title: string
  price: number
  category: string[]
  sizes: string[]
}

interface ProductsProps {
  products: ProductProps[]
}

export function GetProducts({ products }: ProductsProps) {
  return (
    <>
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.title}
          className="w-full flex flex-col transition-all hover:scale-105"
        >
          <div className="rounded-md overflow-hidden">
            <Image
              src={product.images[0].url}
              alt={product.title}
              width={160}
              height={200}
              className="size-full"
            />
          </div>
          <div className="px-3 text-center flex flex-col w-full gap-2">
            <span className="w-full">{product.title}</span>
            <span className="font-bold text-sm">R$ {product.price}</span>
          </div>
        </Link>
      ))}
    </>
  )
}
