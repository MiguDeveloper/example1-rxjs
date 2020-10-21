import { fromEvent } from 'rxjs';
import { first, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

// cuando usamos el first() no se emitiran valores hasta que se cumpla
// la condicion que se ponga como filtro, en caso no haya funcion siempre
// terminara en la primera emision algo asi como poner un take(1)
click$
  .pipe(
    tap((val) => console.log('tap')),
    //first((event) => event.clientY >= 150) usando desestructuracion
    first(({ clientY }) => clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log('next:', val),
    complete: () => console.log('completo'),
  });
