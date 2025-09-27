import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, MapPin, User } from "lucide-react";
import Image from "next/image";

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
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 bg-card border">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <Avatar className="w-16 h-16 mx-auto mb-3">
            <AvatarImage
              src={contact.image}
              alt={contact.name}
              width={200}
              height={200}
            />
            <AvatarFallback className="bg-primary/10 text-primary">
              <User className="w-8 h-8" />
            </AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-foreground text-lg font-inter">
            {contact.name}
          </h3>
          <p className="text-sm  font-medium  text-[#0088FF] font-geist">
            {contact.title}
          </p>
          <p className="text-sm text-muted-foreground">{contact.diocese}</p>

          <div className="flex items-center justify-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-marker-color" />
            <span>{contact.location}</span>
          </div>
        </div>

        <div className="space-y-2 text-sm ">
          <div className="flex items-center rounded-2xl p-1 font-bold justify-center w-full text-center border-2 text-black ">
            <Phone className="w-4 h-4 mr-2 text-search-highlight" />
            <span className="">{contact.phone}</span>
          </div>

          <div className="flex items-center justify-center p-1.5 rounded-2xl w-full border-2 text-muted-foreground">
            <Mail className="w-4 h-4 mr-2 text-search-highlight" />
            <span className="text-sm break-all">{contact.email}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
