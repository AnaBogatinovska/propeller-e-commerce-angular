import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from '../states/products-state.interface';

const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(selectProductsState, (state) => state.products);
export const selectActiveOrder = createSelector(selectProductsState, (state) => state.activeOrder);