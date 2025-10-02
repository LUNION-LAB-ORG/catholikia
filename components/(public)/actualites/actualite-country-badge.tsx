import React from 'react';
import {Badge} from "@/components/ui/badge";
import {Globe} from "lucide-react";
import {cn} from "@/lib/utils";

function ActualiteCountryBadge({country,className}: { country: string, className?: string }) {
	return (
		<Badge className={cn("bg-[#0088FF] text-[#FBFAF9] text-xs", className)}>
			<Globe className="mr-2"/>
			<span>{country}</span>
		</Badge>
	);
}

export default ActualiteCountryBadge;