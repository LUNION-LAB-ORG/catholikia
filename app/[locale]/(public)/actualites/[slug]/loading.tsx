import React from 'react';
import Content from "@/components/primitives/Content";
import {Loader2} from "lucide-react";

function ActualiteDetailsLoadingSkeleton() {
	return (
		<Content fullWidth className="h-screen flex items-center justify-center mt-[4rem]">
			<div className="flex flex-col items-center">
				<Loader2 className="animate-spin h-10 w-10 text-gray-600"/>
				<p className="mt-4 text-gray-600">Chargement de l'actualité...</p>
			</div>
		</Content>
	);
}

export default ActualiteDetailsLoadingSkeleton;