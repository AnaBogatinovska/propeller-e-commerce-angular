import { Injectable } from "@angular/core";
import { ProductListOptions } from "../interfaces/products/product-list-options.interface";
import { GET_ACTIVE_ORDER, GET_PRODUCT_BY_ID, GET_PRODUCT_LIST } from 'app/graphql/products/products.queries';
import { ApolloService } from "app/shared/services/apollo.service";
import { ADD_ITEM_TO_ORDER } from "app/graphql/products/products.mutations";
import { GET_COLLECTIONS, SEARCH } from "app/graphql/collections/collections.queries";
import { SearchInput } from "../interfaces/search-input.interface";
import { ADJUST_ORDER_LINE, REMOVE_ORDER_LINE } from "app/graphql/order/order.mutations";

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
      return this.apolloService.watchQuery(data);
    }

    // Collections
    public getCollections(opts?: ProductListOptions){
      const data = {
        query: GET_COLLECTIONS,
        variables: { opts }
      };
      return this.apolloService.watchQuery(data);
    }
    //  search
    public search(opts?: SearchInput){
      const data = {
        query: SEARCH,
        variables: { opts }
      };
      return this.apolloService.query(data);
    }
    // Adjust order line
    public adjustOrderLine(requestData: { orderLineId: string, quantity: number }){
      const data = {
        mutation: ADJUST_ORDER_LINE,
        variables: requestData
      };
      return this.apolloService.mutate(data);
    }
    // Remove order line
    public removeOrderLine(requestData: { orderLineId: string }){
      const data = {
        mutation: REMOVE_ORDER_LINE,
        variables: requestData
      };
      return this.apolloService.mutate(data);
    }
}