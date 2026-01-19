import {ChangeDetectionStrategy, Component, input, output, ViewEncapsulation, OnChanges, SimpleChanges, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetail implements OnChanges {
  product = input<Product>();
  added = output();
  addToCart(){
    this.added.emit();
  }
  get productTitle(){
    return this.product()!.title;
  }
  constructor(){
    console.log('Product:', this.product());
  }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if(!product.isFirstChange()){
    const oldValue = product.previousValue;
    const newValue = product.currentValue;
    console.log('Old value', oldValue);
    console.log('New value', newValue);
  }
}

}
