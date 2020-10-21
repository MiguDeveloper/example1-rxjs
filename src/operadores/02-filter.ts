import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
range(1, 10)
  .pipe(filter((item) => item % 2 === 1))
  .subscribe(console.log);

range(20, 30)
  .pipe(
    filter((item, index) => {
      console.log('index: ', index);
      return item % 2 === 1;
    })
  )
  .subscribe((val) => console.log(val));
interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'batman',
  },
  {
    tipo: 'villano',
    nombre: 'Joker',
  },
  {
    tipo: 'heroe',
    nombre: 'Robin',
  },
  {
    tipo: 'heroe',
    nombre: 'Superman',
  },
];

const persons$ = from(personajes);

persons$
  .pipe(filter((item) => item.tipo === 'heroe'))
  .subscribe((value) => console.log(value.nombre));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code),
  filter((key) => key === 'Enter')
);

keyup$.subscribe(console.log);
