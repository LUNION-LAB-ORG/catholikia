import React from 'react';
import Image from "next/image";

function MagPage() {
	return (
		<div className="h-screen">
			<Image
				src="/assets/actualites/mag-bg.jpg"
				alt="Catholikia mag"
				width={1920}
				height={1080}
			/>
		</div>
	);
}

export default MagPage;