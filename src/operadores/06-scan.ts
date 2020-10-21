import { reduce, scan, map } from 'rxjs/operators';
import { from } from 'rxjs';
const numeros = [1, 2, 3, 4, 5];
const funcAcumulador = (acc, curr) => acc + curr;

// reduce: emite el total al final
from(numeros).pipe(reduce(funcAcumulador, 0)).subscribe(console.log);

// scan: permite emitir el acumulado en cada emision
from(numeros).pipe(scan(funcAcumulador, 0)).subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const users: Usuario[] = [
  { id: 'Miguel', autenticado: false, token: null },
  { id: 'Miguel', autenticado: true, token: 'ABC' },
  { id: 'Miguel', autenticado: true, token: 'ABCDEF' },
];

const state$ = from(users).pipe(
  scan<Usuario>(
    (acc, curr) => {
      return { ...acc, ...curr };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
