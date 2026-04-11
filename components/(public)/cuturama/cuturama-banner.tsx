"use client";


import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import cloudFrontImageLoader from "@/lib/cloudfront-image-loader";

interface TitleBannerProps {
    title?: string;
    className?: string;
    backgroundImage?: string;
    centerImage?: string;
}

const CuturamaBanner: React.FC<TitleBannerProps> = ({
    title,
    className = "",
    backgroundImage,
    centerImage,
}) => {
    return (
        <div className={`w-full ${className}`}>
            <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    loader={cloudFrontImageLoader}
                    src={backgroundImage || "/assets/don/banner.jpg"}
                    alt="Background"
                    width={1920}
                    height={1080}
                    priority
                    className="absolute object-cover w-full h-full top-0 left-0 z-0"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Image centrée */}
                {centerImage && (
                    <div className="mb-4 z-10 relative">
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
                        className={cn(
                            "text-2xl sm:text-3xl md:text-4xl lg:text-6xl",
                            "font-bold text-white z-10 px-4 max-w-lg",
                            "text-center lg:absolute lg:top-65 lg:left-20",
                            "border-4 p-2 font-bebas uppercase"
                        )}
                    >
                        {title}
                    </h1>
                )}
                <div className="absolute border-1.5 flex justify-between  bg-[#fe0000] border-[#fe0000] w-full h-28 items-center bottom-0">
                    <div className="relative  sm:h-15 w-56 md:left-24 lg:left-32  md:-translate-y-4">
                        <Image
                            src="/assets/cuturama/vector_cuturama.png"
                            alt={title || "center image"}
                            width={100}
                            height={100}
                            className="object-cover sm:w-[120px] sm:h-[120px]"
                        />
                    </div>
                    <div className="px-56 md:py-10 md:text-md sm:text-xs lg:text-xl font-bold flex text-white">Bien plus qu'une billetterie, CULTURAMA est le pont entre vos idées et votre communauté.
                        Profitez d'une interface intuitive pour transformer chaque projet en un succès mémorable.</div>
                    <div className="absolute right-0 h-20 overflow-hidden rounded-tl-2xl bottom-0  ">
                        <Image
                            src="/assets/cuturama/ariso.png"
                            alt={title || "center image"}
                            width={100}
                            height={100}
                            className="object-cover sm:w-full sm:h-full"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CuturamaBanner;