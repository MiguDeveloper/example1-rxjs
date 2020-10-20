import { from, Observer, of } from 'rxjs';

/*
 * of : toma argumentos y genera una secuencia
 * from: array, promise, iterable, genera una secuencia
 */

const observer: Observer<any> = {
  next: (value) => console.log('next:', value),
  error: (error) => console.log(error),
  complete: () => console.log('completo'),
};

const src$ = from([1, 2, 3, 4, 5]);
const src2$ = of(...[1, 2, 3, 4, 5]); // el of siempre espera argumentos
const src3$ = from('miguel');
const src4$ = of('miguel');
src$.subscribe(observer);
src2$.subscribe(observer);
src3$.subscribe(observer);
src4$.subscribe(observer);

// funcion generadora, iterables
const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
};

const iterable = miGenerador();
iterable.next();
iterable.next();
from(iterable).subscribe(observer);

// Create a generator function with multiple yields
const generatorFunction = function* () {
  yield 'Neo';
  yield 'Morpheus';
  yield 'Trinity';

  return 'The Oracle';
};

const generator = generatorFunction();
// Call next four times
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
