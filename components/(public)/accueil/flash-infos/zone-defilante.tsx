import React from 'react';
import { motion } from "framer-motion";
import { IFlash } from "@/features/flash-info/types/flash-info.type";
import TextDefilant from "@/components/(public)/accueil/flash-infos/text-defilant";

type Props = {
	flashInfos: IFlash[];
}

function ZoneDefilante({ flashInfos }: Props) {
	const duplicatedInfos = [...flashInfos, ...flashInfos];

	return (
		<motion.div
			className="flex items-center whitespace-nowrap max-sm:py-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
			animate={{
				x: [0, -1 * flashInfos.reduce((acc, info) => acc + (info.title.length + info.body.length) * 8, 0)]
			}}
			transition={{
				repeat: Infinity,
				duration: flashInfos.length * 20,
				ease: "linear"
			}}
		>
			{duplicatedInfos.map((info, index) => (
				<TextDefilant
					text={info.body}
					title={info.title}
					link={info.link}
					key={`${info.id}-${index}`}
				/>
			))}
		</motion.div>
	);
}

export default ZoneDefilante;