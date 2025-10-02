import { articles } from "@/app/api/articles";
import { ArticleCard } from "./article-card";
import Title from "@/components/primitives/Title";
import Section from "@/components/primitives/Section";
import { useTribuneListQuery } from "@/features/tribunes/queries/tribune-list.query";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import NoData from "@/components/common/no-data";

export const LatestContributions = () => {
  const { data, isLoading, isError } = useTribuneListQuery({
    page: 1,
    size: 6,
    skip: 1,
  })
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (data?.data.length === 0 && !isLoading) {
    return <NoData
      message="Aucun article trouvé"
    />;
  }

  const articles = data?.data || [];

  return (
    <Section className="">
      <div className="text-2xl font-bold text-foreground mb-8 tracking-tight">
        <Title> Dernières contributions</Title>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            image={article.image}
            title={article.title}
            excerpt={article.excerpt}
            author={article.author}
            date={article.temps}
            theme={article.theme}
          />
        ))}
      </div>
    </Section>
  );
};
