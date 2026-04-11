import React from 'react';
import {Link} from "@heroui/link";
import clsx from "clsx";
import BaseNavItem, {BaseNavItemProps} from "@/components/common/navbar/base-nav-item";
import {useTranslations} from "next-intl";

interface MobileNavLinkProps extends Omit<BaseNavItemProps, 'as' | 'children'>{
	handleClick?: () => void;
}

function MobileNavLink({item, handleClick}: MobileNavLinkProps) {
	const tConfig = useTranslations("config");
	const isCuturama = item.key === "Cuturama";

	return (
		<BaseNavItem as="menu" item={item} className={clsx("!text-gray-900", isCuturama && "!bg-red-500 rounded-md")}>
			<Link
				href={item.href}
				size="lg"
				color="foreground"
				onPress={handleClick}
				className={isCuturama ? "!text-white font-bold" : ""}
			>
				{tConfig("menu_links." + item.key)}
			</Link>
		</BaseNavItem>
	);
}

export default MobileNavLink;