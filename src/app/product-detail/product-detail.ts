import {ChangeDetectionStrategy, Component, input, output, ViewEncapsulation, OnChanges, SimpleChanges, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from '../auth.service';
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
  deleted = output();
  addToCart(){
    this.added.emit();
  }
  changePrice(product: Product, price:string){
    this.productService.updateProduct(product.id, Number(price)).subscribe();
  }
  remove(product:Product){
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    })
  }
  constructor(private productService: ProductsService, public authService: AuthService){
  }
  ngOnChanges(): void {
    this.product$ = this.productService.getProduct(this.id()!);
  }
}

