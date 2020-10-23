import { delay, take } from 'rxjs/operators';
import { forkJoin, from, interval } from 'rxjs';

const numero$ = from([1, 2, 3, 4, 5]);
const interval$ = interval(1000).pipe(take(3));
const letras$ = from(['a', 'b', 'c']).pipe(delay(3500));

forkJoin([numero$, interval$, letras$]).subscribe(console.log);

forkJoin([numero$, interval$, letras$]).subscribe((rpta) => {
  console.log('numeros: ', rpta[0]);
  console.log('interval: ', rpta[1]);
  console.log('letras: ', rpta[2]);
});

forkJoin({ numero$, interval$, letras$ }).subscribe((rpta) => {
  console.log('numeros: ', rpta);
});

forkJoin({ numero$, interval$, letras$ }).subscribe((rpta) => {
  console.log('value[letras]: ', rpta.letras$);
});

// asignando un nombre distinto a los key del objeto
forkJoin({ num: numero$, int: interval$, let: letras$ }).subscribe((rpta) => {
  console.log('value[letras]: ', rpta.let);
});
