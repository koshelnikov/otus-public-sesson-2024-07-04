import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import {ProductCardsExampleComponent} from "./example/product-cards/product-cards-example.component";
import {ProductCardsExampleComponent} from "./live/product-cards/product-cards-example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCardsExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'public-lesson-2024-07-04';
}
