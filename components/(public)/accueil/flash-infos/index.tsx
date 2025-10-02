"use client";

import React from 'react';
import {flashInfosFakeData} from "@/app/api/flash-infos";
import ZoneDefilante from "@/components/(public)/accueil/flash-infos/zone-defilante";

function FlashInfo() {
	const activeFlashInfos = flashInfosFakeData;

	if (activeFlashInfos.length === 0) {
		return null; // Pas d'infos flash actives
	}

	return (
		<div className="bg-[#151515] text-white py-1 md:py-2 overflow-hidden">
			<div className="custom-container">
				<div
					className="ml-1 sm:ml-2 md:ml-3 text-xs sm:text-sm md:text-base lg:text-lg relative h-6 sm:h-10 overflow-hidden w-full">
					<ZoneDefilante flashInfos={activeFlashInfos} />
				</div>
			</div>
		</div>
	);
}

export default FlashInfo;