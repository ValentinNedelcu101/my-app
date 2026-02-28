import { Component, OnInit, inject, OnDestroy,DestroyRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products.service';
import { Subscription, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-product-list',
  imports: [ProductDetail, SortPipe, AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  providers: [ProductsService],
})
export class ProductList implements OnInit {
  private destroyRef = inject(DestroyRef);
  products$: Observable<Product[]> | undefined;
  selectedProduct:Product |undefined ;
  onAdded(){
    alert(`${this.selectedProduct?.title} added to the cart`)
  }
  private productService = inject(ProductsService);
  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
  this.products$ = this.productService.getProducts()
}
}
