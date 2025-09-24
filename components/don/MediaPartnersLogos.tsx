import Image from "next/image";

export default function MediaPartnersLogos() {
  return (
    <div className="bg-white py-8 px-4">
      {/* Container for logos */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
          {/* KTO Logo */}
          <div className="border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow duration-200 w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center">
            <Image
              src={"/assets/don/sponsor_image1.png"}
              alt="KTO logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* RNC Media Logo */}
          <div className="border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow duration-200 w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center">
            <Image
              src={"/assets/don/sponsor_image2.png"}
              alt="RNC Media logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Ecclesia Logo */}
          <div className="border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow duration-200 w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center">
            <Image
              src={"/assets/don/sponsor_image3.jpg"}
              alt="Ecclesia logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Blue Diamond Logo */}
          <div className="border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow duration-200 w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center">
            <Image
              src={"/assets/don/sponsor_image4.png"}
              alt="Blue Diamond logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* EMCI TV Logo */}
          <div className="border border-gray-200 relative rounded-lg bg-white hover:shadow-md transition-shadow duration-200 w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center">
            <Image
              src={"/assets/don/sponsor_image5.jpg"}
              alt="EMCI TV logo"
              width={120}
              height={60}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
