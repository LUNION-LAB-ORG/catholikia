"use client"
import React from 'react';
import {Avatar} from "@heroui/react";

function CommentaireItem() {
	return (
		<div className="border border-[#DEDEDE] rounded-3xl px-6 py-8">
			<div className="flex items-center">
				<Avatar
					src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
				/>
				<div className="ml-4">
					<p className="text-[#1D1D1D] font-semibold">Jean Dupont</p>
					<p className="text-sm text-[#968B87]">12 Octobre 2023</p>
				</div>
			</div>
			<div className="mt-4 text-[#252628]">
				<p>
					C'est une excellente initiative ! J'apprécie vraiment les efforts déployés pour
					sensibiliser la communauté à cette cause importante. Continuez votre bon travail !
				</p>
			</div>
		</div>
	);
}

export default CommentaireItem;