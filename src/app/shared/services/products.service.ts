import { Injectable } from "@angular/core";
import { ProductListOptions } from "../interfaces/products/product-list-options.interface";
import { GET_PRODUCT_LIST } from 'app/graphql/products.queries';
import { ApolloService } from "app/shared/services/apollo.service";

@Injectable({ providedIn: 'root' })
export class ProductsService {

    constructor(private apolloService: ApolloService) {}

    public getProducts(options?: ProductListOptions){
        const data = {
          query: GET_PRODUCT_LIST,
          variables: { opts: options }
        };
        return this.apolloService.query(data);
    }
}