import { Component } from '@angular/core';
import { OnInit, ElementRef, viewChild, input } from '@angular/core';
import { fromEvent, tap, map, filter } from 'rxjs';
@Component({
  selector: 'app-key-logger',
  imports: [],
  templateUrl: './key-logger.html',
  styleUrl: './key-logger.css',
})
export class KeyLogger {
  numeric = input(false);
  input = viewChild<ElementRef>('keyContainer');
  keys ='';
  ngOnInit():void{
    const logger$ = fromEvent<KeyboardEvent>(this.input()!.nativeElement, 'keyup');
    logger$.pipe(
      map(evt => evt.key.charCodeAt(0)),
      filter(code => {
        if(this.numeric())
        {
          return  (code > 31 && (code < 48 || code > 57)) === false;
        }
        return true;     
      }),
      tap(digit => this.keys += String.fromCharCode(digit))
      ).subscribe()
  }
}
