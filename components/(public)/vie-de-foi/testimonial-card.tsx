import { Card } from "@/components/ui/card";
import { ITemoignage } from "@/features/vie-de-foi/types/vie-de-foi.type";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: ITemoignage;
  onClick: () => void;
}

export const TestimonialCard = ({ testimonial, onClick }: TestimonialCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-testimonial-bg border-border/50 overflow-hidden p-0">
      <div className="relative w-full h-58 ">
        <Image
          src={testimonial.photo || "/images/default-avatar.png"}
          alt={testimonial.temoin || "Photo de témoignage"}
          className="w-full h-full object-cover rounded-t-lg"
          width={400}
          height={160}
        />

        <span className="absolute top-2 left-2 bg-[#3c372e] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {testimonial.profession}
        </span>
      </div>

      <div className="space-y-2 px-3 py-1">
        <h3 className="font-bold text-lg text-foreground">{testimonial.temoin}</h3>
        <p className="text-[#0088FF] font-medium">{testimonial.profession}</p>
        <p className="text-testimonial-text text-sm leading-relaxed line-clamp-2">
          {testimonial.about}
        </p>
        <Button
          variant="bordered"
          onPress={onClick}
          className={cn("uppercase text-[#1D1D1D] font-bold border rounded-full text-sm px-8 mb-2.5")}
        >
          Details
        </Button>
      </div>
    </Card>
  );
};
