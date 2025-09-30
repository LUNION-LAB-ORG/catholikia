import Content from "@/components/primitives/Content";
import Section from "@/components/primitives/Section";
import Subtitle from "@/components/primitives/Subtitle";
import Title from "@/components/primitives/Title";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { getTranslations } from "next-intl/server";

export default async function BlogPage() {
  const t = await getTranslations("blog");

  return (
   <div>
    
   </div>
  );
}
