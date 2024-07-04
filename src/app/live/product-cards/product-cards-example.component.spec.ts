import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardsExampleComponent } from './product-cards-example.component';

describe('ProductCardsComponent', () => {
  let component: ProductCardsExampleComponent;
  let fixture: ComponentFixture<ProductCardsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
