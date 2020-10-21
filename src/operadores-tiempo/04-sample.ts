import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

// somple emite el ultimo, hasta el otro observable emite un valor
const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(sample(click$)).subscribe(console.log);
