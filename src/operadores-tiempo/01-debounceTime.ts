import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

//debounceTime: nos permite contar cuantas mls han pasado desde la ultima emision
const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(debounceTime(3000)).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$
  .pipe(debounceTime(1000), pluck('target', 'value'), distinctUntilChanged())
  .subscribe(console.log);
