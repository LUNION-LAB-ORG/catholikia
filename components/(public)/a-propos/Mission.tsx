import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <Section className="px-6 py-12 lg:px-15 flex flex-col">
      {/* Logo + slogan */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex justify-center">
          <Image
            src={"/assets/logo/logo.png"}
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <span className="text-center font-bebas text-2xl md:text-3xl lg:text-4xl mt-4">
          CATHOLIKIA, la voix de l’Église catholique en Afrique
        </span>
      </div>

      {/* Bloc Mission */}
      <div
        className="
          flex flex-col md:flex-row 
          justify-between items-center w-full 
          rounded-2xl ring-1 overflow-hidden
        "
      >
        {/* Image centrée */}
        <div
          className="
            flex justify-center items-center
            w-full md:w-1/2 lg:w-1/4 
            h-64 md:h-72 lg:h-80 lg:pl-6
          "
        >
          <Image
            src={"/assets/about/mission_image.png"}
            alt="mission image"
            width={208}   // 52 * 4
            height={208}  // 52 * 4
            className="w-52 h-52 object-contain"
          />
        </div>

        {/* Texte */}
        <div
          className="
            w-full md:w-1/2 lg:w-[75%] 
            p-6 md:p-8 lg:p-12 
             
            
            text-center md:text-left
          "
        >
          <Title className="mb-4">Notre mission</Title>
          <span className="font-bold block text-base md:text-lg lg:text-xl">
            Informer avec foi, former avec vérité, éclairer avec amour
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Mission;
