import HeroShortcut from "@/components/(public)/accueil/hero-section/hero-shortcut";
import { IconBible, IconBookFilled, IconCalendarWeekFilled, IconMicrophoneFilled, IconUsersGroup } from "@tabler/icons-react";

const shortcuts = [
	// {
	// 	icon: <IconPray size={32} stroke={3} color="white"/>,
	// 	label: "demandes",
	// 	url: "/demandes"
	// },
	// {
	// 	icon: <IconGiftFilled size={32} stroke={3} color="white"/>,
	// 	label: "offrir",
	// 	url: "/offrir"
	// },
	{
		icon: <IconMicrophoneFilled size={32} stroke={3} color="white" />,
		label: "tribunes",
		url: "/tribunes"
	},
	{
		icon: <IconBookFilled size={32} stroke={3} color="white" />,
		label: "Diocèses",
		url: "/annuaire"
	},
	{
		icon: <IconUsersGroup size={32} stroke={3} color="white" />,
		label: "Vie de foi",
		url: "/vie-de-foi"
	},
	{
		icon: <IconBible size={32} stroke={3} color="white" />,
		label: "lectio divina",
		url: "/lectio-divina"
	}
]

function HeroSection() {
	return (
		<div className="flex-1 flex flex-col items-center justify-center relative min-h-screen">
			<div className="absolute inset-0">
				<img
					src="/assets/hero/hero_img.jpg"
					alt="Background Image" className="object-cover object-center w-full h-full" />
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