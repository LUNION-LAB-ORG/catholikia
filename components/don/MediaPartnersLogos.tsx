import Image from "next/image";

export default function MediaPartnersLogos() {
	return (
		<div className="bg-white py-6 px-2">
			{/* Container for logos */}
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
					<LogoCard src={"/assets/don/logo_avec_jesus.png"} alt={"10 minutes avec Jésus logo"}/>
					<LogoCard src={"/assets/don/logo_avec_jesus.png"} alt={"10 minutes avec Jésus logo"}/>
				</div>
			</div>
		</div>
	);
}

function LogoCard({src, alt}: { src: string; alt: string }) {
	return (
		<div className="border border-gray-200 rounded-lg min-w-64 min-h-32 flex items-center justify-center">
			<Image
				src={src}
				alt={alt}
				width={120}
				height={60}
				className="object-contain"
			/>
		</div>
	);
}
