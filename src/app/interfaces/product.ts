export interface Product {
    id: number;
    name?: string;
    description?: string;
    rating?: number;
    imageUrl?: string;
    link?: string;
    likes?: number;
    liked?: boolean;
}

export interface Category {
    name: string;
    products: Product[];
}
