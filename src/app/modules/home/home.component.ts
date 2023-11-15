import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  public skip = 0;
  public take = 0;
  public selectedCollectionId = null;

  // Pagination
  public totalItemsLength: number = 0;
  public pageSize: string = '15';
  public pageIndex: number = 1;
  public totalPages: number = 1;
  public isPaginationDisabled: boolean = false;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild('paginationSelector') paginationSelector: ElementRef<Element>;

  private subSearch: Subscription;
  private subSearchFailed: Subscription;

  constructor(private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    const storageFilters = this.filters
    this.selectedCollectionId = storageFilters?.collectionId || this.route.snapshot.queryParams?.collectionId || 0;
    this.sortBy = storageFilters?.sortBy || this.route.snapshot.queryParams?.sortBy;
    this.skip = storageFilters?.skip || this.route.snapshot.queryParams?.skip || null;
    this.take = storageFilters?.take || this.route.snapshot.queryParams?.take || this.pageSize;
    this.pageIndex = storageFilters?.pageIndex || 1
    this.searchProductsByCollection();
    this.loadCollections();
    this.actions();
  }

  ngOnDestroy(): void {
    tryUnsubscribe(this.subSearch);
    tryUnsubscribe(this.subSearchFailed);
  }

  get filters(){
    return JSON.parse(localStorage.getItem('filters'))
  }

  private loadCollections(): void {
    this.store.dispatch(productsActions.GetCollections({ payload: { opts: { take: 100 } } }))
  }

  private actions() {
    this.subSearch = this.actions$.pipe(ofType(productsActions.SEARCH_SUCCESS)).subscribe(action => {
      this.spinner = false;
      this.isPaginationDisabled = false;
    })
    this.subSearchFailed = this.actions$.pipe(ofType(productsActions.REQUEST_FAILED)).subscribe(action => {
      this.spinner = false;
      this.isPaginationDisabled = false;
    })
  }

  public onProductClick(id: number): void {
    this.router.navigate(['product', id])
  }

  public onCollectionSelect(event) {
    const id = event.value;
    this.selectedCollectionId = id
    this.skip = null;
    this.take = +this.pageSize;
    this.searchProductsByCollection()
  }

  public sortBySelection(event) {
    this.sortBy = event.value
    this.searchProductsByCollection()
  }

  private searchProductsByCollection() {
    this.router.navigate([], { queryParams: { collectionId: this.selectedCollectionId  == 0 ? null: this.selectedCollectionId, sortBy: this.sortBy, skip: +this.skip == 0 ? null: +this.skip , take: +this.take ?? null } })
    const filters = { collectionId: this.selectedCollectionId || null, sort: { price: this.sortBy }, skip: +this.skip ?? null, take: +this.take ?? null }
    const storageFilters = { pageIndex: this.pageIndex, collectionId: this.selectedCollectionId, sortBy: this.sortBy, skip: +this.skip ?? null, take: +this.take ?? null }
    this.saveFilters(storageFilters)
    this.spinner = true;
    this.store.dispatch(productsActions.Search({ payload: { opts: filters } }))
  }

  private saveFilters(filters) {
    localStorage.setItem('filters', JSON.stringify(filters))
  }

  public onChangePage(data) {
    if (data.pageIndex < data.length) {
      const skip = data.pageIndex * data.pageSize;
      const take = data.pageSize;
      this.skip = skip;
      this.take = take;
      this.pageIndex = data.pageIndex;
      this.isPaginationDisabled = true;
      this.searchProductsByCollection()
    }
  }

}
