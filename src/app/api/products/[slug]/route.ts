import { ProductProps } from '@/context/products-context'
import data from '../products-data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const productID = parseInt(params.slug)

  const product = data.products.find(
    (product: ProductProps) => product.id === productID,
  )

  if (!product) {
    throw new Error(`O Produto com ID ${productID} não foi encontrado.`)
  }

  return Response.json(product)
}
