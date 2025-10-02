"use client";


import Section from "@/components/primitives/Section";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface TitleBannerProps {
  title?: string;
  className?: string;
  backgroundImage?: string;
  centerImage?: string;
}

const LectioDivinaHero: React.FC<TitleBannerProps> = ({
  title,
  className = "",
  backgroundImage,
  centerImage,
}) => {
  return (
    <div className={className}>
      <div
        className="relative w-full min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage || "/assets/lectio/lectio_hero.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        {/* Image centrée */}
        {centerImage && (
          <div className="mb-4 z-10">
            <Image
              src={centerImage}
              alt={title || "center image"}
              fill
              className="object-cover sm:w-[120px] sm:h-[120px]"
            />
          </div>
        )}

        {/* Title */}
        {title && (
          <h1
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-6xl
              font-bold text-white z-10 px-4
              max-w-[90%] sm:max-w-[70%] lg:max-w-[80%]
              text-center
              lg:text-left lg:absolute lg:top-65 lg:left-20
              border-4 p-2
              font-bebas
            "
          >
            {title}
          </h1>
        )}
      </div>
    </div>
  );
};

export default LectioDivinaHero;