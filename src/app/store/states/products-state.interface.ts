import { Product } from "app/shared/interfaces/products/product.interface";

export interface ProductsState {
    products: any[];
    product: Product;
    totalItems: number
}