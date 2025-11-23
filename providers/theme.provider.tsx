"use client";

import {ThemeProvider as NextThemesProvider, ThemeProviderProps, useTheme} from "next-themes";

import * as React from "react";
import {HeroUIProvider} from "@heroui/system";
import {useRouter} from "@/i18n/navigation";

export interface ThemeProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
	interface RouterConfig {
		routerOptions: NonNullable<
			Parameters<ReturnType<typeof useRouter>["push"]>[1]
		>;
	}
}

export function ThemeProviders({children, themeProps}: ThemeProvidersProps) {
	const router = useRouter();
	const {setTheme} = useTheme()
	setTheme("light");
	return (
		<HeroUIProvider navigate={router.push}>
			<NextThemesProvider themes={["light"]} {...themeProps}>{children}</NextThemesProvider>
		</HeroUIProvider>
	);
}
