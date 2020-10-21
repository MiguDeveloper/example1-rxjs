import { fromEvent, interval } from 'rxjs';
import { tap, takeUntil, skip } from 'rxjs/operators';

const counter$ = interval(1000);

const btn = document.createElement('button');
btn.innerHTML = 'Detener counter';
document.querySelector('body').append(btn);
const clickBtn$ = fromEvent(btn, 'click').pipe(
  tap(() => console.log('tap antes del skip')),
  skip(1),
  tap(() => console.log('tap despues del skip'))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log('next: ', val),
  complete: () => console.log('complete'),
});
