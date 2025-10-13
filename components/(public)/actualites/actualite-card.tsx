import { Badge } from "@/components/ui/badge";
import { IActualite } from "@/features/actualite/types/actualite.type";
import { cn } from "@/lib/utils";
import { dateFormat } from "@/utils/date-utils";
import { Button } from "@heroui/button";
import { IconCalendarWeekFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

type PropsCard = {
  actualite: IActualite;
  orientation?: 'horizontal' | 'vertical';
}

function ActualiteCard({ actualite, orientation }: PropsCard) {
  return (
    <div className="flex flex-col justify-between space-y-2 h-full">
      <Link
        href={`actualites/${actualite.slug}`}
        className="group block h-full"
      >
        <article
          className={cn(
            "grid gap-4 items-stretch h-full transition transform duration-200",
            orientation === "horizontal"
              ? "grid-cols-[minmax(100px,40%)_1fr]"
              : "grid-cols-1"
          )}
        >
          <div
            className={`relative overflow-hidden rounded-xl ${orientation === 'vertical' ? 'aspect-video w-full' : 'min-h-[110px]'}`}
          >
            <Image
              src={actualite.image}
              alt={actualite.titre}
              className="h-full w-full group-hover:scale-105 transition-transform duration-300"
              width={250}
              height={200}
            />
          </div>
          <div className={cn(orientation === 'vertical' ? 'mt-4' : '', "flex flex-col space-y-2")}>
            <div className="flex items-center justify-between">
              <Badge>
                {actualite.categorie ? actualite.categorie.nom : 'Général'}
              </Badge>
              <time className="text-[#595959] text-sm font-medium font-barlow flex items-center">
                <span> <IconCalendarWeekFilled color="#0088FF" size={16} className="mr-1" /> </span>
                <span>{dateFormat(actualite.date_publication)}</span>
              </time>
            </div>
            <h4
              className={cn("group-hover:underline text-sm text-gray-800 font-semibold group-hover:text-gray-900 transition-colors duration-300 line-clamp-2 mb-2.5")}>
              {actualite.titre}
            </h4>
          </div>
        </article>
      </Link>
      {orientation != 'horizontal' && <div className="flex justify-end">
        <Button
          as={Link}
          href={`actualites/${actualite.slug}`}
          variant="bordered"
          className={cn("uppercase text-[#1D1D1D] font-bold border")}>
          Details
        </Button>
      </div>}
    </div>
  );
}

export default ActualiteCard;