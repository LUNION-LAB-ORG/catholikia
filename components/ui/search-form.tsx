import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Section from "../primitives/Section";
import {IDioceseParams} from "@/features/diocese/types/diocese.type";

interface SearchFormProps {
	filters?: any;
	onSearch: (filters: IDioceseParams) => void;
}

export const SearchForm = ({filters, onSearch}: SearchFormProps) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const filters: IDioceseParams = {
			nom: (formData.get("nom") as string) || "",
			region: (formData.get("region") as string) || "",
		};
		onSearch(filters);
	};

	return (
		<Section size="none" className="custom-container">
			<form
				onSubmit={handleSubmit}
				className="bg-card p-6 rounded-lg shadow-sm border"
			>
				<div className="flex flex-col gap-4 mb-4">
					{/* Ligne de recherche principale */}
					<div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
						{/* Champ recherche*/}
						<div className="w-full sm:w-[80%]">
							<Input
								id="name"
								name="name"
								value={filters.nom}
								onChange={(e) => onSearch({nom: e.target.value})}
								placeholder="Rechercher par nom de diocèse"
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
							<Select name="region" value={filters.region} onValueChange={(value) => onSearch({region: value})}>
								<SelectTrigger className="w-full rounded-2xl bg-[#FAFAFA]">
									<SelectValue placeholder="Sous Région"/>
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
							<Select name="ville" value={filters.ville} onValueChange={(value) => onSearch({ville: value})}>
								<SelectTrigger className="w-full rounded-2xl bg-[#FAFAFA]">
									<SelectValue placeholder="Departement"/>
								</SelectTrigger>
								<SelectContent className="w-full">
									<SelectItem value="abidjan">Abidjan</SelectItem>
									<SelectItem value="bouake">Bouake</SelectItem>
									<SelectItem value="yamoussoukrou">Yamoussoukrou</SelectItem>
									<SelectItem value="daloa">Daloa</SelectItem>
									<SelectItem value="san-pedro">San-pedro</SelectItem>
									<SelectItem value="korhogo">Korhogo</SelectItem>
								</SelectContent>
							</Select>
						</div>
						{/* Tri */}
						<div className="w-full sm:w-[40%]">
							<Select name="sort">
								<SelectTrigger className="w-full rounded-2xl bg-[#FAFAFA]">
									<SelectValue placeholder="Nom (A-Z)"/>
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
		</Section>
	);
};
