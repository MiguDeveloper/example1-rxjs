import { from } from 'rxjs';
import { endWith, startWith } from 'rxjs/operators';

const numeros$ = from([1, 2, 3]).pipe(
  startWith('a', 'b', 'c'),
  endWith('x', 'y', 'z')
);

numeros$.subscribe(console.log);
