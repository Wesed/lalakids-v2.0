import { GetProducts } from '@/components/get-products'
import { ProductProps } from '@/context/products-context'
import { api } from '@/data/api'

async function getProducts(): Promise<ProductProps[]> {
  const res = await api('/products', {
    cache: 'no-store',
  })

  const { products } = await res.json()

  return products
}

export default async function Home() {
  const productsInHomePage = await getProducts()

  return (
    <main className="container px-5min-h-screen flex flex-col">
      <div className="grid gap-y-5 grid-cols-2 w-full mt-8">
        <GetProducts products={productsInHomePage} />
      </div>
    </main>
  )
}
