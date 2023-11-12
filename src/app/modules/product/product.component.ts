import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as productsActions from 'app/store/products/products.actions';
import { selectProduct } from 'app/store/products/products.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product$ = this.store.select(selectProduct);

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  private loadProduct(): void {
    this.store.dispatch(productsActions.LoadProductById({ payload: { id: this.route.snapshot.params.id } }))
  }

}
