import React from 'react';
import AddCommentaireSection from './add-commentaire-section';
import CommentaireList from './commentaire-list';
import { IEntity } from '@/features/commentaire/commentaire.type';

export type CommentairesProps = {
  entityId: IEntity['entityId'];
  entityType: IEntity['entityType'];
}

function CommentairesSection({
  entityId,
  entityType,
}: CommentairesProps) {
  return (
    <>
      <AddCommentaireSection
        entityId={entityId}
        entityType={entityType}
      />
      <CommentaireList
        entityId={entityId}
        entityType={entityType}
      />
    </>
  );
}

export default CommentairesSection;