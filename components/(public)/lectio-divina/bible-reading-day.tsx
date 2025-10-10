'use client'
import Section from "@/components/primitives/Section";
import { ILectio } from "@/features/lectio-divina/types/lectio.type";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";

export default function BibleReadingDay({ lectio }: { lectio: ILectio }) {
  return (
    <Section className="bg-white shadow-none text-gray-800 font-sans custom-container">
      <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden w-full">
        <Image
          src="/images-examples/actualites/3.jpg"
          alt="Description de l'image"
          fill
          className="object-cover object-center"
        />
      </div>
      {/* Main Content - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-300 rounded-lg bg-[#F5F5F5] p-4 min-h-[300px]">
          <div className="max-h-80 overflow-hidden" dangerouslySetInnerHTML={{ __html: lectio.lecture }} />
          <Button
            size="sm"
            as={Link} href={`/lectio-divina/${lectio.id}`}
            className="mt-4 rounded-full bg-white border border-[#151515] uppercase font-bold px-6" variant="solid"
          >
            suite
          </Button>
        </div>
        <div className="border bg-[#F5F5F5] rounded-lg p-4">
          <div className="max-h-80 overflow-hidden" dangerouslySetInnerHTML={{ __html: lectio.homelie }} />
          <div className="font-bold mt-4 text-right">
            Commenté par {lectio.contributor.title} {lectio.contributor.name}
          </div>
        </div>
      </div>
    </Section>
  );
}
