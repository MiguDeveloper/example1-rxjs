import { mergeMap, switchMap } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(1000);
// mergeMap: mantiene activa todas las emisiones que esten abiertas
// switchMap: solo mantiene activa la ultima emision
click$
  .pipe(
    //mergeMap(() => interval$),
    switchMap(() => interval$)
  )
  .subscribe(console.log);
