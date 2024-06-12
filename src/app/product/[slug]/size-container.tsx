'use client'

import { Button } from '@/components/ui/button'
import { SelectedSizeContext } from '@/context/get-selected-size-context'
import { useContext } from 'react'

interface SizeContainerProps {
  availableSizes: string[]
}

export function SizeContainer({ availableSizes }: SizeContainerProps) {
  const { getSelectedSize } = useContext(SelectedSizeContext)
  const allSizes = ['PP', 'P', 'M', 'G', 'GG']

  return (
    <div className="flex gap-2 w-full flex-col">
      <span className="font-semibold text-sm">Escolha o tamanho:</span>
      <div className="flex gap-5">
        {allSizes.map((size) => (
          <Button
            disabled={availableSizes.includes(size)}
            onClick={() => {
              getSelectedSize(size)
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
  )
}
