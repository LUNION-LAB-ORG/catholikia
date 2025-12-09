import React from 'react';
import Image from "next/image";
import Content from "@/components/primitives/Content";

function MagPage() {
	return (
		<Content fullWidth className="h-screen py-0">
			<Image
				src="/assets/actualites/mag-bg.jpg"
				alt="Catholikia mag"
				width={1920}
				height={1080}
			/>
		</Content>
	);
}

export default MagPage;