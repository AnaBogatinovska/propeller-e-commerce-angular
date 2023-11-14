import { createReducer, on } from '@ngrx/store';
import { ProductsState } from '../states/products-state.interface';
import * as productActions from './products.actions';

const initialState: ProductsState = {
    collections: null,
    products: null,
    activeOrder: null,
    totalItems: 0
};

export const productsReducer = createReducer(
    initialState,
  
    on(productActions.GetActiveOrderSuccess, (state, data) => {
        console.log(data.payload)
        return {
            ...state,
            activeOrder: {...data.payload.order}
        }
    }),
    on(productActions.GetActiveOrderSuccess, (state, data) => {
        console.log(data.payload)
        return {
            ...state,
            activeOrder: {...data.payload.order}
        }
    }),
    on(productActions.AddItemToOrderSuccess, (state, data) => {
        console.log(data.payload)
        return {
            ...state,
            activeOrder: {...data.payload.order}
        }
    }),
    on(productActions.GetCollectionsSuccess, (state, data) => {
        console.log(data.payload)
        return {
            ...state,
            collections: {...data.payload.collections}
        }
    }),
    on(productActions.SearchSuccess, (state, data) => {
        console.log(data.payload)
        return {
            ...state,
            products: {...data.payload.searchResult}
        }
    }),
    on(productActions.AdjustOrderLineSuccess, (state, data) => {
        console.log(data.payload)
        return {
            ...state,
            activeOrder: {...data.payload.order}
        }
    }),
    on(productActions.RemoveOrderLineSuccess, (state, data) => {
        console.log(data.payload)
        return {
            ...state,
            activeOrder: {...data.payload.order}
        }
    }),
);
