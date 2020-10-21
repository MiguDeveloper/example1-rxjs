import { fromEvent, Observer } from 'rxjs';
// Eventos de DOM

const observer: Observer<any> = {
  next: ({ x, y }) => console.log(`x: ${x}, y: ${y}`),
  error: (error) => console.log(`error: ${error}`),
  complete: () => console.log('completo'),
};

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(observer);
src2$.subscribe((rpta) => console.log(rpta.key));
