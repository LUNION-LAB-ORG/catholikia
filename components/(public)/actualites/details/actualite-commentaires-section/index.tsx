import React from 'react';
import AddCommentaireSection
	from "@/components/(public)/actualites/details/actualite-commentaires-section/add-commentaire-section";
import CommentaireList from "@/components/(public)/actualites/details/actualite-commentaires-section/commentaire-list";

function ActualiteCommentairesSection() {
	return (
		<>
			<AddCommentaireSection/>
			<CommentaireList/>
		</>
	);
}

export default ActualiteCommentairesSection;