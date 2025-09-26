import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      department: (formData.get("department") as string) || "",
      name: (formData.get("name") as string) || "",
      phone: (formData.get("phone") as string) || "",
      region: (formData.get("region") as string) || "",
    };
    onSearch(filters);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card p-6 rounded-lg shadow-sm border"
    >
      <div className="flex flex-col gap-4 mb-4">
        {/* Ligne de recherche principale */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Champ recherche */}
          <div className="w-full sm:w-[80%]">
            <Input
              id="name"
              name="name"
              placeholder="Rechercher par nom, diocèse ou ville"
              className="w-full bg-[#FAFAFA] rounded-2xl"
            />
          </div>

          {/* Bouton recherche */}
          <div className="w-full sm:w-auto">
            <Button
              type="submit"
              className="w-full sm:w-auto bg-primary cursor-pointer hover:bg-primary/90 font-bold rounded-2xl text-primary-foreground px-8 py-2"
            >
              RECHERCHER
            </Button>
          </div>
        </div>

        {/* Filtres supplémentaires */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Région */}
          <div className="w-full sm:w-[50%]">
            <Select name="region">
              <SelectTrigger className="w-full rounded-2xl bg-[#FAFAFA]">
                <SelectValue placeholder="Sous Région" />
              </SelectTrigger>
              <SelectContent className="w-full rounded-2xl">
                <SelectItem value="all">Toutes les régions</SelectItem>
                <SelectItem value="ouest">Ouest</SelectItem>
                <SelectItem value="centre">Centre</SelectItem>
                <SelectItem value="est">Est</SelectItem>
                <SelectItem value="nord">Nord</SelectItem>
                <SelectItem value="sud">Sud</SelectItem>
              </SelectContent>
            </Select>
          </div>
 <div className="w-full sm:w-[40%]">
            <Select name="sort">
              <SelectTrigger className="w-full rounded-2xl bg-[#FAFAFA]">
                <SelectValue placeholder="Departement" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectItem value="az">Abidjan</SelectItem>
                <SelectItem value="za">Bouake</SelectItem>
                <SelectItem value="za">Yamoussoukrou</SelectItem>
                <SelectItem value="za">Daloa</SelectItem>
                <SelectItem value="za">San-pedro</SelectItem>
                 <SelectItem value="za">Korhogo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Tri */}
          <div className="w-full sm:w-[40%]">
            <Select name="sort">
              <SelectTrigger className="w-full rounded-2xl bg-[#FAFAFA]">
                <SelectValue placeholder="Nom (A-Z)" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectItem value="az">Nom (A-Z)</SelectItem>
                <SelectItem value="za">Nom (Z-A)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </form>
  );
};
