import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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
persons$.pipe(distinctUntilKeyChanged('nombre')).subscribe(console.log);
