import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = {
  facebookLink: "https://facebook.com/mvpblocks",
  instaLink: "https://instagram.com/mvpblocks",
  twitterLink: "https://twitter.com/mvpblocks",
  githubLink: "https://github.com/mvpblocks",
  dribbbleLink: "https://dribbble.com/mvpblocks",
  services: {
    webdev: "/web-development",
    webdesign: "/web-design",
    marketing: "/marketing",
    googleads: "/google-ads",
  },
  about: {
    history: "/company-history",
    team: "/meet-the-team",
    handbook: "/employee-handbook",
    careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    support: "/support",
    livechat: "/live-chat",
  },
  contact: {
    email: "hello@mvpblocks.com",
    phone: "+91 8637373116",
    address: "Kolkata, West Bengal, India",
  },
  company: {
    name: "Mvpblocks",
    description:
      "Building beautiful and functional web experiences with modern technologies. We help startups and businesses create their digital presence.",
    logo: "/assets/logo/footer_logo1.png",
  },
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
  { icon: Github, label: "GitHub", href: data.githubLink },
  { icon: Dribbble, label: "Dribbble", href: data.dribbbleLink },
];

const aboutLinks = [
  { text: "1-123-456-7890", href: data.about.history },
  { text: "catholikia@example.org", href: data.about.team },
];

const serviceLinks = [
  { text: "Actualités", href: "actualites" },
  { text: "Effata", href: "effata" },
  { text: "Vie de Foi", href: "vie-de-foi" },
  { text: "Parlons-en!", href: "parlons-en" },
  { text: "Culturama", href: "culturama" },
  { text: "Tribunes", href: "tribunes" },
  { text: "A propos", href: "a-propos" },
];

const helpfulLinks = [
  { text: "FAQs", href: data.help.faqs },
  { text: "Support", href: data.help.support },
  { text: "Live Chat", href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mb-0 w-full text-white place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary  relative flex justify-center md:justify-center gap-2 sm:justify-start">
              <Image
                src={data.company.logo || "/placeholder.svg"}
                alt="logo"
                className="h-20 w-40 rounded-full "
                width={200}
                height={664}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Abidjan, Macory</p>
              <ul className="mt-8 space-y-4 text-sm ">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70  transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="mt-8 flex justify-center   gap-1 sm:justify-start md:gap-">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <Link
                      prefetch={false}
                      href={href}
                      className="text-black bg-primary  hover:text-white transition"
                    >
                     <div className="bg-primary rounded-full p-1">
                       <span className="sr-only ">{label}</span>
                      <Icon className="size-6 " />
                     </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xl font-bold ">Pages</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-secondary-foreground/70 transition'
                      }`}
                    >
                      <span className="text-secondary-foreground/70 transition">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-primary relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="text-center sm:text-left  w-80">
              <p className="text-xl font-bold ">Collecte de fonds</p>
              <p className="mt-8 space-y-2 text-md">
                <p className="">
                  Prendre soin des aînés : apporter de l'espoir à chaque repas
                </p>
                <p>
                  La foi en action : partager la parole et soutenir les âmes
                </p>
                <p>
                  Espoir pour les sans-abri : aidez-nous à leur fournir un abri
                  et un soutien
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="lg:text-center m:text-center  sm:flex sm:justify-between sm:text-left">
            <p className="text-secondary-foreground/70  w-full text-center mt-4 text-sm transition sm:order-first sm:mt-0">
              This is a sample website -cmsmasters © 2025 - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
