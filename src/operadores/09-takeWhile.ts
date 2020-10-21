import { map, takeWhile, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');
// podemos conocer la ultima emision que cumple la condicion del predicado
// para ello ponemos en true el ultimo parametro que esta en false
click$
  .pipe(
    tap((val) => console.log('tap')),
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('complete'),
  });
