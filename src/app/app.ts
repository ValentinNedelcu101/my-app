import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";
import { Copyright } from './copyright';
import { Numeric } from './numeric';
import { APP_SETTINGS, appSettings } from './app.settings';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, Copyright, Numeric],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    {provide: APP_SETTINGS, useValue: appSettings}
  ]
})
export class App {
  title = "World";
  settings = inject(APP_SETTINGS);

  private setTitle = () => {
    this.title = this.settings.title;
  }
  private changeTitle(callback: Function) {
    setTimeout( () => {
      callback()
    }, 2000);
  }
  onComplete(){
    return new Promise<void>(resolve => {
      setTimeout( () => {
        resolve();
      },2000)
    });
  }

  constructor() {
    this.onComplete().then(this.setTitle);
  }


}
