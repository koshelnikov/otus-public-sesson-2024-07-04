import {Component, Input} from '@angular/core';
import {Product} from "../product-cards/product-cards-example.type";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input({required: true}) product: Product | undefined;
}
