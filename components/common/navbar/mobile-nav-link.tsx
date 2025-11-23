import React from 'react';
import {Link} from "@heroui/link";
import BaseNavItem, {BaseNavItemProps} from "@/components/common/navbar/base-nav-item";
import {useTranslations} from "next-intl";

interface MobileNavLinkProps extends Omit<BaseNavItemProps, 'as' | 'children'>{
	handleClick?: () => void;
}

function MobileNavLink({item, handleClick}: MobileNavLinkProps) {
	const tConfig = useTranslations("config");

	return (
		<BaseNavItem as="menu" item={item} className="!text-gray-900">
			<Link
				href={item.href}
				size="lg"
				color="foreground"
				onPress={handleClick}
			>
				{tConfig("menu_links." + item.key)}
			</Link>
		</BaseNavItem>
	);
}

export default MobileNavLink;