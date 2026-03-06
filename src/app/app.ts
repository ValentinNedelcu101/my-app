import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";
import { Copyright } from './copyright';
import { Numeric } from './numeric';
import { KeyLogger } from './key-logger/key-logger';
import { APP_SETTINGS, appSettings } from './app.settings';
import { Observable, timestamp } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, Copyright, Numeric,KeyLogger],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  settings = inject(APP_SETTINGS);
}
