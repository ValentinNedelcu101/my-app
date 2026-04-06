import {Component, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { Observable, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  id = input<string>();
  product$: Observable<Product> | undefined;
  addToCart(){
  }
  changePrice(product: Product, price:string){
    this.productService.updateProduct(product.id, Number(price)).subscribe(() => {
    this.router.navigate(['/products']);
  });
  }
  remove(product:Product){
    this.productService.deleteProduct(product.id).subscribe(() => {
    this.router.navigate(['/products']);
  })
  }
  constructor(
    private productService: ProductsService, 
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  )
  {}
  ngOnInit(): void {
    this.product$ = this.productService.getProduct(Number(this.id()!));
  }
}

