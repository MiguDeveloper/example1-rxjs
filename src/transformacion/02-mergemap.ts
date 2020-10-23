import { from, fromEvent, interval } from 'rxjs';
import { map, mergeMap, take, takeUntil } from 'rxjs/operators';

// el merge map permite ejecutar un observable desde una emision de otro observable
// el mergemap recibe como parametro un callback que retorna un observable
const letras$ = from(['a', 'b', 'c', 'd']);
letras$
  .pipe(
    mergeMap((letra) =>
      interval(1000).pipe(
        map((val) => letra + val),
        take(3)
      )
    )
  )
  .subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('completo'),
  });

const mousedown$ = fromEvent<MouseEvent>(document, 'mousedown');
const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');
const counter$ = interval();

mousedown$
  .pipe(mergeMap(() => counter$.pipe(takeUntil(mouseup$))))
  .subscribe(console.log);
