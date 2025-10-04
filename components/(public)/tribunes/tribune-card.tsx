import Section from "@/components/primitives/Section";
import { Button } from "@/components/ui/button";
import { ITribunes } from "@/features/tribunes/types/tribunes.type";
import { dateFormat } from "@/utils/date-utils";
import { removeHtmlTags } from "@/utils/html-to-text";
import { Link } from "@heroui/link";

interface TribuneCardProps {
  tribune: ITribunes
}

export const TribuneCard = ({ tribune }: TribuneCardProps) => {
  return (
    <section className="bg-card rounded-lg  shadow-sm overflow-hidden border border-border">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={tribune.image}
          alt={tribune.titre}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className=" text-xs border-1 rounded-2xl"> {tribune.theme} </span>
        <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 leading-tight">
          {tribune.titre}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {removeHtmlTags(tribune.contenu)}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs">
            <div className="font-bold text-[#4B5563] ">{tribune.author}</div>
            <div className="mt-1">{dateFormat(tribune.published_at)}</div>
          </div>
        </div>
        <Button asChild variant="default" size="sm" className="w-full rounded-2xl cursor-pointer">
          <Link href={`/tribunes/${tribune.slug}`}>Lire la suite</Link>
        </Button>
      </div>
    </section>
  );
};