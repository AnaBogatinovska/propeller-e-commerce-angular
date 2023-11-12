import { Injectable } from "@angular/core";
import { ProductListOptions } from "../interfaces/products/product-list-options.interface";
import { GET_PRODUCT_BY_ID, GET_PRODUCT_LIST } from 'app/graphql/products.queries';
import { ApolloService } from "app/shared/services/apollo.service";

@Injectable({ providedIn: 'root' })
export class ProductsService {

    constructor(private apolloService: ApolloService) {}

    public getProducts(opts?: ProductListOptions){
        const data = {
          query: GET_PRODUCT_LIST,
          variables: { opts }
        };
        return this.apolloService.query(data);
    }

    public getProductById(id: number){
        const data = {
          query: GET_PRODUCT_BY_ID,
          variables: { id }
        };
        return this.apolloService.query(data);
    }
}