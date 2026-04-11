export type Category = "Tous" | "Concerts" | "Cinéma" | "Pèlerinage";

export interface TicketType {
    id: string;
    name: string;
    price: number;
}

export interface CuturamaEvent {
    id: string;
    slug: string;
    title: string;
    category: Exclude<Category, "Tous">;
    image: string;
    location: string;
    city: string;
    date: string;
    time: string;
    organizer: string;
    organizerDescription?: string;
    price: string;
    description?: string;
    ticketTypes?: TicketType[];
    mapEmbedUrl?: string;
}

export interface CategoryOption {
    label: Category;
    image?: string;
}

export interface CartItem {
    ticket: TicketType;
    quantity: number;
}
