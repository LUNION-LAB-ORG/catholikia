"use client";

import ActualiteImageDecoration from "@/components/(public)/actualites/actualite-image-decoration";
import ShareButton from "@/components/common/share-button";
import { Badge } from "@/components/ui/badge";
import { IEffata } from '@/features/effata/types/effata.type';
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { dateFormat } from "@/utils/date-utils";
import { Button } from "@heroui/button";
import { IconCalendarWeekFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export type ActualiteCardOptions = {
  withShare?: boolean;
  withTags?: boolean;
  withCountry?: boolean;
  withCategory?: boolean;
  withAuthor?: boolean;
  withDescription?: boolean;
}

type PropsCard = {
  effata: IEffata;
  orientation?: 'horizontal' | 'vertical';
  options?: ActualiteCardOptions;
}

function EffataCard({ effata, orientation, options }: PropsCard) {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between space-y-2 h-full">
      <Link
        href={`/effata/${effata.slug}`}
        className="group block h-full"
      >
        <article className={cn(
          "grid gap-4 items-stretch h-full transition transform duration-200",
          orientation === 'horizontal' ? 'grid-cols-[minmax(100px,40%),1fr]' : 'grid-cols-1'
        )}>
          <div
            className={`relative ${orientation === 'vertical' ? 'aspect-video w-full' : 'min-h-[220px]'} overflow-hidden rounded-xl`}
          >
            <Image
              src={effata.image}
              alt={effata.titre}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {options && <ActualiteImageDecoration
              options={options}
              actualite={effata}
            />}
          </div>
          <div className={cn(orientation === 'vertical' ? 'mt-4' : '', "flex flex-col space-y-2")}>
            <time className="text-[#595959] text-sm font-medium font-barlow flex items-center">
              <span> <IconCalendarWeekFilled color="#0088FF" size={16} className="mr-1" /> </span>
              <span>{dateFormat(effata.date_publication ?? effata.published_at ?? '')}</span>
            </time>
            <h4
              className={cn("text-gray-800 font-semibold group-hover:text-gray-900 transition-colors duration-300 line-clamp-2 mb-2.5 text-lg")}>
              {effata.titre}
            </h4>
            <div>
              {options?.withDescription && <p className="font-medium text-[#6C7993] text-medium line-clamp-2">
                {effata.description}
              </p>}
              {options?.withAuthor && <p className="font-bold text-[#6C7993] text-sm mt-2">
                Par {effata.auteur.name}
              </p>}
              <ul className="flex items-center space-x-2 mt-2">
                {options?.withTags && effata.tags.map(tag => (
                  <li key={tag}>
                    <Badge variant="outline" className="text-primary border-primary rounded-full">
                      {tag}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Link>
      <div className="flex justify-end mt-2">
        <Button
          onPress={() => {
            router.push(`/effata/${effata.slug}`);
          }}
          variant="bordered"
          className={cn("uppercase text-[#1D1D1D] font-bold border", options?.withShare ? 'rounded-l-full border-r-0' : 'rounded-full')}
        >
          Details
        </Button>
        {options?.withShare && <ShareButton className="rounded-r-full rounded-l-none border-l-0" />}
        
      </div>
    </div>
  );
}

export default EffataCard;