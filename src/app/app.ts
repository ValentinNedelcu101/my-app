import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "./product-list/product-list";
import { Copyright } from './copyright';
import { Numeric } from './numeric';
import { APP_SETTINGS, appSettings } from './app.settings';
import { Observable, timestamp } from 'rxjs';
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
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next(null);
    }, 2000);
  }); 

  private setTitle = () => {
    const timestamp = new Date();
    this.title = `${this.settings.title}(${timestamp})`;
  }
  private changeTitle(callback: Function) {
    setTimeout( () => {
      callback()
    }, 2000);
  }
  private onComplete(){
    return new Promise<void>(resolve => {
      setInterval( () => {
        resolve();
      },2000)
    });
  }

  constructor() {
    this.title$.subscribe(this.setTitle);
  }


}
