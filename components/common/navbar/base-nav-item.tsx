"use client";
import React from 'react';
import {NavbarItem, NavbarMenuItem} from "@heroui/navbar";
import {usePathname} from "@/i18n/navigation";
import {cn} from "@/lib/utils";

export type BaseNavItemProps = {
	as: 'item' | 'menu';
	item: {
		key: string;
		href: string;
	};
	className?: string;
	children: React.ReactNode;
}

function BaseNavItem({item, children, className, as = "item"}: BaseNavItemProps) {
	const pathname = usePathname();
	const isActive = (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));
	const Component = as === 'menu' ? NavbarMenuItem : NavbarItem;

	return (
		<Component
			isActive={isActive}
			key={item.href}
			className={cn("px-1 py-0.5 data-[active=true]:bg-primary data-[active=true]:font-medium", className)}
		>
			{children}
		</Component>
	);
}

export default BaseNavItem;