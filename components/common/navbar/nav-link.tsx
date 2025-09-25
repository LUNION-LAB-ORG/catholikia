"use client";

import React from 'react';
import {NavbarItem} from "@heroui/navbar";
import NextLink from "next/link";
import {link as linkStyles} from "@heroui/theme";
import clsx from "clsx";
import {usePathname} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

type NavLinkProps = {
	item: {
		key: string;
		href: string;
	};
}

function NavLink({item}: NavLinkProps) {
	const pathname = usePathname();
	const tConfig = useTranslations("config");
	// Liens actifs et sous-liens actifs
	const isActive = (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));

	return (
		<NavbarItem
			isActive={isActive}
			key={item.href}
			className="px-1 py-0.5 data-[active=true]:bg-primary data-[active=true]:font-medium"
		>
			<NextLink
				className={clsx(
					linkStyles({color: "foreground"}),
					"font-barlow"
				)}
				color="foreground"
				href={item.href}
			>
				{tConfig("menu_links." + item.key)}
			</NextLink>
		</NavbarItem>
	);
}

export default NavLink;