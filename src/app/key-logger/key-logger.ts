import { Component } from '@angular/core';
import { OnInit, ElementRef, viewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-key-logger',
  imports: [],
  templateUrl: './key-logger.html',
  styleUrl: './key-logger.css',
})
export class KeyLogger {
  input = viewChild<ElementRef>('keyContainer');
  keys ='';
  ngOnInit():void{
    const logger$ = fromEvent<KeyboardEvent>(this.input()!.nativeElement, 'keyup');
    logger$.subscribe(evt => this.keys += evt.key)
  }
}
