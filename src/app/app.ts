import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive } from '@angular/router';
import { Copyright } from './copyright';
import { APP_SETTINGS, appSettings } from './app.settings';
import { Auth } from './auth/auth';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Copyright, 
    Auth, 
    RouterLinkWithHref,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  settings = inject(APP_SETTINGS);
}
