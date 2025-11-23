// File: `utils/html-to-text.ts`
export function removeHtmlTags(html: string | null | undefined): string {
	if (!html) return "";

	// Supprime les balises HTML
	let text = String(html).replace(/<[^>]*>/g, "");

	// Décode quelques entités nommées courantes
	const namedEntities: Record<string, string> = {
		nbsp: " ",
		amp: "&",
		lt: "<",
		gt: ">",
		quot: "\"",
		apos: "'"
	};

	text = text.replace(/&([a-zA-Z]+);/g, (match, name) => {
		return namedEntities[name] ?? match;
	});

	// Décode entités numériques décimales (ex: &#160;)
	text = text.replace(/&#(\d+);/g, (_m, num) => {
		const code = parseInt(num, 10);
		return isNaN(code) ? "" : String.fromCharCode(code);
	});

	// Décode entités numériques hexadécimales (ex: &#xA0;)
	text = text.replace(/&#x([0-9a-fA-F]+);/g, (_m, hex) => {
		const code = parseInt(hex, 16);
		return isNaN(code) ? "" : String.fromCharCode(code);
	});

	// Remplace les éventuels caractères non-breakable restants et normalise les espaces
	return text.replace(/\u00A0/g, " ").replace(/\s+/g, " ").trim();
}
