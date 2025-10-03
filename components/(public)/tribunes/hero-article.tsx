import { articles } from "@/app/api/articles";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import NoData from "@/components/common/no-data";
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import { Button } from "@/components/ui/button";
import { useTribuneListQuery } from "@/features/tribunes/queries/tribune-list.query";
import { dateFormat } from "@/utils/date-utils";
import { Calendar } from "lucide-react";

export const HeroArticle = () => {
  // const articleUne = articles.find((une) => une.article_une === true);
  const { data, isLoading, isError } = useTribuneListQuery({
    page: 1,
    size: 1,
  })

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (data?.data.length === 0 && !isLoading) {
    return null;
  }

  const articleUne = data?.data[0];

  return (
    <Section>
      <div className="text-2xl font-bold text-foreground mb-8 tracking-tight">
        <Title className="uppercase">Article à la une</Title>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={articleUne?.image}
              alt={articleUne?.title || "Image article à la une"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <div className="inline-flex text-xs uppercase tracking-wider border border-[#161616] px-2 py-1 rounded-2xl text-[#151515]">
            {articleUne?.theme}
          </div>
          <h3 className="text-2xl font-semibold text-foreground leading-tight">
            {articleUne?.title}
          </h3>
          <div className="text-sm text-[#595959] font-bold">
            {articleUne?.author}
          </div>
          <p className="text-[#595959] leading-relaxed">
            {articleUne?.excerpt}
          </p>
          <div className="flex flex-col space-y-6">
            <time className="inline-flex text-sm text-[#6B7280] items-center font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              {dateFormat(articleUne?.date || "")}
            </time>
            <Button variant="default" className="rounded-full cursor-pointer px-10 font-bold w-auto self-start" size="lg">
              LIRE LA SUITE
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
