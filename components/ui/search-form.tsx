import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Section from "../primitives/Section";

interface SearchFormProps {
	filters?: any;
	onSearch: (query:string) => void;
}

export const SearchForm = ({filters, onSearch}: SearchFormProps) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		onSearch(formData.get("nom") as string);
	};

	return (
		<Section size="none" className="custom-container">
			<form
				onSubmit={handleSubmit}
				className="bg-card p-6 rounded-lg border"
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
								onChange={(e) => onSearch(e.target.value)}
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
				</div>
			</form>
		</Section>
	);
};
