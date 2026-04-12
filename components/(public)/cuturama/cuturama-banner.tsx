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
                <div className="absolute flex justify-between bg-[#fe0000] w-full min-h-16 md:h-28 items-end bottom-0 px-3 sm:px-4 md:px-0">
                    <div className="relative flex-shrink-0 md:ml-24 lg:ml-32">
                        <Image
                            src="/assets/cuturama/vector_cuturama.png"
                            alt={title || "center image"}
                            width={100}
                            height={100}
                            className="object-cover w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[120px] md:h-[120px] block"
                        />
                    </div>
                    <div className="flex-1 px-2 sm:px-4 md:px-8 py-2 text-[9px] sm:text-xs md:text-sm lg:text-xl font-bold text-white text-center leading-tight self-center">
                        Bien plus qu&apos;une billetterie, CULTURAMA est le pont entre vos idées et votre communauté.
                        Profitez d&apos;une interface intuitive pour transformer chaque projet en un succès mémorable.
                    </div>
                    <div className="flex-shrink-0 overflow-hidden rounded-tl-2xl">
                        <Image
                            src="/assets/cuturama/ariso.png"
                            alt={title || "center image"}
                            width={100}
                            height={100}
                            className="object-cover w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] md:w-[130px] md:h-[80px] block"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CuturamaBanner;