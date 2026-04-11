import "@/styles/globals.css";
import {ToastProvider} from "@heroui/toast";
import {Metadata, Viewport} from "next";

import {ThemeProviders} from "@/providers/theme.provider";

import {fontAnton, fontBarlow, fontBebas, fontSans} from "@/config/fonts";
import {siteConfig} from "@/config/site";
import {routing} from "@/i18n/routing";
import {cn} from "@/lib/utils";
import AuthProvider from "@/providers/auth.provider";
import DirectionProvider from "@/providers/direction-provider";
import MountedProvider from "@/providers/mounted.provider";
import QueryProvider from "@/providers/query-provider";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import {NuqsAdapter} from "nuqs/adapters/next/app";
import {getLangDir} from "rtl-detect";
import AnalyticsProvider from "@/components/(public)/consent-provider/analytics-provider";
import CookieBanner from "@/components/(public)/consent-provider/cookie-banner";
import {ConsentProvider} from "@/components/(public)/consent-provider";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.catholikia.com"),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	keywords: [
		"catholikia",
		"église catholique",
		"actualités catholiques",
		"religion",
		"spiritualité",
		"foi",
		"prière",
		"communauté chrétienne",
		"enseignement religieux",
		"culture catholique",
		"événements religieux",
		"vie chrétienne",
		"médias catholiques",
		"évangélisation",
		"caritatif",
		"dialogue interreligieux",
		"Église catholique",
		"Messe",
		"Bible",
		"Vatican",
		"Pape",
		"Baptême",
		"Evangile du jour",
	],
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};


export const viewport: Viewport = {
	themeColor: [
		{media: "(prefers-color-scheme: light)", color: "white"},
		{media: "(prefers-color-scheme: dark)", color: "white"},
	],
};

export default async function RootLayout({
	                                         children,
	                                         params,
                                         }: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const {locale} = await params;
	if (!hasLocale(routing.locales, locale)) {
		return notFound();
	}

	const messages = await getMessages();
	const direction = getLangDir(locale);

	return (
		<html lang="fr" dir={direction} className="light" data-theme="light" suppressHydrationWarning>
		<head>
			<meta name="apple-mobile-web-app-title" content="Catholikia"/>
			<title>CATHOLIKIA</title>
		</head>
		<body
			className={cn(
				"min-h-screen text-foreground bg-background font-sans antialiased",
				fontSans.variable,
				fontBarlow.variable,
				fontAnton.variable,
				fontBebas.variable
			)}
		>
		<NextIntlClientProvider messages={messages} locale={locale}>
			<QueryProvider>
				<ThemeProviders
					themeProps={{attribute: "class", defaultTheme: "light", themes: ["light"]}}
				>
					<ToastProvider
						placement="top-center"
						toastProps={{shouldShowTimeoutProgress: true}}
					/>
					<NuqsAdapter>
						<AuthProvider>
							<MountedProvider>
								<DirectionProvider direction={direction}>
									<ConsentProvider>
										{children}
										<CookieBanner/>
										<AnalyticsProvider/>
									</ConsentProvider>
								</DirectionProvider>
							</MountedProvider>
						</AuthProvider>
					</NuqsAdapter>
				</ThemeProviders>
			</QueryProvider>
		</NextIntlClientProvider>
		</body>
		</html>
	);
}
