import {Button} from "@heroui/button";
import {Link} from "@heroui/link";
import {
	Navbar as HeroUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@heroui/navbar";
import NextLink from "next/link";

import {GithubIcon, Logo,} from "@/components/icons";
import {ThemeSwitch} from "@/components/theme-switch";
import {siteConfig} from "@/config/site";
import {LogInIcon, LogOutIcon} from "lucide-react";
import LocaleSwitcher from "../locale-switch";
import {auth} from "@/lib/auth";
import {logout} from "@/features/auth/actions/auth.action";
import {getTranslations} from "next-intl/server";
import NavLink from "@/components/common/navbar/nav-link";

export const Navbar = async () => {
	const t = await getTranslations("partials.navbar");
	const tConfig = await getTranslations("config");
	const session = await auth();
	const isLoggedIn = !!session;

	return (
		<HeroUINavbar maxWidth="full" shouldHideOnScroll className="custom-container rounded-b-4xl bg-white fixed">
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
				<NavbarItem className="hidden sm:flex gap-2">
					<LocaleSwitcher/>
				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						as={Link}
						color="primary"
						href={"/actualites"}
						className="font-bold font-sans"
					>
						CATHOLIKIA Mag
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal aria-label="Github" href={siteConfig.links.github}>
					<GithubIcon className="text-default-500"/>
				</Link>
				<ThemeSwitch/>
				<NavbarMenuToggle/>
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					<NavbarMenuItem className="flex items-center justify-end">
						<LocaleSwitcher/>
					</NavbarMenuItem>
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={index === 2 ? "primary" : "foreground"}
								href="#"
								size="lg"
							>
								{tConfig("menu_links." + item.key)}
							</Link>
						</NavbarMenuItem>
					))}
					<NavbarMenuItem className="mt-8">
						{isLoggedIn ? (
							<Button
								color="danger"
								onPress={logout}
								startContent={<LogOutIcon/>}
								fullWidth
							>
								{t("buttons.logout")}
							</Button>
						) : (
							<Button
								as={Link}
								color="primary"
								href={"/auth/login"}
								startContent={<LogInIcon/>}
								fullWidth
							>
								{t("buttons.login")}
							</Button>
						)}
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</HeroUINavbar>
	);
};
