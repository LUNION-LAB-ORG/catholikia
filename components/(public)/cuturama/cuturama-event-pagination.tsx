import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function EventPagination({
    currentPage,
    totalPages,
    onPageChange,
}: EventPaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 mt-10">
            <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <ChevronLeft className="size-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="icon"
                    className={cn(
                        "rounded-full",
                        page === currentPage
                            ? "bg-[#fe0000] hover:bg-red-700 border-[#fe0000] text-white"
                            : "hover:border-[#fe0000] hover:text-[#fe0000]"
                    )}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </Button>
            ))}

            <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <ChevronRight className="size-4" />
            </Button>
        </div>
    );
}
