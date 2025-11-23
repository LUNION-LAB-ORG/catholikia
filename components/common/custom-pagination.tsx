import {ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface NewsPaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const CustomPagination = ({
	                                 currentPage,
	                                 totalPages,
	                                 onPageChange
                                 }: NewsPaginationProps) => {
	const pages = Array.from({length: totalPages}, (_, i) => i + 1);

	return (
		<div className="flex items-center justify-center gap-2 mt-8">
			{pages.map((page) => (
				<Button
					key={page}
					variant={currentPage === page ? "default" : "ghost"}
					size="sm"
					className={cn(
						"w-10 h-10 rounded-full cursor-pointer font-bold",
						currentPage === page
							? "bg-primary hover:bg-news-pagination-yellow text-white"
							: "text-muted-foreground hover:bg-secondary/50 hover:text-white",
					)}
					onClick={() => onPageChange(page)}
				>
					{page}
				</Button>
			))}

			<Button
				variant="ghost"
				size="sm"
				className="w-10 h-10 rounded-full text-muted-foreground  hover:bg-secondary/50 hover:text-white cursor-pointer"
				onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<ChevronRight className="h-4 w-4"/>
			</Button>
		</div>
	);
};