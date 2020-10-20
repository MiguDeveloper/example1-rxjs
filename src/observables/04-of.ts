import { of, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (rpta) => console.log(`next: ${rpta}`),
  error: (error) => console.log(`error: ${error}`),
  complete: () => console.log('termino secuencia'),
};

const obs$ = of(...[1, 2, 3, 4, 5, 6], 7, 8, 9, 10);

obs$.subscribe(observer);
