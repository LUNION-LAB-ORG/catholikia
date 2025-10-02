"use client";

import Title from "@/components/primitives/Title";
import Image from "next/image";

export default function LectioDivinas() {
  return (
    <section className=" text-white font-sans px-4 md:px-8 lg:px-16 py-10">
      {/* Titre */}
      <div className="text-center text-black mb-6">
        <Title className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider">
          Les 4 Étapes de la Lectio Divina
        </Title>
      </div>

      {/* Image principale avec overlay */}
      <div className="relative h-[50vh] md:h-[65vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden shadow-2xl mb-10">
        <Image
     src="/assets/lectio/lectio_etape.jpg"// ⚡ change avec ton image réelle
          alt="Livre ouvert"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-0 w-full bg-black/60 text-start px-4 py-4">
          <p className="text-sm md:text-lg lg:text-xl font-semibold leading-relaxed max-w-4xl mx-auto">
            Un cheminement progressif qui nous mène de la lecture à la contemplation, 
            dans une rencontre transformante avec la Parole de Dieu.
          </p>
        </div>
      </div>

      {/* Grille des 4 étapes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition h-full flex flex-col">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <span className="text-blue-600 text-xl">📖</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap">
                <h3 className="text-lg md:text-xl font-bold text-blue-600">Lectio</h3>
                <span className="text-xs md:text-sm text-gray-500">(Lecture)</span>
              </div>
              <p className="font-semibold text-gray-600 mt-1 text-sm md:text-base">
                LECTURE ATTENTIVE ET RESPECTUEUSE DU TEXTE BIBLIQUE
              </p>
              <p className="mt-2 text-xs md:text-sm">
                La première étape consiste à lire lentement et attentivement le passage biblique choisi. 
                Il s&apos;agit d&apos;une lecture répétée, permettant aux mots de pénétrer l&apos;esprit et le cœur.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition h-full flex flex-col">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <span className="text-blue-600 text-xl">🙏</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap">
                <h3 className="text-lg md:text-xl font-bold text-blue-600">Oratio</h3>
                <span className="text-xs md:text-sm text-gray-500">(Prière)</span>
              </div>
              <p className="font-semibold text-gray-600 mt-1 text-sm md:text-base">
                DIALOGUE CONFIANT ET SPONTANÉ AVEC DIEU
              </p>
              <p className="mt-2 text-xs md:text-sm">
                La prière naît naturellement de la méditation. 
                C&apos;est le dialogue personnel avec Dieu, exprimant nos sentiments, nos demandes, 
                notre gratitude inspirés par le texte.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition h-full flex flex-col">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <span className="text-yellow-600 text-xl">🧠</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap">
                <h3 className="text-lg md:text-xl font-bold text-blue-600">Meditatio</h3>
                <span className="text-xs md:text-sm text-gray-500">(Méditation)</span>
              </div>
              <p className="font-semibold text-gray-600 mt-1 text-sm md:text-base">
                RÉFLEXION PROFONDE ET RUMINATION SPIRITUELLE DU TEXTE
              </p>
              <p className="mt-2 text-xs md:text-sm">
                La méditation approfondit la lecture par la réflexion. 
                C&apos;est le moment de &quot;ruminer&quot; la Parole, 
                de la laisser résonner dans notre cœur et notre intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition h-full flex flex-col">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <span className="text-yellow-600 text-xl">✨</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap">
                <h3 className="text-lg md:text-xl font-bold text-blue-600">Contemplatio</h3>
                <span className="text-xs md:text-sm text-gray-500">(Contemplation)</span>
              </div>
              <p className="font-semibold text-gray-600 mt-1 text-sm md:text-base">
                REPOS SILENCIEUX EN LA PRÉSENCE DIVINE
              </p>
              <p className="mt-2 text-xs md:text-sm">
                La contemplation est un repos en Dieu, un moment de silence intérieur 
                où l&apos;âme se laisse transformer par la présence divine. 
                C&apos;est l&apos;aboutissement de la Lectio Divina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
