import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Mail, MapPin, Phone, User} from "lucide-react";
import {IDiocese} from "@/features/diocese/types/diocese.type";

export interface Contact {
  id: string;
  name: string;
  title: string;
  diocese: string;
  region: string;
  phone: string;
  email: string;
  image: string;
  location: string;
}

interface ContactCardProps {
  diocese: IDiocese;
}

export const ContactCard = ({ diocese }: ContactCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 bg-card border">
      <CardContent className="p-5">
        <div className="text-center mb-4">
          <Avatar className="size-28 mx-auto mb-3">
            <AvatarImage
              src={diocese.image}
              alt={diocese.nom}
              width={200}
              height={200}
            />
            <AvatarFallback className="bg-primary/10 text-primary">
              <User className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1.5">
            <h3 className="font-semibold text-foreground text-lg font-inter">
              {diocese.representant.rang}
              {" "}
              {diocese.representant.nom}
            </h3>
            <p className="text-sm  font-medium  text-[#0088FF] font-geist">
              {diocese.representant.titre}
            </p>
            <p className="text-sm text-muted-foreground">{diocese.nom}</p>
          </div>

          <div className="flex items-center justify-center text-muted-foreground mt-4">
            <MapPin className="size-5 mr-1 text-marker-color" />
            <span>{diocese.ville}</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center rounded-2xl p-1 font-bold justify-center w-full text-center border-2 text-black ">
            <Phone className="size-5 mr-2 text-search-highlight" />
            <span className="">{diocese.contact}</span>
          </div>

          <div className="flex items-center justify-center p-1.5 rounded-2xl w-full border-2 text-muted-foreground">
            <Mail className="size-5 mr-2 text-search-highlight" />
            <span className="text-sm break-all">{diocese.email}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
