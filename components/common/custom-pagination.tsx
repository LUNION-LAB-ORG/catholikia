import {Pagination} from "@heroui/react";

interface NewsPaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const CustomPagination = ({currentPage, totalPages, onPageChange}: NewsPaginationProps) => {
	if (totalPages <= 1) {
		return null;
	}
	return (
		<div className="flex items-center justify-center gap-2 mt-8">
			<Pagination
				showControls
				variant="faded"
				total={totalPages}
				initialPage={currentPage}
				onChange={onPageChange}
			/>
		</div>
	);
};