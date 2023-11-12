import { Component, OnInit } from '@angular/core';
import { Observable } from '@apollo/client';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { GET_PRODUCT_LIST } from 'app/graphql/products.queries';
import { ProductListOptions } from 'app/shared/interfaces/products/product-list-options.interface';
import * as productsActions from 'app/store/products/products.actions';
import { selectProducts } from 'app/store/products/products.selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$ = this.store.select(selectProducts);

  constructor(private store: Store, private apollo: Apollo) { }

  ngOnInit(): void {
    this.store.dispatch(productsActions.LoadProducts({ payload: { opts: { take: 15 } } }))
  }

 

}
