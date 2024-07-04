import { Component } from '@angular/core';
import {Product} from "./product-cards-example.type";
import {ProductCardComponent} from "../product-card/product-card.component";
import {generateProduct, getProducts} from "../../data/fake";

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

  constructor() {}

  products: Product[] = getProducts()

  onRemoveButtonClick() {
    this.products.splice(0, 1)
  }

  onAddButtonClick() {
    this.products.push(generateProduct())
  }
}
