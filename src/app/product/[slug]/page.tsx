import { api } from '@/data/api'
import Image from 'next/image'
import { SizeContainer } from './size-container'
import { ProductProps } from '@/context/products-context'
import { SelectedSizeContextProvider } from '@/context/get-selected-size-context'
import { ActionButton } from './components/action-button'

async function getProduct(slug: string): Promise<ProductProps> {
  const res = await api(`/products/${slug}`, {
    cache: 'no-store',
    next: {
      // revalidate: 60 * 60, // 1 hour
    },
  })
  const product: ProductProps = await res.json()
  return product
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  return (
    <div className="flex flex-col container p-0">
      <div className="">
        <Image
          src={product.image}
          alt="product image"
          width={320}
          height={400}
          className="size-full rounded-md"
          quality={100}
        />
      </div>

      <div className="px-5 mt-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">{product.title}</h2>
          <p className="text-zinc-900 text-sm text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias
            sit cum ut! Modi esse animi ex nostrum perspiciatis harum minus,
            tenetur porro, corporis nihil non? Excepturi quo aliquam molestiae.{' '}
          </p>
        </div>
        <span className="text-sm">
          <span className="font-semibold text-xl">R$ product.price</span> à
          vista
        </span>
        <SelectedSizeContextProvider>
          <SizeContainer availableSizes={product.sizes} />
          <ActionButton productTitle={product.title} />
        </SelectedSizeContextProvider>
      </div>
    </div>
  )
}
