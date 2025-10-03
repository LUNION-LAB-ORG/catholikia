"use client";
import {mapMarkers} from "@/app/api/contact";
import {SearchForm} from "@/components/ui/search-form";
import {DirectoryPagination} from "./directory-pagination";
import MapView from "./map-view";
import {useDioceseList} from "@/features/diocese/hooks/useDiocesesList";
import Section from "@/components/primitives/Section";
import {ContactCard} from "@/components/(public)/annuaire/contact-card";
import LoadingIndicator from "@/components/common/LoadingIndicator";

const AnnuaireDioceses = () => {
	const {dioceses, meta, isLoading, filters, onFilterChange} = useDioceseList();

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8">
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className="text-2xl font-bold text-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
						Dans cet annuaire, retrouvez les coordonnées des responsables de
						catéchèse et catéchuménat dans les diocèses ivoiriens.
					</h1>
				</div>

				{/* Search Form */}
				<SearchForm filters={filters} onSearch={onFilterChange}/>

				{/* Main Content */}
				<Section className="grid grid-cols-1 lg:grid-cols-3 gap-8 custom-container">
					{/* Map Column */}
					<div className="lg:col-span-1">
						<MapView markers={mapMarkers}/>
					</div>

					{/* Contacts Grid */}
					<div className="lg:col-span-2">
						{!isLoading ? (
							<>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
									{dioceses.map((diocese) => (
										<ContactCard key={diocese.id} diocese={diocese}/>
									))}
								</div>

								{/* Pagination */}
								{meta && meta.last_page > 1 && (
									<DirectoryPagination
										currentPage={meta.current_page}
										totalPages={meta.last_page}
										onPageChange={(pge) => onFilterChange({page: pge})}
									/>
								)}
							</>
						) : (
							<LoadingIndicator/>
						)}
						{dioceses.length === 0 && !isLoading && (
							<p className="text-center text-gray-500">Aucun diocèse trouvé.</p>
						)}
					</div>
				</Section>
			</div>
		</div>
	);
};

export default AnnuaireDioceses;
