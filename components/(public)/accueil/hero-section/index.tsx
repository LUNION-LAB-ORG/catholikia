import React from 'react';
import HeroShortcut from "@/components/(public)/accueil/hero-section/hero-shortcut";
import {IconBible, IconCalendarWeekFilled, IconGiftFilled, IconPray} from "@tabler/icons-react";

const shortcuts = [
	{
		icon: <IconPray size={32} stroke={3} color="white"/>,
		label: "demandes",
		url: "/demandes"
	},
	{
		icon: <IconGiftFilled size={32} stroke={3} color="white"/>,
		label: "offrir",
		url: "/offrir"
	},
	{
		icon: <IconCalendarWeekFilled size={32} stroke={3} color="white"/>,
		label: "événements",
		url: "/événements"
	},
	{
		icon: <IconBible size={32} stroke={3} color="white"/>,
		label: "lectio divina",
		url: "/lectio-divina"
	}
]

function HeroSection() {
	return (
		<div className="flex-1 flex flex-col items-center justify-center relative min-h-screen">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
					alt="Background Image" className="object-cover object-center w-full h-full"/>
				<div className="absolute inset-0 bg-black opacity-50"></div>
			</div>
			<div className="relative z-10 text-center text-white custom-container">
				<h1 className="px-6 text-[50px] md:text-[70px] lg:text-[100px] font-bold mb-4 font-anton">
					Adorez à tout moment et en tout lieu.
				</h1>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
				{shortcuts.map((shortcut, index) => (
					<HeroShortcut
						key={index}
						icon={shortcut.icon}
						label={shortcut.label}
						url={shortcut.url}
					/>
				))}
			</div>
		</div>
	);
}

export default HeroSection;