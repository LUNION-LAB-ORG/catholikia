import { HeroArticle } from "./hero-article";
import { LatestContributions } from "./latest-contributions";


const ArticleList = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
            Un espace de pensée pour comprendre les enjeux de l'Église et du monde
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <HeroArticle />
        <LatestContributions />
      </main>
    </div>
  );
};

export default ArticleList;
