"use client"
import { ICommentaire } from '@/features/commentaire/commentaire.type';
import { Avatar } from "@heroui/react";
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

function CommentaireItem({ commentaire }: { commentaire: ICommentaire }) {
  return (
    <div className="border border-[#DEDEDE] rounded-3xl px-6 py-8">
      <div className="flex items-center">
        <Avatar
          name={commentaire.fullname}
        />
        <div className="ml-4">
          <p className="text-[#1D1D1D] font-semibold">{commentaire.fullname}</p>
          <p className="text-sm text-[#968B87]">{formatDistanceToNow(commentaire.created_at, { locale: fr })}</p>
        </div>
      </div>
      <div className="mt-4 text-[#252628]">
        <p>
          {commentaire.comments}
        </p>
      </div>
    </div>
  );
}

export default CommentaireItem;