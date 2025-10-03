"use client";
import LoadingIndicator from '@/components/common/LoadingIndicator';
import Section from '@/components/primitives/Section'
import Title from '@/components/primitives/Title';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTribuneQuery } from '@/features/tribunes/queries/tribune-detail.query'
import { dateFormat } from '@/utils/date-utils';
import { Link } from '@heroui/link';
import { Avatar } from '@heroui/react';
import { Calendar } from 'lucide-react'
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

export default function TribuneDetailsContent({ slug }: { slug: string }) {
  const { data: tribune, isLoading, isError } = useTribuneQuery(slug);
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <div>Erreur lors du chargement de la tribune.</div>;
  }

  if (!tribune) {
    return notFound();
  }

  return (
    <Section className='mt-10 custom-container'>
      <div className="flex items-center text-sm mb-10">
        {/* TODO: Color non fonctionnel */}
        <Badge className="rounded-full text-sm bg-[#BEFFFF] px-4 mr-2">{tribune.theme || "theme"}</Badge>
        <span className="ml-2 text-[#6B7280] inline-flex items-center text-sm tracking-normal">
          <Calendar className='size-4 mr-2' />
          {dateFormat(tribune.published_at)}
        </span>
      </div>
      <Title className='font-normal mb-5'>
        {tribune.titre}
      </Title>
      <div className='flex items-center mb-5'>
        <Avatar
          className='mr-5'
          showFallback
          name={tribune.author}
          src="https://images.unsplash.com/broken"
          size='lg'
        />
        <div>
          <p className='font-bold text-2xl text-[#151515]'>{tribune.author}</p>
          <p className='text-base text-[#595959] font-bold'>Archevêque de Saint-Michel</p>
        </div>
      </div>
      <div className='relative w-full h-screen mb-10 rounded-4xl overflow-hidden'>
        <Image
          src={`https://finance.christaxel.me/${tribune.image}`}
          alt={tribune.titre}
          fill
          className='object-cover w-full h-full rounded-lg'
        />
      </div>
      <div className="prose max-w-none text-justify" dangerouslySetInnerHTML={{ __html: tribune.contenu }} />
      {/*<div className='flex justify-end mt-16'>*/}
      {/*  <Button className='text-[#1D1D1D] rounded-full text-base' variant='outline' asChild>*/}
      {/*    <Link href={`/auteur/${tribune.author}`}>*/}
      {/*      Voir le profil de {tribune.author}*/}
      {/*    </Link>*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </Section>
  )
}
