import { articles } from "@/app/api/articles";
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import { Button } from "@/components/ui/button";

export const HeroArticle = () => {
  const articleUne = articles.find((une) => une.article_une === true);

  return (
    <Section className="">
      <div className="text-2xl font-bold text-foreground mb-8 tracking-tight">
       
          <Title>  ARTICLE À LA UNE</Title>
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
          <div className="text-xs text-muted-foreground flex px-2 uppercase tracking-wider">
            <span className="w-[29%] border-2 px-2 py-1 rounded-2xl ">
              {articleUne?.theme}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-foreground leading-tight">
            {articleUne?.title}
          </h3>
          <div className="text-sm text-muted-foreground">
            {articleUne?.author}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {articleUne?.excerpt}
          </p>
          <Button variant="default" className="rounded-2xl cursor-pointer" size="lg">
            LIRE LA SUITE
          </Button>
        </div>
      </div>
    </Section>
  );
};
