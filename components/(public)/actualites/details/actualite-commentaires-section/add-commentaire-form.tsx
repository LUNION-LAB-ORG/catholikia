"use client";

import React from 'react';
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@heroui/button";
import {zodResolver} from "@hookform/resolvers/zod";

// TODO: Deplacer dans les types
const addCommentaireFormSchema = z.object({
	fullname: z.string().optional(),
	commentaire: z.string()
		.min(5, {error: "Le commentaire doit contenir au moins 5 caractères"})
		.max(500, {error: "Le commentaire ne peut pas dépasser 500 caractères"}),
})

type AddCommentaireDto = z.infer<typeof addCommentaireFormSchema>;

function AddCommentaireForm() {
	const form = useForm<AddCommentaireDto>({
		resolver:zodResolver(addCommentaireFormSchema),
		defaultValues: {
			fullname: "",
			commentaire: "",
		}
	});

	function onSubmit(data: AddCommentaireDto) {
		console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4 sm:w-1/2 md:1/3 ">
				<FormField
					control={form.control}
					name="fullname"
					render={({field}) => (
						<FormItem>
							<FormLabel>Nom & Prénoms (Optionnel)</FormLabel>
							<FormControl>
								<Input className="bg-white rounded-full border border-[#E1D7BB]" {...field} />
							</FormControl>
							<FormMessage/>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="commentaire"
					render={({field}) => (
						<FormItem>
							<FormLabel>Commentaire</FormLabel>
							<FormControl>
								<Textarea
									rows={4}
									className="bg-white rounded-2xl border border-[#E1D7BB]"
									{...field}
								/>
							</FormControl>
							<FormMessage/>
						</FormItem>
					)}
				/>
				<Button color="primary" type="submit" className="font-bold rounded-full px-10 py-4">Envoyer</Button>
			</form>
		</Form>
	);
}

export default AddCommentaireForm;