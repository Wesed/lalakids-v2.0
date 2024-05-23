'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

export default function Product() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const sizes = ['PP', 'P', 'M', 'G', 'GG']

  const isSizeSelected = Boolean(!selectedSize)

  const products = [
    {
      id: 1,
      title: 'Camiseta Masculina Nike',
      image: '/img-1.jpg',
      price: 89.99,
      category: ['Feminina', 'Calças'],
      sizes: ['M', 'G'],
    },
    {
      id: 2,
      title: 'Blusa Feminina Adidas',
      image: '/img-2.jpg',
      price: 89.99,
      category: ['Maculino', 'Calças'],
      sizes: ['P', 'M', 'GG'],
    },
    {
      id: 3,
      title: 'Calça Unissex Puma',
      image: '/img-3.jpg',
      price: 89.99,
      category: ['Feminina', 'Saia'],
      sizes: ['PP', 'M', 'G'],
    },
    {
      id: 4,
      title: 'Shorts Feminino Reebok',
      image: '/img-4.jpg',
      price: 89.99,
      category: ['Masculino', 'Moleton'],
      sizes: ['P', 'G'],
    },
    {
      id: 5,
      title: 'Jaqueta Masculina Under Armour',
      image: '/img-1.jpg',
      price: 89.99,
      category: ['Feminina', 'Calças'],
      sizes: ['M', 'GG'],
    },
    {
      id: 6,
      title: 'Legging Feminina Asics',
      image: '/img-2.jpg',
      price: 89.99,
      category: ['Maculino', 'Calças'],
      sizes: ['PP', 'P', 'M'],
    },
    {
      id: 7,
      title: 'Moletom Unissex Champion',
      image: '/img-3.jpg',
      price: 89.99,
      category: ['Feminina', 'Saia'],
      sizes: ['G', 'GG'],
    },
    {
      id: 8,
      title: 'Polo Masculino Lacoste',
      image: '/img-4.jpg',
      price: 89.99,
      category: ['Masculino', 'Moleton'],
      sizes: ['P', 'M', 'G'],
    },
  ]

  function sendProductDetailsToWhatsApp() {
    const url = `https://api.whatsapp.com/send?phone=5519992054089&text=Olá, gostaria de comprar o produto: ${products[2].title}, tamanho: ${selectedSize}`
    window.open(url, '_blank')
  }

  return (
    <div className="flex flex-col container p-0">
      <div className="">
        <Image
          src={products[2].image}
          alt="product image"
          width={320}
          height={400}
          className="size-full rounded-md"
          quality={100}
        />
      </div>

      <div className="px-5 mt-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">{products[2].title}</h2>
          <p className="text-zinc-900 text-sm text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias
            sit cum ut! Modi esse animi ex nostrum perspiciatis harum minus,
            tenetur porro, corporis nihil non? Excepturi quo aliquam molestiae.{' '}
          </p>
        </div>
        <span className="text-sm">
          <span className="font-semibold text-xl">R$ {products[2].price}</span>{' '}
          à vista
        </span>

        <div className="flex gap-2 w-full flex-col">
          <span className="font-semibold text-sm">Escolha o tamanho:</span>
          <div className="flex gap-5">
            {sizes.map((size) => (
              <Button
                disabled={products[2].sizes.includes(size)}
                onClick={() => {
                  setSelectedSize(size)
                }}
                variant="outline"
                key={size}
                className=""
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <Button
          disabled={isSizeSelected}
          onClick={sendProductDetailsToWhatsApp}
          className="bg-emerald-400 font-semibold transition-colors hover:bg-emerald-500"
        >
          Comprar agora
        </Button>
      </div>
    </div>
  )
}
