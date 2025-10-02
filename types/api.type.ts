export enum SortOrder {
    ASC = 'asc',
    DESC = 'desc'
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface LaravelPaginationLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface LaravelPaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface LaravelPaginatedResponse<T> {
    data: T[];
    links: LaravelPaginationLinks;
    meta: LaravelPaginationMeta;
}

export interface PaginatedResponse<T> {
    data: T[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }
}

export interface ActionResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}