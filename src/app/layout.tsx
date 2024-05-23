import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { ProductsContextProvider } from '@/context/products-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lalakids & Teen',
  description: 'Moda infanto juvenil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductsContextProvider>
          <Header />
          {children}
        </ProductsContextProvider>
      </body>
    </html>
  )
}
