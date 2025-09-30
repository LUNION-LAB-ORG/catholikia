import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import Image from "next/image";

export const ComingSection = () => {
  return (
    <Section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat bg-gradient-to-t from-white to-black/10 flex items-center justify-center"
      style={{ backgroundImage: `url(/assets/coming/coming_hero.png)` }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenu principal */}
      <div className="absolute bottom-0 w-full flex flex-col md:flex-row justify-between items-center md:items-end px-6 md:px-10 py-6 md:py-12 bg-black/40 text-center md:text-left z-10">
        
        {/* Titre EFFATA dans un cadre */}
        <div className="mb-6 md:mb-0 inline-block border-b-2 border-white px-6 md:px-12 py-4">
          <Title className="text-4xl md:text-5xl lg:text-6xl font-bebas font-bold tracking-wider text-white">
            Coming Soon
          </Title>
          <span className="block mt-2 text-sm md:text-base font-base text-white">
            Nous serons bientôt de retour. Merci de votre patience.
          </span>
        </div>

        {/* Logo */}
        <div className="mt-6 md:mt-0">
          <Image
            src={"/assets/logo/footer_logo1.png"}
            alt="logo coming"
            width={150}
            height={150}
            className="md:w-40 md:h-40 w-32 h-32 object-contain"
          />
        </div>
      </div>
    </Section>
  );
};
