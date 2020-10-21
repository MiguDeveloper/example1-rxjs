import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';

// importante: el distinct aplica el === para las comparaciones
const numeros$ = from([1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 2, 1]);
numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: 'Megaman' },
  { nombre: 'Spiderman' },
  { nombre: 'Batman' },
  { nombre: 'Megaman' },
  { nombre: 'Spiderman' },
  { nombre: 'Batman' },
  { nombre: 'Linterna verde' },
];

const persons$ = from(personajes);
persons$.pipe(distinct((p) => p.nombre)).subscribe(console.log);
