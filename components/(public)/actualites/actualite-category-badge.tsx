import React from 'react';
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

function CategoryBadge({category, className}: { category: string, className: string }) {
	return (
		<Badge className={cn(
			"first-letter:capitalize bg-white rounded-2xl p-2 text-xs font-semibold",
			className
		)}>
			{category}
		</Badge>
	);
}

export default CategoryBadge;