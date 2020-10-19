import { Observer, Observable } from 'rxjs';
// subcription y unsubscribe
const observer: Observer<number> = {
  next: (rpta) => console.log(`next: ${rpta}`),
  error: (error) => console.warn(`error: ${error}`),
  complete: () => console.info('Completo'),
};

const intervalo$ = new Observable<number>((subs) => {
  let contador = 0;
  // creamos una referencia al intervalo para evitar fuga de memoria
  const intervalo = setInterval(() => {
    contador++;
    subs.next(contador);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(intervalo);
    console.log('Intervalo destruido');
  };
});

// importante saber que cuando nos suscribimos se vuelve a reiniciar el contador
const suscrip1 = intervalo$.subscribe(observer);
const suscrip2 = intervalo$.subscribe(observer);
const suscrip3 = intervalo$.subscribe(observer);

// ejemplo usando una sola suscripcion
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);
// para hacer el unsuscribe de uno solo usaremos el add()
subs1.add(subs2).add(subs3);

// recordar que el complete() no es lo mismo que el unsuscribe
setTimeout(() => {
  suscrip1.unsubscribe();
  suscrip2.unsubscribe();
  suscrip3.unsubscribe();

  subs1.unsubscribe();
  console.log('Completado el timeout');
}, 3000);
