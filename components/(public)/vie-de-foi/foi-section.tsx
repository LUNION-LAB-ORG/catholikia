import Section from "@/components/primitives/Section";


export const FoiSection = () => {
  return (
    <Section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-gradient-to-t from-white to-black/10 flex items-center justify-center "
      style={{ backgroundImage: `url(/assets/foi/foi_background.png)` }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute bg-black/30 inset-0   " />
      
      {/* Contenu principal */}
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        {/* Titre EFFATA dans un cadre */}
        <div className="inline-block border-2 border-white px-12 py-4 mb-8">
          <h1 className="text-5xl md:text-6xl font-bebas font-bold tracking-wider">
            VIE DE FOI
          </h1>
        </div>
        
        {/* Sous-titre en doré */}
      
        
        {/* Titre descriptif */}
       
        {/* Paragraphe descriptif */}
       
       
      </div>
       <div className="absolute  bottom-0 w-full bg-gradient-to-t from-white to-white/ overflow-hidden  px-3 py-70 sm:px-6 sm:py-3 lg:px-6 lg:py-6 opacity-60  ">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center">
                    
                  </div>
                </div>
    </Section>
  );
};