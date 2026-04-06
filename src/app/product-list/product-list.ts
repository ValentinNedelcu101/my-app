import { Component, OnInit, inject, OnDestroy,DestroyRef } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products.service';
import { Subscription, Observable, switchMap } from 'rxjs';
import { takeUntilDestroyed,toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
    SortPipe, 
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  providers: [],
})
export class ProductList implements OnInit  {
  products$: Observable<Product[]> | undefined;
  onAdded(){
  }
  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.route.queryParamMap.pipe(
    switchMap(params => {
      return this.productService.getProducts(Number(params.get('limit')));
    })
  );
  }

   constructor(private productService: ProductsService,private route: ActivatedRoute) {}
}
