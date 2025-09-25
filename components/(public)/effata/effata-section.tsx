import Section from "@/components/primitives/Section";import effataBackground from "/assets/effata/back.png";

export const EffataSection = () => {
  return (
    <Section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center "
      style={{ backgroundImage: `url(/assets/effata/hero_effata.jpg)` }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute bg-black/30 inset-0 bg-effata-overlay" />
      
      {/* Contenu principal */}
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        {/* Titre EFFATA dans un cadre */}
        <div className="inline-block border-2 border-white px-12 py-4 mb-8">
          <h1 className="text-5xl md:text-6xl font-bebas font-bold tracking-wider">
            EFFATA
          </h1>
        </div>
        
        {/* Sous-titre en doré */}
        <h2 className="text-effata-gold  text-primary text-4xl md:text-4xl font-semibold mb-6">
          « Ouvre-toi ! »
        </h2>
        
        {/* Titre descriptif */}
        <h3 className="text-xl md:text-2xl font-medium font-inter mb-8">
          La porte ouverte sur le monde
        </h3>
        
        {/* Paragraphe descriptif */}
        <p className="text-lg font-inter md:text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
          Suivez les dernières nouvelles du Vatican, des Églises locales et des 
          engagements humanitaires catholiques à travers le monde
        </p>
       
      </div>
       <div className="absolute  bottom-0 w-full bg-gradient-to-t from-white to-black/10 overflow-hidden  px-3 py-2 sm:px-6 sm:py-3 lg:px-6 lg:py-6  ">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center">
                    
                  </div>
                </div>
    </Section>
  );
};