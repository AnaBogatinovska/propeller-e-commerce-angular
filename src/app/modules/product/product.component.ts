import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ProductVariant } from 'app/shared/interfaces/products/product-variant.interface';
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
  public selectedProductVariant: ProductVariant;
  public formGroup: FormGroup;
  public loading: boolean = true;
  public spinner: boolean = false;

  private subLoadProduct: Subscription;
  private subAddItemToOrder: Subscription;
  private subLoadProductFailed: Subscription;

  constructor(private store: Store,
    private route: ActivatedRoute,
    private actions$: Actions,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    
    this.loadProduct();
    this.actions();
  }

  ngOnDestroy(): void {
    tryUnsubscribe(this.subLoadProduct);
    tryUnsubscribe(this.subAddItemToOrder);
    tryUnsubscribe(this.subLoadProductFailed);
  }

  private setFormGroup() {
    this.formGroup = this.fb.group({
      quantity: [1, Validators.required],
      variantId: [this.product?.variants[0]?.id, Validators.required],
    })
  }

  private loadProduct() {
    this.store.dispatch(productsActions.LoadProductById({ payload: { id: this.route.snapshot.params.id } }))
  }

  private actions() {
    this.subLoadProduct = this.actions$.pipe(
      ofType(productsActions.LOAD_PRODUCT_BY_ID_SUCCESS)
    ).subscribe((action: { payload: { product: Product }, type: string }) => {
      this.product = action.payload.product;
      this.setFormGroup();
      this.loading = false;
    })
    this.subAddItemToOrder = this.actions$.pipe(
      ofType(productsActions.ADD_ITEM_TO_ORDER_SUCCESS)
    ).subscribe(() => {
      this.store.dispatch(productsActions.GetActiveOrder());
      this.spinner = false;
    })
    this.subLoadProductFailed = this.actions$.pipe(
      ofType(productsActions.REQUEST_FAILED)
    ).subscribe(() => {
      this.loading = false;
      this.spinner = false;
    })
  }

  public addToOrder() {
    this.spinner = true;
    this.addItemToOrder();
  }
  
  private addItemToOrder() {
    this.store.dispatch(productsActions.AddItemToOrder({payload: { productVariantId: this.formGroup.get('variantId').value, quantity: 2 }}))
  }

  public updateQuantity(event, type: 'decrease' | 'increase') {
    event.stopPropagation();
    const qty = this.formGroup.getRawValue().quantity;
    if(type == 'decrease' && qty > 1) {
      this.formGroup.get('quantity').patchValue(qty - 1)
    }
    if(type == 'increase' && qty < 99) {
      this.formGroup.get('quantity').patchValue(qty + 1)
    }
  }

  public selectedVariant(variants: ProductVariant[]) {
    const id = this.formGroup.get('variantId').value;
    return id ? variants.find(v => v.id == id) : null;
  }
}
