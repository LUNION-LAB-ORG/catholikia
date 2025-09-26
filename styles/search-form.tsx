import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  department: string;
  name: string;
  phone: string;
  region: string;
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const filters: SearchFilters = {
      department: formData.get('department') as string || '',
      name: formData.get('name') as string || '',
      phone: formData.get('phone') as string || '',
      region: formData.get('region') as string || '',
    };
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label htmlFor="department" className="block text-sm font-medium text-muted-foreground mb-2">
            Rechercher par département ou ville
          </label>
          <Input
            id="department"
            name="department"
            placeholder="Département"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
            Nom
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Nom"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
            Téléphone
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="Téléphone"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-muted-foreground mb-2">
            Sous Région
          </label>
          <Select name="region">
            <SelectTrigger>
              <SelectValue placeholder="Sous Région" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les régions</SelectItem>
              <SelectItem value="ouest">Ouest</SelectItem>
              <SelectItem value="centre">Centre</SelectItem>
              <SelectItem value="est">Est</SelectItem>
              <SelectItem value="nord">Nord</SelectItem>
              <SelectItem value="sud">Sud</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2 font-medium">
          <Search className="w-4 h-4 mr-2" />
          RECHERCHER
        </Button>
      </div>
    </form>
  );
};