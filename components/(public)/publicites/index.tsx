import {cn} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {PUBLICITE_POSITIONS} from "@/features/publicite/types/publicite.type";
import {publicitesFakeData} from "@/app/api/publicites";

export default function Publicite({position, orientation, ...props}: React.HTMLAttributes<HTMLDivElement> & {
	position: PUBLICITE_POSITIONS,
	orientation?: 'horizontal' | 'vertical'
}) {
	const publicite = publicitesFakeData.filter(
		(banner) => banner.position === position
	)[0]

	if (!publicite) {
		return null
	}

	return (
		<Link
			href={publicite.linkUrl}
			className={cn("items-center justify-center", props.className)}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
				src={publicite.imageUrl}
				alt={publicite.position || "Publicité"}
				width={orientation == 'horizontal' ? 1232 : 400}
				height={orientation == 'horizontal' ? 260 : 400}
				layout="responsive"
			/>
		</Link>
	);
}