"use client";

import React from 'react';
import NextLink from "next/link";
import {link as linkStyles} from "@heroui/theme";
import clsx from "clsx";
import {useTranslations} from "next-intl";
import BaseNavItem, {BaseNavItemProps} from "@/components/common/navbar/base-nav-item";

type NavLinkProps = Omit<BaseNavItemProps, 'as' | 'children'>;

function NavLink({item}: NavLinkProps) {
	const tConfig = useTranslations("config");
	const isCuturama = item.key === "Cuturama";

	return (
		<BaseNavItem item={item} className={isCuturama ? "!bg-[#fe0000] rounded-md" : ""}>
			<NextLink
				className={clsx(
					linkStyles({color: "foreground"}),
					"font-barlow",
					isCuturama && "!text-white font-bold"
				)}
				color="foreground"
				href={item.href}
			>
				{tConfig("menu_links." + item.key)}
			</NextLink>
		</BaseNavItem>
	);
}

export default NavLink;