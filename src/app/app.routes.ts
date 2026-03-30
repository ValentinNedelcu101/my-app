import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';
import { ProductCreate } from './product-create/product-create';

export const routes: Routes = [
    
    {path: 'products/new', component: ProductCreate},
    {path: 'products', component: ProductList},
    {path: 'cart', component:Cart},
    
];
