import { cn } from '@/lib/utils';
import { Button } from '@heroui/button'
import React from 'react'

export default function ShareButton({ className }: { className?: string }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      });
    }
  }

  return (
    <Button variant="bordered" className={cn("rounded-full uppercase text-[#1D1D1D] font-bold border", className)} onPress={handleShare}>
      Partager
    </Button>
  )
}
