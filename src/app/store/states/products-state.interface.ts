import { CollectionList } from "app/shared/interfaces/collections/collection-list.interface";
import { Order } from "app/shared/interfaces/orders/order.interface";
import { ProductList } from "app/shared/interfaces/products/product-list.interface";
import { SearchResponse } from "app/shared/interfaces/search-response.interface";

export interface ProductsState {
    collections: CollectionList;
    products: SearchResponse;
    activeOrder: Order;
    totalItems: number
}