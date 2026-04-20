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
  orientation?: "horizontal" | "vertical";
};

function ActualiteCard({ actualite, orientation }: PropsCard) {
  return (
    <div className="flex h-full flex-col justify-between space-y-2">
      <Link href={`/actualites/${actualite.slug}`} className="group block h-full">
        <article
          className={cn(
            "grid h-full items-stretch gap-4 transition duration-200",
            orientation === "horizontal" ? "grid-cols-[minmax(100px,40%)_1fr]" : "grid-cols-1"
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-xl bg-content2",
              orientation === "vertical" ? "aspect-video w-full" : "min-h-[110px] h-full"
            )}
          >
            <Image
              src={actualite.image}
              alt={actualite.titre}
              fill
              sizes={orientation === "horizontal" ? "(max-width: 768px) 100vw, 40vw" : "100vw"}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </div>

          <div className={cn(orientation === "vertical" ? "mt-4" : "", "flex flex-col space-y-2")}>
            <div className="flex items-center justify-between">
              <Badge>{actualite.categorie ? actualite.categorie.name : "Général"}</Badge>
              <time className="font-barlow flex items-center text-sm font-medium text-[#595959]">
                <span>
                  <IconCalendarWeekFilled color="#0088FF" size={16} className="mr-1" />
                </span>
                <span>{dateFormat(actualite.date_publication)}</span>
              </time>
            </div>
            <h4
              className={cn(
                "mb-2.5 line-clamp-2 text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-gray-900 group-hover:underline"
              )}
            >
              {actualite.titre}
            </h4>
          </div>
        </article>
      </Link>
      {orientation != "horizontal" && (
        <div className="flex justify-end">
          <Button
            as={Link}
            href={`/actualites/${actualite.slug}`}
            variant="bordered"
            className={cn("border font-bold uppercase text-[#1D1D1D]")}
          >
            Details
          </Button>
        </div>
      )}
    </div>
  );
}

export default ActualiteCard;