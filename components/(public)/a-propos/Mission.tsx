import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <Section className="flex   lg:px-15    ">
     <div className="justify-between  rounded-2xl w-full   flex lg:pl- items-center ring-1">
         <div className="relative  h-52 lg:pl-6">
        <Image
          src={"/assets/about/mission_image.png"}
          alt="mission image"
          width={200}
          height={200}
          className="w-full h-full"
        />
      </div>
      <div className=" border-2 w-[75%] border-orange-500">
        <Title>notre mission</Title>
        <span className="font-bold">
          Informer avec foi, former avec vérité, éclairer avec amour
        </span>
      </div>
     </div>
    </Section>
  );
};

export default Mission;
