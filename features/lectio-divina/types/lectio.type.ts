import { IContributor } from "@/features/tribunes/types/tribunes.type";

export interface ILectio {
    id: string;
    reference_text: string;
    lithurgy_time: string;
    lecture: string;
    homelie: string;
    image: string;
    published_at: string;
    contributor: IContributor;
    created_at: string;
}

export interface ILectioSearchParams {
    lithurgy_time?: string;
    reference_text?: string;
    contributor?: string;
    published_at?: string;
    page: number;
    size: number;
    skip?: number;
}