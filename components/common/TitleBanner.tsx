"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface TitleBannerProps {
  title?: string;
  className?: string;
  backgroundImage?: string;
  centerImage?: string;
}

const TitleBanner: React.FC<TitleBannerProps> = ({
  title,
  className = "",
  backgroundImage,
  centerImage,
}) => {
  const router = useRouter();

  return (
    <div className={`w-full ${className}`}>
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[85vh] xl:h-[90vh] 
        bg-no-repeat bg-cover bg-top flex flex-col items-center justify-center 
        rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage || "/assets/don/banner.jpg"})`,
        }}
      >
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
              max-w-[90%] sm:max-w-[70%] lg:max-w-[50%]
              text-center
              lg:text-left lg:absolute lg:top-65 lg:left-20
              border-4 p-2
            "
          >
            {title}
          </h1>
        )}

        {/* Bouton Retour */}
        <button
          className="absolute bottom-3 left-4 sm:left-6 border cursor-pointer 
          border-white text-white px-4 py-1 sm:px-6 sm:py-2 rounded-md 
          hover:bg-white/10 transition z-10 text-sm sm:text-base"
          onClick={() => router.back()}
        >
          Retour
        </button>
      </div>
    </div>
  );
};

export default TitleBanner;
