import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

// sompleTime emite solo el ultimo
const click$ = fromEvent<MouseEvent>(document, 'click');
click$
  .pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
