import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Product } from 'app/shared/interfaces/products/product.interface';
import { tryUnsubscribe } from 'app/shared/utilities/utilities';
import * as productsActions from 'app/store/products/products.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  public product: Product;
  public loading: boolean = true;

  private subLoadProduct: Subscription;
  private subLoadProductFailed: Subscription;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute, private actions$: Actions) { }

  ngOnInit(): void {
    this.loadProduct();
    this.actions();
  }

  ngOnDestroy(): void {
    tryUnsubscribe(this.subLoadProduct);
    tryUnsubscribe(this.subLoadProductFailed);
  }

  private loadProduct() {
    this.store.dispatch(productsActions.LoadProductById({ payload: { id: this.route.snapshot.params.id } }))
  }

  private actions() {
    this.subLoadProduct = this.actions$.pipe(
      ofType(productsActions.LOAD_PRODUCT_BY_ID_SUCCESS)
    ).subscribe((action: { payload: { product: Product }, type: string }) => {
      this.product = action.payload.product;
      this.loading = false;
    })
    this.subLoadProductFailed = this.actions$.pipe(
      ofType(productsActions.REQUEST_FAILED)
    ).subscribe(() => {
      this.loading = false;
    })
  }
}
