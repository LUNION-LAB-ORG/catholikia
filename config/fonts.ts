import {Fira_Code as FontMono, Inter as FontSans} from "next/font/google";
import localFont from 'next/font/local';

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontBarlow = localFont({
	src: [
		{
			path: "../public/assets/fonts/Barlow_Semi_Condensed/BarlowSemiCondensed-Light.ttf",
			weight: "200",
			style: "normal", // Ou italic
		},
		{
			path: "../public/assets/fonts/Barlow_Semi_Condensed/BarlowSemiCondensed-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/assets/fonts/Barlow_Semi_Condensed/BarlowSemiCondensed-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-barlow",
});

export const fontAnton = localFont({
	src: [
		{
			path: "../public/assets/fonts/Anton/Anton-Regular.ttf",
			weight: "700",
			style: "normal",
		}
	],
	variable: "--font-anton",
});

export const fontBebas = localFont({
	src: [
		{
			path: "../public/assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf",
			weight: "400",
			style: "normal",
		}
	],
	variable: "--font-bebas",
})

export const fontMono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
});
