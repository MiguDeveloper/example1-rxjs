import { concatMap, take } from 'rxjs/operators';
import { interval, fromEvent } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent<MouseEvent>(document, 'click');

// operador de aplanamiento: recibe un observable y maneja la suscripcion internamente
// El concatMap permite encadenar en cola la emision de nuevas suscripciones
// lo ejecuta en secuencia
click$.pipe(concatMap(() => interval$)).subscribe(console.log);
