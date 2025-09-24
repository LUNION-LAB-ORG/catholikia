import { Button } from "@/components/ui/button";
import Image from "next/image";

interface EventCardProps {
  dayNumber: string;
  month: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  day: string;
}

const EventCard = ({ dayNumber, month, title, description, image, imageAlt, day }: EventCardProps) => {
  return (
    <div className="event-card bg-white w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start p-6 rounded-3xl gap-6">
      {/* Date Section */}
      <div className="date-section text-center md:text-left md:min-w-[80px]">
        <div className="text-[#1D1D1D] text-sm md:text-base">{day}</div>
        <div className="text-3xl md:text-4xl font-medium">{dayNumber}</div>
        <div className="uppercase text-xs md:text-sm">{month}</div>
      </div>

      {/* Event Image */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={imageAlt}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto md:mx-0"
          width={200}
          height={200}
        />
      </div>

      {/* Event Content */}
      <div className="flex-1 min-w-0 text-center md:text-left">
        <h3 className="text-md md:text-lg font-bold text-card-foreground mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm md:text-base text-[#252628] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Details Button */}
      <div className="flex-shrink-0 w-full md:w-auto">
        <Button
          variant="outline"
          className="font-semibold text-xs md:text-sm tracking-wide px-6 py-2 h-auto w-full md:w-auto"
        >
          DÉTAILS
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
