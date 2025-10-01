import { Loader2 } from 'lucide-react'
import React from 'react'

export default function LoadingIndicator() {
  return (
    <span className="inline-flex gap-1 items-center py-8 w-full justify-center">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Chargement...
    </span>
  )
}
