import { Order } from "app/shared/interfaces/orders/order.interface";
import { Product } from "app/shared/interfaces/products/product.interface";

export interface ProductsState {
    products: Product[];
    activeOrder: Order;
    totalItems: number
}