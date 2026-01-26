import LectioDetailsContent from '@/components/(public)/lectio-divina/details'
import Publicite from '@/components/(public)/publicites'
import CommentairesSection from '@/components/common/commentaires'
import MissionSignup from '@/components/don/MissionSignup'
import Content from '@/components/primitives/Content'
import React from 'react'
import {Metadata} from "next";
import {obtenirLectioParIdAction} from "@/features/lectio-divina/actions/lectio.action";
import {removeHtmlTags} from "@/utils/html-to-text";

type Props = {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const id = (await params).id;
  const data = await obtenirLectioParIdAction(id);
  const lectio = data.data || null;

  const description = removeHtmlTags(lectio?.lecture).slice(0, 160);

  return {
    title: `${lectio ? lectio.lithurgy_time : 'Effata'}`,
    description: description,
    keywords: ['lectio divina', 'vie de foi', 'méditation', 'prière', 'évangile', 'lecture spirituelle'],
    openGraph: {
      title: `${lectio ? lectio.lithurgy_time : 'Effata'}`,
      description: description,
      url: `https://www.catholikia.com/lectio-divina/${id}`,
      siteName: "Catholikia",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: lectio?.image || "https://www.catholikia.com/og-image.jpg",
          width: 800,
          height: 600,
          alt: lectio?.lithurgy_time,
        }
      ],
    },
  }
}

export default async function LectioDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  return (
    <Content fullWidth className="mt-[4rem]">
      <Publicite position="EFFATA_DETAILS_TOP" />
      <LectioDetailsContent id={id} />
      <CommentairesSection
        entityId={id}
        entityType="lexio_divinas"
      />
      <MissionSignup />
    </Content>
  )
}
