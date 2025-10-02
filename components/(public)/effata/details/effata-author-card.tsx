import React from 'react';
import Image from "next/image";
import { Button } from "@heroui/button";
import { IEffata } from '@/features/effata/types/effata.type';
interface Props {
  author?: IEffata['auteur'];
}

const EffataAuthorCard = ({ author }: Props) => {
  return (
    <div className="max-w-sm mx-auto bg-[#F7F7F7] rounded-2xl overflow-hidden">
      {/* Photo de profil */}
      <div className="pb-4">
        <div className="relative w-full aspect-square overflow-hidden mb-4">
          <img
            src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${author?.name}`}
            alt={author?.name || "Author Avatar"}
            className="h-full w-full"
          />
        </div>
        <div className="px-6 text-center">
          {/* Nom */}
          <h3 className="text-lg font-medium font-sans text-[#1D1D1D] text-center mb-6">
            Anna Marie
          </h3>

          {/* Bouton */}
          {/* <Button
            variant="solid"
            className="text-sm uppercase w-full bg-primary hover:bg-primary-200 text-[#151515] font-bold py-3 px-6 rounded-full transition-colors duration-200"
          >
            Voir le profil
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default EffataAuthorCard;