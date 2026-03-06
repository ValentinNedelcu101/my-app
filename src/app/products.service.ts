import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './product';
import {Observable, of} from "rxjs";
import { APP_SETTINGS } from './app.settings';
@Injectable()

export class ProductsService {
  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';
  private products: Product[] = [];

  getProducts(): Observable<Product[]> {
    const options = new HttpParams().set('limit', 10);
    return this.http.get<Product[]>(this.productsUrl, {
      params: options
    });
  }

  constructor(private http: HttpClient){}
  
}
