import { ActionReducerMap } from '@ngrx/store';
import { ProductsState } from './states/products-state.interface';
import { productsReducer } from './products/products.reducer';

export interface AppState {
    products: ProductsState,
}

export const appReducer: ActionReducerMap<AppState> = {
    products: productsReducer
};
