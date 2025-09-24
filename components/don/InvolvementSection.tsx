import Image from "next/image";

export default function InvolvementSection() {
  return (
    <div className="min-h-[90vh] bg-white  px-">
      {/* Main container */}
      <div className="max-w-3xl mx-auto ">
        {/* Main heading */}
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-12 text-left">
          IMPLIQUEZ-VOUS
        </h1>

        {/* Cards container */}
        <div className=" lg:pl-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left card - Rejoignez un petit groupe */}
          <div className="bg-gray-50 rounded-3xl p-6 text-center aspect-square flex flex-col justify-between">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                Rejoignez un petit groupe
              </h2>

              {/* Image */}
              <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={"/assets/don/improve_image1.png"}
                  alt="sourire"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Utilisez vos dons pour servir dans des domaines tels que le culte,
              l'hospitalité et l'évangélisation.
            </p>
          </div>

          {/* Right card - Bénévole */}
          <div className="bg-gray-50 rounded-3xl p-6 text-center aspect-square flex flex-col justify-between">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                Bénévole
              </h2>

              {/* Image */}
              <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={"/assets/don/improve_image2.png"}
                  alt="sourire"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Utilisez vos dons pour servir dans des domaines tels que le culte,
              l'hospitalité et l'évangélisation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
