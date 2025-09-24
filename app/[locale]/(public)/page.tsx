import { Code } from "@heroui/code";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";

import { GithubIcon } from "@/components/icons";
import Content from "@/components/primitives/Content";
import Subtitle from "@/components/primitives/Subtitle";
import Title from "@/components/primitives/Title";
import { siteConfig } from "@/config/site";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home.hero");

  return (
    <Content>
     
    </Content>
  );
}
