// components/LectioDivina.tsx

import Section from '@/components/primitives/Section';
import Title from '@/components/primitives/Title';
import Image from 'next/image';

export default function LectioDivina() {
  return (
    <Section className="text-white font-sans">
      {/* Header */}
      <div className="text-center py-6 px-4">
        <Title className="text-3xl md:text-4xl font-bold uppercase tracking-wider">
          Les 4 Étapes de la Lectio Divina
        </Title>
      </div>

      {/* Main Image Section */}
      <div className="relative h-[50vh] md:h-[70vh] lg:h-[90vh] w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-8">
        <Image
          src="/assets/lectio/lectio_etape.jpg"
          alt="Livre ouvert tenu par des mains"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 bg-black/40 flex items-center justify-center p-4 md:p-6">
          <p className="text-sm md:text-lg lg:text-2xl font-bold leading-relaxed ">
            Un cheminement progressif qui nous mène de la lecture à la contemplation, 
            dans une rencontre transformante avec la Parole de Dieu.
          </p>
        </div>
      </div>
    </Section>
  );
}
