import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((val) => console.log('antes ', val)),
    map((val) => val * 10),
    tap({
      next: (val) => console.log('despues ', val),
      complete: () => console.log('Se completo el observable'),
    })
  )
  .subscribe((val) => console.log('subs: ', val));
