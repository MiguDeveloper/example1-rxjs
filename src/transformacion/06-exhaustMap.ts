import { exhaustMap, take } from 'rxjs/operators';
import { interval, fromEvent } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<MouseEvent>(document, 'click');
// el exhaustMap solo mantiene una suscripcion activa para q emita valores
click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
