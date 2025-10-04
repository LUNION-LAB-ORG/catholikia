
import Section from "@/components/primitives/Section";
import { HeroArticle } from "./hero-article";
import { LatestContributions } from "./latest-contributions";


const ArticleList = () => {
  return (
    <Section className=" bg-background sm:p-0 ">
      {/* Header */}
      <header className="bg-background">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-[#595959] text-md font-bold leading-relaxed max-w-2xl mx-auto">
            Un espace de pensée pour comprendre les enjeux de l&apos;Église et du monde
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <HeroArticle />
        <LatestContributions />
      </main>
    </Section>
  );
};

export default ArticleList;
