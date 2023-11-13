import { Product } from "./product.interface";

export interface ProductList {
    items: Product[];
    totalItems: number;
}