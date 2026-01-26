"use client";

import Section from "@/components/primitives/Section";
import TemoignagesHeader from "./temoignages-header";
import {TestimonialCard} from "./testimonial-card";
import {TestimonialModal} from "./testimonial-modal";
import {useVieDeFoiList} from "@/features/vie-de-foi/hooks/useVieDeFoiList";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import {CustomPagination} from "@/components/common/custom-pagination";

export const TestimonialsSection = () => {
	const {
		temoignages: testimonials,
		meta,
		isLoading,
		error,
		filters,
		onFilterChange,
		handleTestimonialClick,
		actions
	} = useVieDeFoiList();


	return (
		<Section className="custom-container">
			{!isLoading ? (
				<>
					<TemoignagesHeader
						filters={filters}
						onFilterChange={onFilterChange}
						isLoading={isLoading}
						meta={meta}
					/>

					{/* Liste des témoignages */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{testimonials.map((testimonial) => (
							<TestimonialCard
								key={testimonial.id}
								testimonial={testimonial}
								onClick={() => handleTestimonialClick(testimonial)}
							/>
						))}
					</div>

					{/* Pagination avec numéros */}
					<CustomPagination
						currentPage={meta?.current_page || 1}
						totalPages={meta?.last_page || 1}
						onPageChange={(page) => onFilterChange({page})}
					/>

					{/* Modal */}
					<TestimonialModal
						testimonial={actions.selectedTestimonial}
						onClose={() => actions.setSelectedTestimonial(null)}
					/>
				</>
			) : <LoadingIndicator/>}
		</Section>
	);
};
