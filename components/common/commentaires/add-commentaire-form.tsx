"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CommentaireFormDto, CommentaireFormSchema } from '@/features/commentaire/commentaire.schema';
import { useAjouterCommentaireMutation } from '@/features/commentaire/queries/commentaire.mutation';
import { Button } from "@heroui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CommentairesProps } from ".";

function AddCommentaireForm({
  entityId,
  entityType,
}: CommentairesProps) {
  const form = useForm<CommentaireFormDto>({
    resolver: zodResolver(CommentaireFormSchema),
    defaultValues: {
      nom: "",
      email: "",
      message: "",
    }
  });

  const {
    mutateAsync: ajouterCommentaire,
    isPending: isAddingCommentaire,
  } = useAjouterCommentaireMutation();

  function onSubmit(data: CommentaireFormDto) {
    const dataToSubmit = {
      ...data,
      entityId,
      entityType,
    };
    ajouterCommentaire(dataToSubmit)
      .then(() => {
        form.reset();
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4 sm:w-1/2 md:1/3 ">
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-start">
          <FormField
            disabled={isAddingCommentaire}
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nom & Prénoms</FormLabel>
                <FormControl>
                  <Input className="bg-white rounded-full border border-[#E1D7BB] w-full" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            disabled={isAddingCommentaire}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="bg-white rounded-full border border-[#E1D7BB] w-full" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          disabled={isAddingCommentaire}
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Commentaire</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  className="bg-white rounded-2xl border border-[#E1D7BB]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Button isLoading={isAddingCommentaire} color="primary" type="submit" className="font-bold rounded-full px-10 py-4">Envoyer</Button>
      </form>
    </Form>
  );
}

export default AddCommentaireForm;