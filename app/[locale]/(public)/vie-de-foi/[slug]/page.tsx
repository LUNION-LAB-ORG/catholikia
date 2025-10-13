import VideoTestimonialModal from '@/components/(public)/vie-de-foi/video-testimonial-modal';
import Content from '@/components/primitives/Content';
import Section from '@/components/primitives/Section';
import Title from '@/components/primitives/Title';
import { Button } from '@/components/ui/button';
import { obtenirTemoignageParIdAction } from '@/features/vie-de-foi/actions/vie-de-foi.action';
import { Divider } from '@heroui/react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default async function VieDeFoiDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data, success, error, message } = await obtenirTemoignageParIdAction(Number(slug))
  const testimonial = data;

  if (error) {
    return <Section className="text-red-500 flex items-center justify-center">Erreur lors du chargement du témoignage. {message}</Section>;
  }

  if (!success || !testimonial) {
    return <Section className="text-red-500 flex items-center justify-center">Erreur lors du chargement du témoignage. {message}</Section>;
  }
  return (
    <Content className="flex flex-col items-center space-y-6 mt-[4rem]">
      <div>
        <div className="size-80 rounded-lg overflow-hidden">
          <Image
            src={testimonial.photo || "/images/default-avatar.png"}
            alt={testimonial.temoin || "Photo de témoignage"}
            className="w-full h-full object-cover"
            width={200}
            height={200}
          />
        </div>
        <Title
          className="text-2xl py-5 w-full sm:text-3xl text-primary uppercase tracking-wide text-center font-normal"
        >
          {testimonial.temoin}
        </Title>
      </div>
      <Divider className="w-full" />
      <div className="space-y-6 w-full px-1 sm:px-4 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
        {/* À propos */}
        <div>
          <div className="text-lg sm:text-xl font-bold mb-3">
            <Title as="h2" className="font-bebas">À propos</Title>
          </div>
          <p className="font-bold leading-relaxed mt-1">
            {testimonial.about}
          </p>
        </div>

        {/* Réalisations */}
        <div>
          <div className="text-lg sm:text-xl font-bold mb-3">
            <Title as="h2" className="font-bebas">Réalisations</Title>
          </div>
          {(
            <ul className="list-disc text-start space-y-1 mt-2 pl-4 sm:pl-6 text-[#595959]">
              {testimonial.realisations?.map((point, idx) => (
                <li
                  key={idx}
                  className="leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
          <VideoTestimonialModal testimonial={testimonial} />
        </div>

        <div className="flex justify-center lg:justify-start mt-4">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full uppercase tracking-wide">
            <Link href={testimonial.video_link ?? "#"} target="_blank" rel="noopener noreferrer">
              Regarder la vidéo
            </Link>
          </Button>
        </div>
      </div>
    </Content>
  )
}
