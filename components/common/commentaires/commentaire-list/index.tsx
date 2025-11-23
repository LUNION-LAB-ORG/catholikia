"use client";
import React from 'react';
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import CommentaireItem from './commentaire-item';
import { CommentairesProps } from '..';
import useCommentaireListQuery from '@/features/commentaire/queries/commentaire-list.query';

function CommentaireList({
	entityId,
	entityType
}: CommentairesProps) {
	const {
		data
	} = useCommentaireListQuery({
		entityId,
		entityType
	});

	const commentaires = data?.data;

	return (
		<Section>
			<div className="custom-container">
				<Title as="h2" className="text-[#252220] uppercase mb-8">
					Autres Commentaires
				</Title>
				{commentaires && commentaires.length > 0 ? (
					<div className="grid md:grid-cols-2 gap-9">
						{commentaires.map((commentaire) => (
							<CommentaireItem key={commentaire.id} commentaire={commentaire} />
						))}
					</div>
				) : (
					<p>Soyez le premier à commenter !</p>
				)}
			</div>
		</Section>
	);
}

export default CommentaireList;