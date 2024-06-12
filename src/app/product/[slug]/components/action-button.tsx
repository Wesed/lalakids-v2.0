'use client'

import { Button } from '@/components/ui/button'
import { SelectedSizeContext } from '@/context/get-selected-size-context'
import { useContext } from 'react'

interface ActionButtonProps {
  productTitle: string
}

export function ActionButton({ productTitle }: ActionButtonProps) {
  const { isSizeSelected, selectedSize } = useContext(SelectedSizeContext)

  console.log('oii', isSizeSelected)

  function sendProductDetailsToWhatsApp() {
    const url = `https://api.whatsapp.com/send?phone=5519992054089&text=Olá, gostaria de comprar o produto: ${productTitle}, tamanho: ${selectedSize}`
    window.open(url, '_blank')
  }

  return (
    <Button
      disabled={!isSizeSelected}
      onClick={sendProductDetailsToWhatsApp}
      className="bg-emerald-400 font-semibold transition-colors hover:bg-emerald-500"
    >
      Comprar agora
    </Button>
  )
}
