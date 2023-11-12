import { Injectable } from "@angular/core";
import { ProductListOptions } from "../interfaces/products/product-list-options.interface";
import { GET_ACTIVE_ORDER, GET_PRODUCT_BY_ID, GET_PRODUCT_LIST } from 'app/graphql/products.queries';
import { ApolloService } from "app/shared/services/apollo.service";
import { ADD_ITEM_TO_ORDER } from "app/graphql/products.mutations";

@Injectable({ providedIn: 'root' })
export class ProductsService {

    constructor(private apolloService: ApolloService) {}

    public getProducts(opts?: ProductListOptions){
        const data = {
          query: GET_PRODUCT_LIST,
          variables: { opts }
        };
        return this.apolloService.watchQuery(data);
    }

    public getProductById(id: number){
        const data = {
          query: GET_PRODUCT_BY_ID,
          variables: { id }
        };
        return this.apolloService.query(data);
    }

    public addItemToOrder(requestData: { productVariantId: string, quantity: number }){
        const data = {
          mutation: ADD_ITEM_TO_ORDER,
          variables: requestData
        };
        return this.apolloService.mutate(data);
    }

    public getActiveOrder(){
      const data = {
        query: GET_ACTIVE_ORDER
      };
      return this.apolloService.query(data);
  }
}