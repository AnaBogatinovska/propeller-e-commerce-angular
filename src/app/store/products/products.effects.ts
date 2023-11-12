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

        public getProductList = createEffect(() => {
            return this.actions$.pipe(
                ofType(productActions.LOAD_PRODUCTS),
                exhaustMap((action) => {
                    return this.productsService.getProducts(action.payload.opts).pipe(
                        map((data) => {
                            console.log('Response', data)
                            return productActions.LoadProductsSuccess({ payload: { products: data.products.items, totalItems: data.products.totalItems } })
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
