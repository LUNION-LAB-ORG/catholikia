import Section from '@/components/primitives/Section';
import React from 'react';

const LectioDivinaEtape = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 md:px-8 pb-12">
        
        {/* Card 1: Lectio */}
        <div className="bg-white text-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <span className="text-blue-600 text-xl">📖</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap">
                <h2 className="text-lg md:text-xl font-bold text-blue-600">Lectio</h2>
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

        {/* Card 2: Oratio */}
        <div className="bg-white text-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <span className="text-blue-600 text-xl">🙏</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap">
                <h2 className="text-lg md:text-xl font-bold text-blue-600">Oratio</h2>
                <span className="text-xs md:text-sm text-gray-500">(Prière)</span>
              </div>
              <p className="font-semibold text-gray-600 mt-1 text-sm md:text-base">
                DIALOGUE CONFIANT ET SPONTANÉ AVEC DIEU
              </p>
              <p className="mt-2 text-xs md:text-sm">
                La prière naît naturellement de la méditation. C&apos;est le dialogue personnel avec Dieu, 
                exprimant nos sentiments, nos demandes, notre gratitude inspirés par le texte.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Meditatio */}
        <div className="bg-white text-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <span className="text-yellow-600 text-xl">🧠</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap">
                <h2 className="text-lg md:text-xl font-bold text-blue-600">Meditatio</h2>
                <span className="text-xs md:text-sm text-gray-500">(Méditation)</span>
              </div>
              <p className="font-semibold text-gray-600 mt-1 text-sm md:text-base">
                RÉFLEXION PROFONDE ET RUMINATION SPIRITUELLE DU TEXTE
              </p>
              <p className="mt-2 text-xs md:text-sm">
                La méditation approfondit la lecture par la réflexion. C&apos;est le moment de &quot;ruminer&quot; la Parole, 
                de la laisser résonner dans notre cœur et notre intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Contemplatio */}
        <div className="bg-white text-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <span className="text-yellow-600 text-xl">✨</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start flex-wrap">
                <h2 className="text-lg md:text-xl font-bold text-blue-600">Contemplatio</h2>
                <span className="text-xs md:text-sm text-gray-500">(Contemplation)</span>
              </div>
              <p className="font-semibold text-gray-600 mt-1 text-sm md:text-base">
                REPOS SILENCIEUX EN LA PRÉSENCE DIVINE
              </p>
              <p className="mt-2 text-xs md:text-sm">
                La contemplation est un repos en Dieu, un moment de silence intérieur où l&apos;âme se laisse transformer 
                par la présence divine. C&apos;est l&apos;aboutissement de la Lectio Divina.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}

export default LectioDivinaEtape;
