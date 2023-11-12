import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as productsActions from 'app/store/products/products.actions';
import { selectProducts } from 'app/store/products/products.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public products$ = this.store.select(selectProducts);

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(productsActions.LoadProducts({ payload: { opts: { take: 15 } } }))
  }

  public onProductClick(id: number): void {
    this.router.navigate(['product', id], { relativeTo: this.route })
  }
}
