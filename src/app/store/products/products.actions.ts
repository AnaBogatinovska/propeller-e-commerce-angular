import { createAction, props, union } from '@ngrx/store';
import { CollectionList } from 'app/shared/interfaces/collections/collection-list.interface';
import { Order } from 'app/shared/interfaces/orders/order.interface';
import { ProductListOptions } from 'app/shared/interfaces/products/product-list-options.interface';
import { Product } from 'app/shared/interfaces/products/product.interface';
import { SearchInput } from 'app/shared/interfaces/search-input.interface';
import { SearchResponse } from 'app/shared/interfaces/search-response.interface';
import { SearchResult } from 'app/shared/interfaces/search-result.interface';
// <--- Types --->

export const LOAD_PRODUCTS = '[Product] LOAD_PRODUCTS';
export const LOAD_PRODUCTS_SUCCESS = '[Product] LOAD_PRODUCTS_SUCCESS';

export const LOAD_PRODUCT_BY_ID = '[Product] LOAD_PRODUCT_BY_ID';
export const LOAD_PRODUCT_BY_ID_SUCCESS = '[Product] LOAD_PRODUCT_BY_ID_SUCCESS';

export const ADD_ITEM_TO_ORDER = '[Product] ADD_ITEM_TO_ORDER';
export const ADD_ITEM_TO_ORDER_SUCCESS = '[Product] ADD_ITEM_TO_ORDER_SUCCESS';

export const GET_ACTIVE_ORDER = '[Product] GET_ACTIVE_ORDER';
export const GET_ACTIVE_ORDER_SUCCESS = '[Product] GET_ACTIVE_ORDER_SUCCESS';

export const GET_COLLECTIONS = '[Product] GET_COLLECTIONS';
export const GET_COLLECTIONS_SUCCESS = '[Product] GET_COLLECTIONS_SUCCESS';

export const SEARCH = '[Product] SEARCH';
export const SEARCH_SUCCESS = '[Product] SEARCH_SUCCESS';

export const ADJUST_ORDER_LINE = '[Product] ADJUST_ORDER_LINE';
export const ADJUST_ORDER_LINE_SUCCESS = '[Product] ADJUST_ORDER_LINE_SUCCESS';

export const REMOVE_ORDER_LINE = '[Product] REMOVE_ORDER_LINE';
export const REMOVE_ORDER_LINE_SUCCESS = '[Product] REMOVE_ORDER_LINE_SUCCESS';

export const REQUEST_FAILED = '[Product] REQUEST_FAILED' 


// <--- Actions--->

export const LoadProducts = createAction(LOAD_PRODUCTS, props<{ payload: { opts?: ProductListOptions } }>());
export const LoadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS, props<{ payload: { products: Product[], totalItems: number } }>());

export const LoadProductById = createAction(LOAD_PRODUCT_BY_ID, props<{ payload: { id: number } }>());
export const LoadProductByIdSuccess = createAction(LOAD_PRODUCT_BY_ID_SUCCESS, props<{ payload: { product: Product } }>());

export const AddItemToOrder = createAction(ADD_ITEM_TO_ORDER, props<{ payload: { productVariantId: string, quantity: number } }>());
export const AddItemToOrderSuccess = createAction(ADD_ITEM_TO_ORDER_SUCCESS, props<{ payload: { order: Order } }>());

export const GetActiveOrder = createAction(GET_ACTIVE_ORDER);
export const GetActiveOrderSuccess = createAction(GET_ACTIVE_ORDER_SUCCESS, props<{ payload: { order: Order } }>());

export const GetCollections = createAction(GET_COLLECTIONS, props<{ payload: { opts?: ProductListOptions } }>());
export const GetCollectionsSuccess = createAction(GET_COLLECTIONS_SUCCESS, props<{ payload: { collections: CollectionList } }>());

export const Search = createAction(SEARCH, props<{ payload?: { opts?: SearchInput } }>());
export const SearchSuccess = createAction(SEARCH_SUCCESS, props<{ payload: { searchResult: SearchResponse } }>());

export const AdjustOrderLine = createAction(ADJUST_ORDER_LINE, props<{ payload?: { orderLineId: string, quantity: number } }>());
export const AdjustOrderLineSuccess = createAction(ADJUST_ORDER_LINE_SUCCESS, props<{ payload: { order: Order } }>());

export const RemoveOrderLine = createAction(REMOVE_ORDER_LINE, props<{ payload?: { orderLineId: string } }>());
export const RemoveOrderLineSuccess = createAction(REMOVE_ORDER_LINE_SUCCESS, props<{ payload: { order: Order } }>());

export const RequestFailed = createAction(REQUEST_FAILED, props<any>())

const all = union({
    LoadProducts,
    LoadProductsSuccess,
    LoadProductById,
    LoadProductByIdSuccess,
    AddItemToOrder,
    AddItemToOrderSuccess,
    GetActiveOrder,
    GetActiveOrderSuccess,
    GetCollections,
    GetCollectionsSuccess,
    Search, 
    SearchSuccess,
    AdjustOrderLine,
    AdjustOrderLineSuccess,
    RemoveOrderLine,
    RemoveOrderLineSuccess,
});

export type ProductsTypeActions = typeof all;