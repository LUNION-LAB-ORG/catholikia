import { Button } from "@/components/ui/button";
import Image from "next/image";
import {IEvent} from "@/features/event/types/event.type";
import {removeHtmlTags} from "@/utils/html-to-text";
import {Link} from "@/i18n/navigation";

interface EventCardProps {
  event: IEvent;
}

const EventCard = ({ event }: EventCardProps) => {
  const date = new Date(event.published_at);
  const jour = date.toLocaleDateString('fr-FR', { weekday: 'long' }); // "lundi"
  const mois = date.toLocaleDateString('fr-FR', { month: 'long' });
  return (
    <div className="event-card bg-white w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center p-6 rounded-3xl gap-6">
      {/* Date Section */}
      <div className="text-[#1D1D1D] flex flex-col text-center md:text-left md:min-w-[80px] justify-center items-center space-y-1">
        <span className="text-xs md:text-base font-barlow font-semibold">{jour}</span>
        <span className="text-4xl md:text-6xl font-bebas">{new Date(event.published_at).getDate()}</span>
        <span className="uppercase text-xs md:text-sm font-barlow font-semibold">{mois}</span>
      </div>

      {/* Event Image */}
      <div className="flex-shrink-0">
        <Image
          src={event.image}
          alt={event.title}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto md:mx-0"
          width={200}
          height={200}
        />
      </div>

      {/* Event Content */}
      <div className="flex-1 min-w-0 text-center md:text-left">
        <h3 className="text-md md:text-lg font-bold text-card-foreground mb-2 leading-tight">
          {event.title}
        </h3>
        <p className="text-sm md:text-base text-[#252628] leading-relaxed line-clamp-2">
          {removeHtmlTags(event.contenu)}
        </p>
      </div>

      {/* Details Button */}
      <div className="flex-shrink-0 w-full md:w-auto">
        <Button
          asChild
          variant="outline"
          className="font-semibold text-xs md:text-sm tracking-wide px-6 py-2 h-auto w-full md:w-auto"
        >
          <Link
            href={`/evenements/${event.slug}`}
          >
            Détails
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
