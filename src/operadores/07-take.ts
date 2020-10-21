import { take, tap } from 'rxjs/operators';
import { range } from 'rxjs';

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((t) => console.log('tap: ', t)),
    take(3)
  )
  .subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('completo'),
  });
