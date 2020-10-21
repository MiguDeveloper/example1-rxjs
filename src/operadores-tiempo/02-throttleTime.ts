import { fromEvent, asyncScheduler } from 'rxjs';
import { pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';

// throttleTime: nos permite emitir la primera y luego del tiempo indicado
// el siguiente elemento a emitir
const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(throttleTime(3000)).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$
  .pipe(
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe(console.log);
