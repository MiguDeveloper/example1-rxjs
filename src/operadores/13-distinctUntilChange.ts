import { from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

// importante: el distinct aplica el === para las comparaciones
const numeros$ = from([1, 2, 1, 1, 3, 3, 7, 2, 2, 4, 4, 5, 3, 2, 1, 1]);
numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: 'Megaman' },
  { nombre: 'Spiderman' },
  { nombre: 'Spiderman' },
  { nombre: 'Batman' },
  { nombre: 'Megaman' },
  { nombre: 'Spiderman' },
  { nombre: 'Batman' },
  { nombre: 'Spiderman' },
  { nombre: 'Batman' },
  { nombre: 'Batman' },
  { nombre: 'Linterna verde' },
];

const persons$ = from(personajes);
persons$
  .pipe(
    distinctUntilChanged(
      (before, cururent) => before.nombre === cururent.nombre
    )
  )
  .subscribe(console.log);
