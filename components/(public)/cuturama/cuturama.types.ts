export type Category = "Tous" | "Concerts" | "Cinéma" | "Pèlerinage";

export interface AdSpot {
    id: string;
    title: string;
    description: string;
    image: string;
    linkUrl: string | null;
    position: string;
}

export interface TicketType {
    id: string;
    name: string;
    price: number;
    capacity: number;
    sold: number;
    remaining: number;
}

export interface CuturamaEvent {
    id: string;
    slug: string;
    title: string;
    category: string;
    image: string;
    location: string;
    city: string;
    date: string;
    time: string;
    organizer: string;
    organizerDescription: string | null;
    price: string | null;
    description: string;
    mapEmbedUrl: string | null;
    adSpots: AdSpot[];
    ticketTypes: TicketType[];
}

export interface CategoryOption {
    label: Category;
    image?: string;
}

export interface CartItem {
    ticket: TicketType;
    quantity: number;
}
