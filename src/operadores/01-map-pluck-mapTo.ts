import { map, mapTo, pluck } from 'rxjs/operators';
import { fromEvent, range } from 'rxjs';

const obs$ = range(1, 5);

obs$.pipe(map((value) => value * 10)).subscribe(console.log);

range(10, 10)
  .pipe(map<number, number>((value) => value * 10))
  .subscribe(console.log);

range(1, 5)
  .pipe(
    map<number, string>((value) => (value * 10).toString())
  )
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(map((value) => value.code));

//podriamo capturar facilmente una propiedad
const keyupPluck$ = keyup$.pipe(pluck('key'));
// si queremos propiedades mas profundas, es decir de objetos dentro
const keyupPluckObj$ = keyup$.pipe(pluck('target', 'baseURI'));

keyupCode$.subscribe((value) => console.log('map: ', value));
keyupPluck$.subscribe((value) => console.log('pluck: ', value));
keyupPluckObj$.subscribe((value) =>
  console.log('pluck objeto dentro: ', value)
);

// haciendolo de manera directa
fromEvent<KeyboardEvent>(document, 'keyup')
  .pipe(map((value) => value.code))
  .subscribe((value) => console.log('directo: ', value));

// mapTo: transforma la entrada en una salida especifica
// este operador permite mapear un valor emitido desde una fuente en un valor
// constaante ya sea un string un numero o cualquiera de este tipo.
const keyupMapTo$ = keyup$.pipe(mapTo('Tecla presionada'));
keyupMapTo$.subscribe((code) => console.log('mapTo: ', code));
