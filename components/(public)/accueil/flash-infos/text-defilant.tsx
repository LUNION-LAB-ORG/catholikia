import React from 'react';

type Props = {
	text: string;
	link?: string;
	title: string;
}

function TextDefilant({text,link,title}: Props) {
	return (
		<a
			href={link || "#"}
			target={link ? "_blank" : undefined}
			rel="noopener noreferrer"
			className="mr-20 flex-shrink-0 font-anton"
		>
			<span className="uppercase mr-1">{title}:</span>
			{text}
		</a>
	);
}

export default TextDefilant;