import { Observer, Observable, Subject } from 'rxjs';

const observer: Observer<number> = {
  next: (rpta) => console.log(`next: ${rpta}`),
  error: (error) => console.warn(`error: ${error}`),
  complete: () => console.info('completado'),
};

const intervalo$ = new Observable<number>((subs) => {
  const interval = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log('intervalo destruido'); //solo se ejecuta con el unsubscribe()
  };
});

// subcripciones no sincronizadas por eso usaremos el subject para multicasting
// const subs1 = intervalo$.subscribe((rpta) => console.log(rpta));
// const subs2 = intervalo$.subscribe((rpta) => console.log(rpta));

// Subject:
// es un tipo especial de observable y nos ayuda a trabajar el multicasting
// se comporta como observable y observer a la vez
// uso de subject
// 1. casteto multiple
// 2. tambien es un observer
// 3. tienes los metodos next, error y complete
const subject$ = new Subject<number>();
const subcription = intervalo$.subscribe(subject$);

const subs11 = subject$.subscribe(observer);
const subs22 = subject$.subscribe(observer);

/*
 * Cold observable:
 * cuando la data es producida por el observable en sí mismo
 *
 * Hot observable:
 * cuando la data es producida FUERA del observable
 *
 * Los Subject nos permiten convertir un Cold observable en un Hot observable
 * ejemplo
 */
setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subcription.unsubscribe();
}, 3500);
