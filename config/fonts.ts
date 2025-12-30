import {Anton, Barlow_Semi_Condensed, Bebas_Neue, Inter as FontSans, Satisfy} from "next/font/google";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

export const fontSatisfy = Satisfy({
	subsets: ["latin"],
	variable: "--font-satisfy",
	weight: "400",
	display: "swap",
});

export const fontAnton = Anton({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-anton",
	display: "swap",
});

export const fontBarlow = Barlow_Semi_Condensed({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-barlow",
	display: "swap",
});

export const fontBebas = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bebas",
})
