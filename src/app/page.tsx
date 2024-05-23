
import { GetProducts } from '@/components/get-products'
import { ProductContext } from '@/context/products-context'
import { useContext } from 'react'



export default function Home() {
  const { productsInHomePage } = useContext(ProductContext)

  return (
    <main className="container px-5min-h-screen flex flex-col">
      <div className="grid gap-y-5 grid-cols-2 w-full mt-8">
        <GetProducts products={products} />
      </div>
    </main>
  )
}
