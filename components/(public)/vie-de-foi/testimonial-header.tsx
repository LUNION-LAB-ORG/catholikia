export default function TestimonialHeader() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10">
      <div className="mx-auto flex flex-col justify-center mb-8 max-w-4xl">
        {/* Main Header Section */}
        <div className="text-black text-center text-[#767168] text-sm sm:text-base md:text-lg lg:text-xl mx-auto mb-5 leading-relaxed">
          Découvrez des <span className="font-semibold">entrepreneurs</span>,{" "}
          <span className="font-semibold">artistes</span> et{" "}
          <span className="font-semibold">professionnels</span> de Côte d'Ivoire
          qui mènent une vie de foi remarquable et partagent leur témoignage
          inspirant.
        </div>

        {/* Navigation Categories */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 text-base sm:text-lg">
          <span className="text-amber-500 font-medium hover:text-amber-600 transition-colors cursor-pointer">
            Entrepreneurs
          </span>
          <span className="hidden sm:inline text-amber-500 text-xl">•</span>
          <span className="text-amber-500 font-medium hover:text-amber-600 transition-colors cursor-pointer">
            Artistes
          </span>
          <span className="hidden sm:inline text-amber-500 text-xl">•</span>
          <span className="text-amber-500 font-medium hover:text-amber-600 transition-colors cursor-pointer">
            Professionnels
          </span>
        </div>
      </div>
    </div>
  );
}
