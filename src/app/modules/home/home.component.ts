import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tryUnsubscribe } from 'app/shared/utilities/utilities';
import * as productsActions from 'app/store/products/products.actions';
import { selectCollections, selectProducts } from 'app/store/products/products.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public products$ = this.store.select(selectProducts);
  public collections$ = this.store.select(selectCollections);
  public spinner: boolean = false;
  public sortBy = null
  public selectedCollectionId = null;

  private subSearch: Subscription;
  private subSearchFailed: Subscription;

  constructor(private store: Store, 
    private router: Router, 
    private route: ActivatedRoute, 
    private actions$: Actions
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParams?.collectionId;
    const sortBy = this.route.snapshot.queryParams?.sortBy;
    if (id) {
      this.selectedCollectionId = id
    }
    this.sortBy = sortBy ?? null
    this.searchProductsByCollection();
    this.loadCollections();
    this.actions();
  }

  ngOnDestroy(): void {
    tryUnsubscribe(this.subSearch);
    tryUnsubscribe(this.subSearchFailed);
  }

  private loadCollections(): void {
    this.store.dispatch(productsActions.GetCollections({ payload: { opts: { take: 100 } } }))
  }

  private actions() {
    this.subSearch = this.actions$.pipe(ofType(productsActions.SEARCH_SUCCESS)).subscribe(action => {
      this.spinner = false;
    })
    this.subSearchFailed = this.actions$.pipe(ofType(productsActions.REQUEST_FAILED)).subscribe(action => {
      this.spinner = false;
    })
  }

  public onProductClick(id: number): void {
    this.router.navigate(['product', id])
  }

  public onCollectionSelect(event) {
    const id = event.value;
    this.selectedCollectionId = id
    this.router.navigate([], { queryParams: { collectionId: id, sortBy:  this.sortBy } })
    this.searchProductsByCollection()
  }

  public sortBySelection(event) {
    console.log(event, this.selectedCollectionId)
    this.sortBy = event.value
    this.router.navigate([], { queryParams: { collectionId: this.selectedCollectionId, sortBy: event?.value } })
    this.searchProductsByCollection()
  }

  private searchProductsByCollection() {
    this.spinner = true;
    this.store.dispatch(productsActions.Search({ payload: { opts: { collectionId: this.selectedCollectionId, sort: { price: this.sortBy} } } }))
  }
}
