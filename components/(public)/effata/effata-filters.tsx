import CategorieButtonFilter from '@/components/common/filters/categorie-button-filter';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useEffataList } from '@/features/effata/hooks/useEffataList';
import { Button as ButtonUI } from "@heroui/react";

export default function EffataFilters() {
  const { filters, onFilterChange, categories, selectedCategory, subCategories, onSubCategoryChange } = useEffataList();
  return (
    <div className="flex flex-col gap-4 mb-8 lg:max-w-2/3 xl:max-w-1/2">
      <div className="flex-1 flex items-center w-full gap-4">
        <Input
          type="search"
          value={filters.titre || ''}
          onChange={(e) => onFilterChange('titre', e.target.value)}
          placeholder="Rechercher un mot-clé"
          className="rounded-full focus:outline-none focus-visible:ring-2 focus-within:ring-primary"
        />
        <ButtonUI color="primary" className="px-8 py-3 rounded-full">
          Rechercher
        </ButtonUI>
      </div>
      <div>
        <h3 className='text-sm text-[#595959] mb-4 uppercase font-bold'>
          Catégories:
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <CategorieButtonFilter
              key={category.id}
              category={{
                id: category.id,
                nom: category.nom
              }}
              onPress={() => {
                if (filters.categorie_id === category.id) {
                  return onFilterChange('categorie_id', '');
                }
                onFilterChange('categorie_id', category.id)
              }}
              isSelected={selectedCategory?.id === category.id}
            />
          ))}
        </div>
      </div>
      <Select
        value={subCategories.find(subCat => subCat.id === filters.categorie_id)?.id || ''}
        onValueChange={(value) => onSubCategoryChange(value)}
      >
        <SelectTrigger className="rounded-full max-w-[380px] w-full text-left text-sm focus:outline-none">
          <SelectValue placeholder="Choisir une sous-catégorie" />
        </SelectTrigger>
        <SelectContent>
          {subCategories.map((enfant) => (
            <SelectItem key={enfant.id} value={enfant.id}>{enfant.nom}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
