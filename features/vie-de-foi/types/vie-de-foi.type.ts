
export interface ITemoignage {
    id: number;
    temoin: string; // witness / author name
    profession?: string;
    photo?: string; // url
    about?: string; // short about text
    contenu?: string; // html content
    inspirant?: boolean | string; // API may return boolean or strings like "TRUE"/"FALSE"
    lieu?: string;
    realisations?: string[];
    category?: string;
    annee_experience?: string;
    video_link?: string;
    video_description?: string;
    published_at?: string; // ISO datetime string
}

export interface ITemoignageParams {
    page?: number;
    size?: number;
    skip?: number;
    temoin?: string;
    profession?: string;
    category?: string;
    lieu?: string;
    inspirant?: boolean | string;
}