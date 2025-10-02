// components/BibleReadingDay.tsx
'use client'
import { useState } from "react";
import Title from "@/components/primitives/Title";
import { Textarea } from "@heroui/input";
import { FaChevronLeft, FaChevronRight, FaCross } from "react-icons/fa";
import Section from "@/components/primitives/Section";

export default function BibleReadingDay() {
  const [showFullLecture, setShowFullLecture] = useState(false);
  const [showFullHomelie, setShowFullHomelie] = useState(false);

  // === Texte Lecture ===
  const lectureFull = `« Encore un peu de temps, et j’emplirai de gloire cette Maison » (Ag 1, 15b – 2, 9)
Lecture du livre du prophète Aggée

La deuxième année du règne de Darius,
   le vingt et unième jour du septième mois,
la parole du Seigneur se fit entendre
par l’intermédiaire du prophète Aggée :
   « Va parler à Zorobabel, fils de Salathiel, gouverneur de Juda,
à Josué, fils de Josédeq, le grand prêtre, et au reste du peuple.
Tu leur diras :
   Reste-t-il encore parmi vous
quelqu’un qui ait vu cette Maison
dans sa gloire première ?
Eh bien ! Qu’est-ce que vous voyez maintenant ?
N’est-elle pas devant vous réduite à rien ?
   Mais à présent, courage, Zorobabel !
– oracle du Seigneur.
Courage, Josué fils de Josédeq, grand prêtre !
Courage, tout le peuple du pays !
– oracle du Seigneur.
Au travail ! Je suis avec vous
– oracle du Seigneur de l’univers –,
   selon l’engagement que j’ai pris envers vous
à votre sortie d’Égypte.
Mon esprit se tient au milieu de vous :
Ne craignez pas !
   Encore un peu de temps
– déclare le Seigneur de l’univers –,
et je vais ébranler le ciel et la terre,
la mer et la terre ferme.
   Je vais mettre en branle toutes les nations,
leurs trésors afflueront ici,
et j’emplirai de gloire cette Maison
– déclare le Seigneur de l’univers.
   L’argent est à moi, l’or est à moi
– oracle du Seigneur de l’univers.
   La gloire future de cette Maison
surpassera la première
et dans ce lieu, je vous ferai don de la paix,
– oracle du Seigneur de l’univers. »

– Parole du Seigneur`;

  const lectureShort = lectureFull.slice(0, 400) + " ...";

  // === Texte Homélie ===
  const homelieFull = `L'Éternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles. Il restaure mon âme, Il me conduit dans les sentiers de la justice, à cause de son nom. Quand je marche dans la vallée de l'ombre de la mort, Je ne crains aucun mal, car tu es avec moi: Ta houlette et ton bâton me rassurent. Tu dresses devant moi une table, en face de mes adversaires; Tu oins d'huile ma tête, et ma coupe déborde. Oui, le bonheur et la grâce m'accompagneront tous les jours de ma vie, et j'habiterai dans la maison de l'Éternel jusqu'à la fin de mes jours.
L'Éternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles. Il restaure mon âme, Il me conduit dans les sentiers de la justice, à cause de son nom. Quand je marche dans la vallée de l'ombre de la mort, Je ne crains aucun mal, car tu es avec moi: Ta houlette et ton bâton me rassurent. Tu dresses devant moi une table, en face de mes adversaires; Tu oins d'huile ma tête, et ma coupe déborde. Oui, le bonheur et la grâce m'accompagneront tous les jours de ma vie, et j'habiterai dans la maison de l'Éternel jusqu'à la fin de mes jours.
L'Éternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles. Il restaure mon âme, Il me conduit dans les sentiers de la justice, à cause de son nom. Quand je marche dans la vallée de l'ombre de la mort, Je ne crains aucun mal, car tu es avec moi: Ta houlette et ton bâton me rassurent. Tu dresses devant moi une table, en face de mes adversaires; Tu oins d'huile ma tête, et ma coupe déborde. Oui, le bonheur et la grâce m'accompagneront tous les jours de ma vie, et j'habiterai dans la maison de l'Éternel jusqu'à la fin de mes jours.`;

  const homelieShort = homelieFull.slice(0, 350) + " ...";

  return (
    <Section className="bg-white shadow-none text-gray-800 font-sans  lg:px-20 mx-auto p-4 md:p-6">
      {/* Header */}
     

      {/* Main Content - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Lecture */}
        <div className="border border-gray-300 rounded-lg bg-[#F5F5F5] p-4">
          <h2 className="text-xl font-semibold text-center mb-3">Lecture</h2>
          <p className="text-sm text-gray-600 mb-3">Première lecture</p>
          <p className="text-sm leading-relaxed whitespace-pre-line mb-4 px-3">
            {showFullLecture ? lectureFull : lectureShort}
          </p>
          <button
            onClick={() => setShowFullLecture(!showFullLecture)}
            className="mt-2 px-4 py-2 ring-1 text-sm rounded-3xl cursor-pointer hover:bg-blue-600 hover:text-white transition"
          >
            {showFullLecture ? "Lire moins" : "Lire la suite"}
          </button>
        </div>

        {/* Homélie */}
        <div className="border bg-[#F5F5F5] rounded-lg p-4">
          <h2 className="text-xl font-semibold text-center mb-3">Homélie</h2>
          <p className="text-sm leading-relaxed whitespace-pre-line mb-4">
            {showFullHomelie ? homelieFull : homelieShort}
          </p>
          <button
            onClick={() => setShowFullHomelie(!showFullHomelie)}
            className="mt-2 px-4 py-2 ring-1 text-sm rounded-3xl cursor-pointer hover:bg-blue-600 hover:text-white transition"
          >
            {showFullHomelie ? "Lire moins" : "Lire la suite"}
          </button>
          <span className="font-bold block mt-3">
            Commenté par le Père Jean-Pierre Koutouan
          </span>
        </div>
      </div>

      {/* Prayer Section */}
      <div className="hover:bg-blue-50 hover:border-l-4 bg-[#F5F5F5] hover:border-blue-400 p-4 rounded mb-6">
        <Textarea
          className="lg:py-16 border-b-1 border-black"
          placeholder="Écrire un commentaire"
          size="lg"
        />
        <button type="submit" className="p-2 ring-1 mt-5 rounded-3xl">
          Soumettre
        </button>
      </div>
    </Section>
  );
}
