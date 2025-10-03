export interface IContributeur {
    id: number;
    name: string;
    title: string;
    themes: string;
    biography: string;
    email: string;
    phone: string;
}

export interface IContributeurParams {
    id: number;
    name: string;
    title: string;
    themes: string;
    page: number;
    size: number;
}