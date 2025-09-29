import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import mgrJeanDupont from "@/assets/mgr-jean-dupont.jpg";
import drMarieLeblanc from "@/assets/dr-marie-leblanc.jpg";
import pereAntoineMartin from "@/assets/pere-antoine-martin.jpg";
import profJeanLucRousseau from "@/assets/prof-jean-luc-rousseau.jpg";
import Title from "@/components/primitives/Title";
import Section from "@/components/primitives/Section";

const contributors = [
  {
    id: 1,
    name: "Mgr Jean Dupont",
    title: "ARCHEVÊQUE DE LYON",
       image: '/assets/tribunes/contributor1.jpg',
  },
  {
    id: 2,
    name: "Dr Marie Leblanc",
    title: "THÉOLOGIENNE, UNIVERSITÉ CATHOLIQUE",
     image: '/assets/tribunes/contributor2.png',
  },
  {
    id: 3,
    name: "Père Antoine Martin",
    title: "CURÉ DE SAINT-SULPICE",
 image: '/assets/tribunes/contributor1.jpg',
  },
  {
    id: 4,
    name: "Prof Jean-Luc Rousseau",
    title: "PHILOSOPHE, INSTITUT CATHOLIQUE",
    image: '/assets/tribunes/contributor1.jpg',
  }
];

export const Contributors = () => {
  return (
    <Section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className=" mb-12">
          <Title className="text- font-bold text-foreground mb-4 tracking-tight">
            NOS CONTRIBUTEURS
          </Title>
          <p className="text-muted-foreground text-base w-full mx-auto">
            Des voix autorisées pour éclairer les grands débats de notre temps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {contributors.map((contributor) => (
            <div key={contributor.id} className="text-center group">
              <div className="mb-4 flex justify-center">
                <Avatar className="w-24 h-24   group-hover:ring-spiritual-orange/40 transition-all duration-300">
                  <AvatarImage 
                    src={contributor.image} 
                    alt={`Portrait de ${contributor.name}`}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-spiritual-orange/10 text-spiritual-orange text-lg font-semibold">
                    {contributor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {contributor.name}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {contributor.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};