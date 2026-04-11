BannerCulturama'use client'

import Image from 'next/image'

export default function BannerCulturama() {
  return (
    <div className="w-full bg-red-600 overflow-hidden">
      
      <div className="
        max-w-7xl mx-auto
        flex flex-col md:flex-row items-center
        justify-between
        px-4 sm:px-6 md:px-10 lg:px-16
        py-4 md:py-6
        gap-4
      ">

        {/* 🎟️ Icône gauche */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/cuturama/vector_cuturama.png"
            alt="ticket"
            width={120}
            height={120}
            className="
              object-contain
              w-16 h-16
              sm:w-20 sm:h-20
              md:w-24 md:h-24
            "
          />
        </div>

        {/* 📝 Texte */}
        <div className="
          text-white font-bold
          text-center md:text-left
          text-sm sm:text-base md:text-lg lg:text-xl
          leading-tight md:leading-snug
          max-w-2xl
        ">
          Bien plus qu'une billetterie, <span className="uppercase">CULTURAMA</span> est le pont entre vos idées et votre communauté.
          <br className="hidden sm:block" />
          Profitez d'une interface intuitive pour transformer chaque projet en un succès mémorable.
        </div>

        {/* 🌿 Image droite */}
        <div className="
          relative
          w-full md:w-auto
          flex justify-center md:justify-end
        ">
          <div className="
            overflow-hidden
            rounded-tl-2xl
            w-32 h-20
            sm:w-40 sm:h-24
            md:w-48 md:h-28
          ">
            <Image
              src="/assets/cuturama/ariso.png"
              alt="decor"
              width={200}
              height={120}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </div>
  )
}