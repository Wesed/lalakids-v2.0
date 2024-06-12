export async function GET() {
  try {
    if (process.env.NEXT_HYGRAPH_ENDPOINT) {
      const res = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query Products {
              products {
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
        }),
      })

      const { data } = await res.json()

      return Response.json(data)
    } else {
      return Response.json({ message: 'Endpoint nao esta definido' })
    }
  } catch (error) {
    return Response.json({ message: 'Erro ao buscar produtos' })
  }
}
