import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import Image from "next/image";
import { Testimonial } from "./types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onClick: () => void;
}

export const TestimonialCard = ({ testimonial, onClick }: TestimonialCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-testimonial-bg border-border/50 overflow-hidden p-0">
      {/* Image qui touche la bordure haute */}
      <div className="relative w-full h-58 ">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover rounded-t-lg"
          width={400}
          height={160}
        />

        {/* Badge en haut à gauche */}
        <span className="absolute top-2 left-2 bg-[#3c372e] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {testimonial.role}
        </span>
      </div>

      {/* Contenu texte */}
      <div className="space-y-2 px-3 py-1">
        <h3 className="font-bold text-lg text-foreground">{testimonial.name}</h3>
        <p className="text-[#0088FF] font-medium">{testimonial.role}</p>
        <p className="text-testimonial-text text-sm leading-relaxed">
          {testimonial.description}
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
