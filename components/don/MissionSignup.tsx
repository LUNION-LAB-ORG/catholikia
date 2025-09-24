'use client';
import { Button } from "@heroui/button";
import Image from "next/image";
import { useState } from "react";

export default function MissionSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Container responsive : flex-col sur mobile, flex-row sur desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-30 items-center justify-end">

          {/* Left side - Text content */}
          <div className="space-y-6 lg:space-y-8 w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-3xl font-black text-gray-900 leading-tight">
              RESTEZ CONNECTÉS. INSPIREZ-VOUS
            </h1>

            <p className="text-base sm:text-lg lg:text-md text-gray-700 leading-relaxed max-w-md mx-auto lg:mx-0">
              Inscrivez-vous pour recevoir des mises à jour mensuelles sur les
              missions, les demandes de prière, les histoires d'impact et les
              moyens de vous impliquer
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
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
          <div className="flex flex-wrap justify-center lg:justify-end gap-3 w-full lg:w-auto">
            <div className="flex flex-col gap-3">
              <div className="w-44 sm:w-52 lg:w-64 relative">
                <Image
                  src={"/assets/don/don_image1.png"}
                  alt="sourire"
                  width={200}
                  height={200}
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="pl-2 sm:pl-5 h-32 sm:h-40 w-44 sm:w-64 relative">
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
              <div className="h-32 sm:h-40 w-24 sm:w-32 relative">
                <Image
                  src={"/assets/don/don_image3.png"}
                  alt="sourire"
                  width={200}
                  height={200}
                  className="rounded-tl-2xl rounded-bl-2xl w-full h-full object-cover"
                />
              </div>
              <div className="h-36 sm:h-44 w-24 sm:w-32 relative">
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
    </div>
  );
}
