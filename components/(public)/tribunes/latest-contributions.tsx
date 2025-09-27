
import { articles } from "@/app/api/articles";
import { ArticleCard } from "./article-card";
import Title from "@/components/primitives/Title";



export const LatestContributions = () => {
   const article= articles.filter((art)=>art.article_une==false)
  return (
    <div>
      <div className="text-2xl font-bold text-foreground mb-8 tracking-tight">
       <Title> Dernières contributions</Title>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {article.map((article) => (
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
    </div>
  );
};