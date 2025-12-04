import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {siteConfig} from "@/config/site";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = () => {
	return (
		<footer className={cn("bg-secondary dark:bg-secondary/20 mb-0 w-full text-white place-self-end ")}>
			<div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<div className="text-primary relative flex justify-center md:justify-center gap-2 sm:justify-start">
							<Image
								src="/assets/logo/footer_logo1.png"
								alt="logo"
								className="h-20 w-auto"
								width={200}
								height={664}
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
						<div className="text-center sm:text-left">
							<p className="text-lg font-medium">{siteConfig.address}</p>
							<ul className="mt-8 space-y-4 text-sm">
								<li>
									<Link
										href={`mailto:${siteConfig.email}`}
										className="text-secondary-foreground/70">
										{siteConfig.email}
									</Link>
								</li>
								<li>
									<Link
										href={`tel:${siteConfig.phone}`}
										className="text-secondary-foreground/70">
										{siteConfig.phone}
									</Link>
								</li>
							</ul>
							<ul className="mt-8 flex justify-center   gap-1 sm:justify-start md:gap-">
								{siteConfig.socialLinks.map(({icon, label, href}) => (
									<li key={label}>
										<Link
											prefetch={false}
											href={href}
											target="_blank"
											className="bg-primary text-secondary hover:text-white transition"
										>
											<div className="bg-primary rounded-full p-1">
												<span className="sr-only">{label}</span>
												<FontAwesomeIcon icon={icon} className="size-6" />
											</div>
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="text-center sm:text-left">
							<p className="text-xl font-bold ">Pages</p>
							<ul className="mt-8 space-y-4 text-sm">
								{siteConfig.navItems.slice(1, 7).map(({label: text, href}) => (
									<li key={text}>
										<Link
											className="text-secondary-foreground/70 transition first-letter:capitalize"
											href={href}
										>
											{text}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="text-center sm:text-left md:w-80">
							<h6 className="text-xl font-bold ">Collecte de fonds</h6>
							<div className="mt-8 space-y-2 text-md">
								<p className="">
									Prendre soin des aînés : apporter de l'espoir à chaque repas
								</p>
								<p>
									La foi en action : partager la parole et soutenir les âmes
								</p>
								<p>
									Espoir pour les sans-abri : aidez-nous à leur fournir un abri
									et un soutien
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t pt-6">
					<div className="lg:text-center m:text-center  sm:flex sm:justify-between sm:text-left">
						<p
							className="text-secondary-foreground/70  w-full text-center mt-4 text-sm transition sm:order-first sm:mt-0">
							© 2025 - All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
