import { createReducer} from '@ngrx/store';
import { ProductsState } from '../states/products-state.interface';

const initialState: ProductsState = {};

export const productsReducer = createReducer(initialState);
