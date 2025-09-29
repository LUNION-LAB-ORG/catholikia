import Section from "@/components/primitives/Section";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  theme:string;

}

export const ArticleCard = ({ image, title, excerpt, author, date,theme }: ArticleCardProps) => {
  return (
    <section className="bg-card rounded-lg  shadow-sm overflow-hidden border border-border">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className=" text-xs border-1 rounded-2xl"> {theme} </span>
        <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs">
            <div className="font-bold text-[#4B5563] ">{author}</div>
            <div className="mt-1">{date}</div>
          </div>
        </div>
        <Button variant="default"  size="sm" className="w-full rounded-2xl cursor-pointer">
          LIRE
        </Button>
      </div>
    </section>
  );
};