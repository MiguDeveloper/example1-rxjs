import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';
const numeros = [1, 2, 3, 4, 5];
const funcReducer = (acc, curr) => acc + curr;
const total = numeros.reduce(funcReducer, 0);
console.log('Total: ', total);

interval(500)
  .pipe(take(6), tap(console.log), reduce(funcReducer, 0))
  .subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('completo'),
  });
