"use client";
import React from "react";
import Section from "@/components/primitives/Section";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Title from "@/components/primitives/Title";

const CarouselActualite = () => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);

	React.useEffect(() => {
		if (!api) return;

		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<Section className="flex flex-col overflow-hidden">
			<div className="flex flex-col sm:flex-row justify-between items-center mb-4">
				<Title>DERNIÈRES NOUVELLES</Title>
				<div className="flex justify-start sm:justify-end overflow-hidden space-x-2 mt-2 sm:mt-0">
					{Array.from({length: 3}).map((_, index) => (
						<button
							key={index}
							onClick={() => api?.scrollTo(index)}
							className={cn(
								"w-2.5 h-2.5 rounded-full cursor-pointer p-1.5 bg-white/50 border",
								{
									"bg-primary": current === index + 1,
								}
							)}
						/>
					))}
				</div>
			</div>

			<Carousel setApi={setApi} className="w-full">
				<CarouselContent className="gap-4">
					{Array.from({length: 3}).map((_, index) => (
						<CarouselItem
							key={index}
							className="relative w-full sm:w-[48%] lg:w-full rounded-2xl overflow-hidden" >
							<Image
								src={`/assets/carousel-img/event${index + 1}.png`}
								alt="item-image"
								className="w-full h-64 sm:h-72 lg:h-96 xl:h-[550px] overflow-hidden object-cover rounded-2xl"
								width={400}
								height={400}
							/>

							<div
								className="absolute bottom-0 w-full bg-gray-200/90 overflow-hidden bg-opacity-90 px-3 py-2 sm:px-6 sm:py-3 lg:px-6 lg:py-6  rounded-b-2xl">
								<div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center">
									<div className="px-2 py-1 bg-black text-white text-sm sm:text-base rounded">
										3 juin 2025
									</div>
									<div className="text-sm sm:text-base">
										Le Pape François appelle à une mobilisation mondiale pour
										lapaix en Afrique
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</Section>
	);
};

export default CarouselActualite;
