import ActualiteCard from "@/components/(public)/actualites/actualite-card";
import Title from "@/components/primitives/Title";
import { IRelatedActualite } from "@/features/actualite/types/actualite.type";
import { IEffata, IRelatedEffata } from "@/features/effata/types/effata.type";
import EffataCard from "../../effata/article-card";

type ConnectedNewsProps = {
  related: IRelatedActualite[] | IRelatedEffata[];
  orientation?: "horizontal" | "vertical";
  type?: "actualite" | "effata";
};

function AdditionalUpdates({
  related,
  orientation = "horizontal",
  type = "actualite",
}: ConnectedNewsProps) {
  return (
    <div className="lg:col-span-2 max-xl:px-2">
      <Title
        size="lg"
        as="h2"
        className="text-[#151515] uppercase mt-24 my-8 font-bebas"
      >
        Autres nouvelles
      </Title>
      {related.length > 0 ? (
        <ul className="space-y-4 grid">
          {related.map((item) => (
            <li key={item.id}>
              {type === "actualite" ? (
                <ActualiteCard orientation={orientation} actualite={item} />
              ) : (
                <EffataCard orientation={orientation} effata={item as IEffata} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">Aucune autre nouvelle disponible dans cette catégorie.</p>
      )}
    </div>
  );
}

export default AdditionalUpdates;
