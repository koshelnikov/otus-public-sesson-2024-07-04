import { Injectable } from '@angular/core';
import {Product} from "../../product-cards/product-cards-example.type";
import {delay, Observable, of, switchMap, tap} from "rxjs";
import {generateProduct, getProducts} from "../../../data/fake";

const products = getProducts();

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of([...products]).pipe(
      //delay(1000),
      tap((products: Product[]) => console.log('HTTP GET REQUEST'))
    );
  }

  addProduct(): Observable<boolean> {

    products.push(generateProduct());
    return of(true).pipe(
      //delay(1000),
      tap(_ => console.log('HTTP POST REQUEST')));
  }

  removeProduct(): Observable<boolean> {

    products.splice(0, 1);
    return of(true).pipe(
      //delay(1000),
      tap(_ => console.log('HTTP DELETE REQUEST')));
  }
}
