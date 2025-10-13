import { Button } from '@/components/ui/button';
import { IEffataCategorie } from '@/features/effata/types/effata.type';
import { cn } from '@/lib/utils';
import React from 'react'

type CategorieButtonFilterProps = {
  category: { id: string; nom: string };
  onPress: () => void;
  isSelected: boolean;
}

export default function CategorieButtonFilter({
  category,
  onPress,
  isSelected
}: CategorieButtonFilterProps) {
  return (
    <Button
      key={category.id}
      className={cn('rounded-full cursor-pointer text-xs', isSelected ? 'bg-primary' : 'bg-[#EEEEEE] text-[#151515]')}
      onClick={onPress}
    >
      {category.nom}
    </Button>
  )
}
