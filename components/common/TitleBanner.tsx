"use client";

import React from "react";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface TitleBannerProps {
	title?: string;
	className?: string;
	backgroundImage?: string;
	centerImage?: string;
}

const TitleBanner: React.FC<TitleBannerProps> = ({
	                                                 title,
	                                                 className = "",
	                                                 backgroundImage,
	                                                 centerImage,
                                                 }) => {

	return (
		<div className={`w-full ${className}`}>
			<div
				className="relative w-full min-h-screen
        bg-no-repeat bg-cover bg-top flex flex-col items-center justify-center overflow-hidden"
				style={{
					backgroundImage: `url(${backgroundImage || "/assets/don/banner.jpg"})`,
				}}
			>
				{/* Image centrée */}
				{centerImage && (
					<div className="mb-4 z-10">
						<Image
							src={centerImage}
							alt={title || "center image"}
							width={100}
							height={100}
							className="object-cover sm:w-[120px] sm:h-[120px]"
						/>
					</div>
				)}

				{/* Title */}
				{title && (
					<h1
						className={cn("text-2xl sm:text-3xl md:text-4xl lg:text-6xl",
							"font-bold text-white z-10 px-4 max-w-lg",
							"text-center lg:absolute lg:top-65 lg:left-20",
							"border-4 p-2 font-bebas uppercase")}
					>
						{title}
					</h1>
				)}
			</div>
		</div>
	);
};

export default TitleBanner;
