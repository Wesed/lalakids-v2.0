export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  const productID = params.slug

  if (!process.env.NEXT_HYGRAPH_ENDPOINT) {
    throw new Error('NEXT_HYGRAPH_ENDPOINT NOT FOUND')
  }

  try {
    const res = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            query Product($productID: ID!) {
              product(where: {id: $productID} ) {
                createdAt
                id
                price
                publishedAt
                title
                updatedAt
                sizes
                images {
                  url
                }
                categorias
              }
            }
          `,
        variables: {
          productID,
        },
      }),
    })

    const { data } = await res.json()

    const { product } = data

    if (!product) {
      throw new Error(`O Produto com ID ${productID} não foi encontrado.`)
    }

    return Response.json(product)
  } catch (error) {
    console.log('/product/id error: ', error)
  }
}
