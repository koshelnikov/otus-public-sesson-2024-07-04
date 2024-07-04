import {Component, computed, effect, signal } from '@angular/core';
import {Product} from "./product-cards-example.type";
import {ProductCardComponent} from "../product-card/product-card.component";
import {ProductService} from "../services/product/product.service";
import {ToastService} from "../services/toast/toast.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {concatMap, of, startWith, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './product-cards-example.component.html',
  styleUrl: './product-cards-example.component.css'
})
export class ProductCardsExampleComponent {

  state = signal<
    {
      status: 'error' | 'loading' | 'loaded',
      products: Product[]
      errorMessage?: string
    }
  >
  ({status: 'loading', products: []})

  isLoading = computed(() => this.state().status === 'loading')
  products = computed(() => this.state().products);

  actionSource$ = new Subject<'add' | 'remove'>();

  productsSource$ = this.actionSource$.pipe(
    concatMap(action => action === 'add'
      ? this.productService.addProduct()
      : this.productService.removeProduct()
    ),
    startWith(true),
    switchMap(action => action
      ? this.productService.getProducts()
      : of([])))


  constructor(
    private productService: ProductService,
    private toastService: ToastService
  ) {

    this.actionSource$.pipe(takeUntilDestroyed())
      .subscribe(() =>
        this.state.update(
          state => ({...state, status: 'loading' })));

    this.productsSource$.pipe(takeUntilDestroyed())
      .subscribe(products =>
        this.state.update(
          state => ({...state, status: 'loaded', products: products})))

    effect(() => {
      const {status, errorMessage} = this.state();

      if (status === 'error' && errorMessage) {
        this.toastService.showError(errorMessage)
      }
    });
  }

  onRemoveButtonClick() {
    this.actionSource$.next('remove');
  }

  onAddButtonClick() {
    this.actionSource$.next('add')
  }

  onErrorButtonClick() {
    this.state.update(state => ({...state, status: 'error', errorMessage: 'Error Message fron Button'}));
  }
}
