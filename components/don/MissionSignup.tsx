'use client';
import { Button } from "@heroui/button";
import Image from "next/image";
import { useState } from "react";
import Section from "@/components/primitives/Section";

export default function MissionSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <Section padding="none" className="bg-white max-md:px-2">
      <div className="py-8">
        {/* Container responsive : flex-col sur mobile, flex-row sur desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-end">

          {/* Left side - Text content */}
          <div className="space-y-6 lg:space-y-8 w-full md:w-1/2 lg:w-3/5 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-3xl font-black text-gray-900 leading-tight max-xl:max-w-xl mx-auto">
              RESTEZ CONNECTÉS. INSPIREZ-VOUS
            </h1>

            <p className="text-base sm:text-lg lg:text-md text-[#49423E] leading-relaxed max-w-lg mx-auto font-bold">
              Inscrivez-vous pour recevoir des mises à jour mensuelles sur les
              missions, les demandes de prière, les histoires d'impact et les
              moyens de vous impliquer
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-2 rounded-full border border-gray-300 bg-[#fbf9f3] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <Button

                className="px-8 py-4 bg-[#ffca24] hover:bg-yellow-500 text-black font-semibold rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                ENVOYER
              </Button>
            </div>
          </div>

          {/* Right side - Images grid */}
          <div className="hidden lg:flex justify-end gap-3 w-full md:w-1/2 lg:w-2/5">
            <div className="flex flex-col gap-3">
              <div className="w-44 sm:w-64 lg:w-80 xl:w-96 relative">
                <Image
                  src={"/assets/don/don_image1.png"}
                  alt="sourire"
                  width={200}
                  height={200}
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="pl-2 sm:pl-5 lg:pl-8 h-32 sm:h-40 w-44 lg:w-72 xl:w-[360px] relative">
                <Image
                  src={"/assets/don/don_image2.png"}
                  alt="sourire"
                  width={200}
                  height={200}
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4 lg:mt-15">
              <div className="h-32 sm:h-40 w-24 sm:w-44 relative">
                <Image
                  src={"/assets/don/don_image3.png"}
                  alt="sourire"
                  width={200}
                  height={200}
                  className="rounded-tl-2xl rounded-bl-2xl w-full h-full object-cover"
                />
              </div>
              <div className="h-36 sm:h-72 w-24 sm:w-44 relative">
                <Image
                  src={"/assets/don/don_image4.png"}
                  alt="sourire"
                  width={200}
                  height={200}
                  className="rounded-tl-2xl rounded-bl-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
