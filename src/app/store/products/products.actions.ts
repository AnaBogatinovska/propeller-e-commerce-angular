import { createAction, props, union } from '@ngrx/store';
import { ProductListOptions } from 'app/shared/interfaces/products/product-list-options.interface';

// Load Products
export const LOAD_PRODUCTS = '[Product] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success';

export const REQUEST_FAILED = '[Product] REQUEST_FAILED' 

export const LoadProducts = createAction(LOAD_PRODUCTS, props<{ payload: { opts?: ProductListOptions } }>());
export const LoadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS, props<{ payload: { products: any, totalItems: number } }>());

export const RequestFailed = createAction(REQUEST_FAILED, props<any>())

const all = union({
    LoadProducts,
    LoadProductsSuccess,
});

export type ProductsTypeActions = typeof all;