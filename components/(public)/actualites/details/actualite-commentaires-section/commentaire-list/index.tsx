import React from 'react';
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import CommentaireItem
	from "@/components/(public)/actualites/details/actualite-commentaires-section/commentaire-list/commentaire-item";

function CommentaireList() {
	return (
		<Section>
			<div className="custom-container">
				<Title as="h2" className="text-[#252220] uppercase mb-8">
					Autres Commentaires
				</Title>
				<div className="grid md:grid-cols-2 gap-9">
					<CommentaireItem/>
					<CommentaireItem/>
					<CommentaireItem/>
					<CommentaireItem/>
				</div>
			</div>
		</Section>
	);
}

export default CommentaireList;