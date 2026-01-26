import {cn} from '@/lib/utils';
import {Button} from '@heroui/button'
import React from 'react'
import {addToast} from "@heroui/toast";

type ShareButtonProps = {
	className?: string;
	urlToShare?: string;
	documentTitle?: string;
}

export default function ShareButton({className, urlToShare, documentTitle}: ShareButtonProps) {
	const handleShare = () => {
		const url = urlToShare || window.location.href;
		if (navigator.share) {
			navigator.share({
				title: documentTitle || document.title,
				url
			}).then(() => {
				console.log(`Content shared successfully ${url}`);
			});
		} else {
			navigator.clipboard.writeText(url).then(() => {
				addToast({title: 'Lien copié !', color: 'success'});
			}).catch((error) => {
				addToast({title: 'Échec de la copie du lien.', color: 'danger'});
				console.error('Error copying to clipboard: ', error);
			});
		}
	}

	return (
		<Button variant="bordered" className={cn("rounded-full uppercase text-[#1D1D1D] font-bold border", className)}
		        onPress={handleShare}>
			Partager
		</Button>
	)
}
