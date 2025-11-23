import LectioDetailsContent from '@/components/(public)/lectio-divina/details'
import Publicite from '@/components/(public)/publicites'
import CommentairesSection from '@/components/common/commentaires'
import MissionSignup from '@/components/don/MissionSignup'
import Content from '@/components/primitives/Content'
import React from 'react'

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
