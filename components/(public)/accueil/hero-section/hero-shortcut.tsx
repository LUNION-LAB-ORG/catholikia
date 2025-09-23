import React from 'react';
import {Link} from "@heroui/link";

type Props = {
	icon: React.ReactNode;
	label: string;
	url: string;
}

function HeroShortcut({icon, label, url}: Props) {
	return (
		<Link href={url} className="flex flex-col items-center bg-white/30 rounded-4xl backdrop-blur-2xl">
			<div className="flex flex-col items-center justify-center gap-2 py-4 px-6 cursor-pointer">
				<span>{icon}</span>
				<span className="capitalize text-white text-sm font-sans">{label}</span>
			</div>
		</Link>
	);
}

export default HeroShortcut;