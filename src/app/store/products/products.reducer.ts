import { createReducer, on } from '@ngrx/store';
import { ProductsState } from '../states/products-state.interface';
import * as productActions from './products.actions';

const initialState: ProductsState = {
    products: null,
    totalItems: 0
};

export const productsReducer = createReducer(
    initialState,
    on(productActions.LoadProductsSuccess, (state, data) => {
        console.log(data.payload)
        return {
            ...state,
            products: [...data.payload.products],
            totalItems: data.payload.totalItems
        }
    })
);
