"use client";

import {Button} from "@heroui/button";
import {Link} from "@heroui/link";
import {
	Navbar as HeroUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuToggle
} from "@heroui/navbar";
import NextLink from "next/link";

import MobileNavLink from "@/components/common/navbar/mobile-nav-link";
import NavLink from "@/components/common/navbar/nav-link";
import {Logo,} from "@/components/icons";
import {siteConfig} from "@/config/site";
import LocaleSwitcher from "../locale-switch";
import {useState} from "react";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<HeroUINavbar
			maxWidth="full"
			shouldHideOnScroll
			className="custom-container md:rounded-b-4xl bg-white fixed"
			isMenuOpen={isMenuOpen}
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo
							width={120}
						/>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavLink
							key={item.href}
							item={item}
						/>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden md:flex gap-2">
					<LocaleSwitcher/>
				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						as={Link}
						color="primary"
						href={"/mag"}
						className="font-bold font-sans"
					>
						CATHOLIKIA Mag
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				<LocaleSwitcher/>
				<NavbarMenuToggle
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<MobileNavLink handleClick={() => setIsMenuOpen(false)} item={item} key={`${item}-${index}`}/>
					))}
					<Button
						as={Link}
						color="primary"
						href={"/actualites"}
						className="font-bold font-sans"
					>
						CATHOLIKIA Mag
					</Button>
				</div>
			</NavbarMenu>
		</HeroUINavbar>
	);
};
