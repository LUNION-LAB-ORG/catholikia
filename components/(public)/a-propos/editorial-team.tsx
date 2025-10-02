import React from 'react';
import Image from 'next/image';
import Section from '@/components/primitives/Section';
import Title from '@/components/primitives/Title';

interface TeamMember {
  name: string;
  role: string;
  highlighted?: boolean;
}

const teamMembers: TeamMember[] = [
  { name: "Sœur Marie-Ange", role: "JOURNALISTE", highlighted: true },
  { name: "Nadine Kouassi", role: "CORRECTRICE" },
  { name: "Frère Pascal", role: "REPORTER" },
  { name: "Samuel Tchamda", role: "ANALYSTE" },
  { name: "Jean-Luc N'Diaye", role: "PHOTOGRAPHE" }
];

const EditorialTeam = () => {
  return (
    <Section className=" text-[#a5a0a0] bg-background px-6 py-16 lg:px-16">
      <Title className="mb-5">
        L'ÉQUIPE ÉDITORIALE
      </Title>
      
      <div className="mx-auto  rounded-3xl">
        <div className="flex flex-col md:flex-row justify-between rounded-3xl">
          
          {/* Colonne gauche - Infos équipe */}
          <div className="
            w-full md:w-1/2 lg:w-[60%] 
            bg-[#F8F8F8] p-6 md:p-10 
            rounded-t-3xl md:rounded-tr-none md:rounded-bl-3xl
            space-y-8
          ">
            {teamMembers.map((member, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium hover:text-primary">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base font-bold tracking-wide text-editorial-role">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Colonne droite - Image */}
          <div className="
            relative w-full md:w-1/2 lg:w-[40%] 
            overflow-hidden 
            rounded-b-3xl md:rounded-bl-none md:rounded-br-3xl
            bg-muted
            h-64 md:h-auto
          ">
            <Image
              src={'/assets/about/edition_image.png'}
              alt="Membre de l'équipe éditoriale"
              className="h-full w-full object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EditorialTeam;
