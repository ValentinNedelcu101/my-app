import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites implements OnInit {
products : Product[] = [];

constructor(private productsService: ProductsService) {}
ngOnInit(): void {
  this.products = this.productsService.getProducts();
}
}
