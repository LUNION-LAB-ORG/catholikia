import Content from "@/components/primitives/Content";
import Title from "@/components/primitives/Title";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <Content fullWidth className="pt-0">
      <Title>{t("title")}</Title>
    </Content>
  );
}
