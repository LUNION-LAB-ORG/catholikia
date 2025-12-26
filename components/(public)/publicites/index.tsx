"use client";
import {cn} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {PUBLICITE_POSITIONS} from "@/features/publicite/types/publicite.type";
import {useBannerStore} from "@/features/banner/banner.store";
import {SyntheticEvent, useEffect, useState} from "react";

export default function Publicite({
	                                  position,
	                                  orientation = "horizontal",
	                                  ...props
                                  }: React.HTMLAttributes<HTMLDivElement> & {
	position: PUBLICITE_POSITIONS,
	orientation?: 'horizontal' | 'vertical'
}) {

	const {getBannerByPosition} = useBannerStore()

	const publicite = getBannerByPosition("HOMEPAGE_MIDDLE")

	const [error, setError] = useState<SyntheticEvent<HTMLImageElement, Event> | null>(null)

	useEffect(() => {
		setError(null)
	}, [publicite])

	if (!publicite) {
		return null
	}

	return (
		<Link
			href={error ? 'https://www.lunion-lab.com/' : publicite.link}
			className={cn("items-center justify-center", props.className)}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
				src={error ? '/images-examples/publicites/1.png' : publicite.image_path}
				alt={publicite.position || "Publicité"}
				width={orientation == 'horizontal' ? 1232 : 400}
				height={orientation == 'horizontal' ? 260 : 400}
				onError={setError}
				layout="responsive"
			/>
		</Link>
	);
}