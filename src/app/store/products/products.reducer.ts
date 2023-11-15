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
        return {
            ...state,
            activeOrder: {...data.payload.order}
        }
    }),
    on(productActions.GetActiveOrderSuccess, (state, data) => {
        return {
            ...state,
            activeOrder: {...data.payload.order}
        }
    }),
    on(productActions.AddItemToOrderSuccess, (state, data) => {
        return {
            ...state,
            activeOrder: data.payload.order
        }
    }),
    on(productActions.GetCollectionsSuccess, (state, data) => {
        return {
            ...state,
            collections: {...data.payload.collections}
        }
    }),
    on(productActions.SearchSuccess, (state, data) => {
        return {
            ...state,
            products: {...data.payload.searchResult}
        }
    }),
    on(productActions.AdjustOrderLineSuccess, (state, data) => {
        return {
            ...state,
            activeOrder: {...data.payload.order}
        }
    }),
    on(productActions.RemoveOrderLineSuccess, (state, data) => {
        return {
            ...state,
            activeOrder: {...data.payload.order}
        }
    }),
);
