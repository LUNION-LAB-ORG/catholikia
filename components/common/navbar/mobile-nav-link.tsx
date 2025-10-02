import React from 'react';
import {Link} from "@heroui/link";
import BaseNavItem, {BaseNavItemProps} from "@/components/common/navbar/base-nav-item";
import {useTranslations} from "next-intl";

type MobileNavLinkProps = Omit<BaseNavItemProps, 'as' | 'children'>;

function MobileNavLink({item}: MobileNavLinkProps) {
	const tConfig = useTranslations("config");

	return (
		<BaseNavItem as="menu" item={item} className="!text-gray-900">
			<Link
				href={item.href}
				size="lg"
				color="foreground"
			>
				{tConfig("menu_links." + item.key)}
			</Link>
		</BaseNavItem>
	);
}

export default MobileNavLink;