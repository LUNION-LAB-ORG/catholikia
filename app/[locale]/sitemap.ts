import {MetadataRoute} from "next";
import {siteConfig} from "@/config/site";


export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.catholikia.com";

	return siteConfig
		.navItems
		.map((item) => {
			return {
				url: `${baseUrl}${item.href}`,
				lastModified: new Date(),
				changeFrequency: "daily",
			};
		});
}