import {ChangeDetectionStrategy, Component, input, output, ViewEncapsulation, OnChanges, SimpleChanges, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetail implements OnChanges {
  id = input<number>();
  product$: Observable<Product> | undefined;
  added = output();
  addToCart(){
    this.added.emit();
  }
  changePrice(product: Product, price:string){
    this.productService.updateProduct(product.id, Number(price)).subscribe();
  }

  constructor(private productService: ProductsService){
  }
  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id()!);
  }
}

