"use client";

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
  const router = useRouter();

  return (
    <section className={`w-full custom-container ${className}`}>
      <div
        className="relative w-full h-[40vh]  sm:h-[50vh] md:h-[65vh] lg:h-[85vh] xl:h-[90vh] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage || "/assets/lectio/lectio_hero.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"/>
        {/* Image centrée */}
        {centerImage && (
          <div className="mb-4 z-10">
            <Image
              src={centerImage}
              alt={title || "center image"}
              width={100}
              height={100}
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

        {/* Bouton Retour */}
        {/*<button*/}
        {/*  className="absolute bottom-3 left-4 sm:left-6 border cursor-pointer */}
        {/*  border-white text-white px-4 py-1 sm:px-6 sm:py-2 rounded-md */}
        {/*  hover:bg-white/10 transition z-10 text-sm sm:text-base"*/}
        {/*  onClick={() => router.back()}*/}
        {/*>*/}
        {/*  Retour*/}
        {/*</button>*/}
      </div>
    </section>
  );
};

export default LectioDivinaHero;
