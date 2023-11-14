import { Injectable } from '@angular/core';
import * as productActions from './products.actions';
import { ProductsService } from 'app/shared/services/products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ProductsEffects {
    constructor(
        private actions$: Actions<productActions.ProductsTypeActions>,
        private productsService: ProductsService,
    ) {}

        // Get Product List
        public getProductList = createEffect(() => {
            return this.actions$.pipe(
                ofType(productActions?.LOAD_PRODUCTS),
                exhaustMap((action) => {
                    return this.productsService?.getProducts(action?.payload?.opts).pipe(
                        map((data) => {
                            console.log('Response', data)
                            return productActions?.LoadProductsSuccess({ payload: { products: data?.products?.items, totalItems: data?.products?.totalItems } })
                        }),
                        catchError((error) => this.handleError(error))
                    );
                })
            );
        });

        // Get Product By Id List
        public getProductById = createEffect(() => {
            return this.actions$.pipe(
                ofType(productActions?.LOAD_PRODUCT_BY_ID),
                exhaustMap((action) => {
                    return this.productsService?.getProductById(action?.payload?.id).pipe(
                        map((data) => {
                            console.log('Response', data)
                            return productActions?.LoadProductByIdSuccess({ payload: { product: data.product } })
                        }),
                        catchError((error) => this.handleError(error))
                    );
                })
            );
        });

        // Add item to order List
        public addItemToOrder = createEffect(() => {
            return this.actions$.pipe(
                ofType(productActions?.ADD_ITEM_TO_ORDER),
                exhaustMap((action) => {
                    return this.productsService?.addItemToOrder({productVariantId: action?.payload?.productVariantId, quantity: action?.payload?.quantity}).pipe(
                        map((data) => {
                            return productActions?.AddItemToOrderSuccess({ payload: { order: data?.order } })
                        }),
                        catchError((error) => this.handleError(error))
                    );
                })
            );
        });

        // Get active order List
        public getActiveOrder = createEffect(() => {
            return this.actions$.pipe(
                ofType(productActions?.GET_ACTIVE_ORDER),
                exhaustMap((action) => {
                    
                    return this.productsService?.getActiveOrder().pipe(
                        map((data) => {
                            return productActions?.GetActiveOrderSuccess({ payload: { order: data?.activeOrder } })
                        }),
                        catchError((error) => this.handleError(error))
                    );
                })
            );
        });

        // Get collections
        public getCollections = createEffect(() => {
            return this.actions$.pipe(
                ofType(productActions?.GET_COLLECTIONS),
                exhaustMap((action) => {
                    
                    return this.productsService?.getCollections(action?.payload?.opts).pipe(
                        map((data) => {
                            return productActions?.GetCollectionsSuccess({ payload: { collections: data?.collections } })
                        }),
                        catchError((error) => this.handleError(error))
                    );
                })
            );
        });

        // Search result
        public search = createEffect(() => {
            return this.actions$.pipe(
                ofType(productActions?.SEARCH),
                exhaustMap((action) => {
                    
                    return this.productsService?.search(action?.payload?.opts).pipe(
                        map((data) => {
                            return productActions?.SearchSuccess({ payload: { searchResult: data?.search } })
                        }),
                        catchError((error) => this.handleError(error))
                    );
                })
            );
        });

        // Adjust Order Line
        public adjsutOrderLine = createEffect(() => {
            return this.actions$.pipe(
                ofType(productActions?.ADJUST_ORDER_LINE),
                exhaustMap((action) => {
                    
                    return this.productsService?.adjustOrderLine({orderLineId: action?.payload?.orderLineId, quantity: action?.payload?.quantity}).pipe(
                        map((data) => {
                            return productActions?.AdjustOrderLineSuccess({ payload: { order: data?.adjustOrderLine } })
                        }),
                        catchError((error) => this.handleError(error))
                    );
                })
            );
        });

        // Remove Order Line
        public removeOrderLine = createEffect(() => {
            return this.actions$.pipe(
                ofType(productActions?.REMOVE_ORDER_LINE),
                exhaustMap((action) => {
                    
                    return this.productsService?.removeOrderLine({orderLineId: action?.payload?.orderLineId}).pipe(
                        map((data) => {
                            return productActions?.RemoveOrderLineSuccess({ payload: { order: data?.removeOrderLine } })
                        }),
                        catchError((error) => this.handleError(error))
                    );
                })
            );
        });
    
        // error
        private handleError(error: {errors: any[]}): Observable<any> {
            console.log(error)
            return of(productActions.RequestFailed(error.errors));
        }
}
