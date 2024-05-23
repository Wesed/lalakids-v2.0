import { Search } from 'lucide-react'
import { Input } from './ui/input'

export function SearchBar() {
  
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

  return (
    <div className="w-full relative flex">
      <Search className="top-2 right-2 absolute size-5 stroke-zinc-400" />
      <Input className="flex-1 bg-zinc-500/10" placeholder="O que procura?" />
    </div>
  )
}
