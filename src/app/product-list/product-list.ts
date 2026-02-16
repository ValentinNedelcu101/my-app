import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  imports: [ProductDetail, SortPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  providers: [ProductsService],
})
export class ProductList implements OnInit {
  products: Product[]= [];
  selectedProduct:Product |undefined =this.products[0];
  onAdded(){
    alert(`${this.selectedProduct?.title} added to the cart`)
  }
  private productService = inject(ProductsService);
  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
  this.productService.getProducts().subscribe(products => {
    this.products = products;
  });
}

}
