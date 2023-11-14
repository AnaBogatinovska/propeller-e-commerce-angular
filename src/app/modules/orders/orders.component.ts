import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo, gql } from 'apollo-angular';
import { ApolloService } from 'app/shared/services/apollo.service';
import * as productsActions from 'app/store/products/products.actions';
import { selectActiveOrder } from 'app/store/products/products.selectors';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public order$ = this.store.select(selectActiveOrder);

  constructor(private store: Store, private apollo: Apollo) { }

  ngOnInit(): void {
    this.loadActiveOrder();
  }

  private loadActiveOrder() {
    this.store.dispatch(productsActions.GetActiveOrder());
  }

  public updateQuantity(event,line, orderLineId: string, quantity: number) {
    event.stopPropagation()
    this.store.dispatch(productsActions.AdjustOrderLine({ payload: { orderLineId, quantity }}))
  }

  public deleteOderLine(orderLineId: string) {
    this.store.dispatch(productsActions.RemoveOrderLine({ payload: { orderLineId }}))
  }
}
