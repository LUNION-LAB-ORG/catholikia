import React from 'react';
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import AddCommentaireForm from './add-commentaire-form';
import { CommentairesProps } from '.';

function AddCommentaireSection({ entityId, entityType }: CommentairesProps) {
	return (
		<Section className="bg-[#151515]/15 mt-32">
			<div className="custom-container">
				<Title as="h2" className="text-[#252220] uppercase">
					dites quelque chose
				</Title>
				<AddCommentaireForm
					entityId={entityId}
					entityType={entityType}
				/>
			</div>
		</Section>
	);
}

export default AddCommentaireSection;