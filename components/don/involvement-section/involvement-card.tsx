"use client";
import React from 'react';
import Image from "next/image";
import {Button} from "@heroui/react";

type Props = {
	title: string;
	imageSrc: string;
	description: string;
	ctaMessage?: string;
	handleClick?: () => void;
}

function InvolvementCard({title, imageSrc, description, ctaMessage, handleClick}:Props) {
	return (
		<div className="bg-gray-50 rounded-3xl p-6 text-center flex flex-col justify-between">
			<div>
				<h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
					{title}
				</h2>

				{/* Image */}
				<div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
					<Image
						src={imageSrc}
						alt={title}
						width={160}
						height={160}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>

			<p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
				{description}
			</p>

			<div>
				<Button variant="solid" color="primary" onPress={handleClick}>
					{ctaMessage || "En savoir plus"}
				</Button>
			</div>
		</div>
	);
}

export default InvolvementCard;