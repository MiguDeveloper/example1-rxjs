import { Observable, Observer } from 'rxjs';

// creacion de observables
const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Miguel');
  subs.next('emiciones');
  subs.next('seguidas');
  // con el metodo complite detenemos el flujo y las demas no seran leida
  subs.complete();
  subs.next('emiciones');
  subs.next('seguidas');
});

// podemos ponerlo de la sigueiente manera
// obs$.subscribe(console.log);
obs$.subscribe(
  (rpta) => console.log(`next: ${rpta}`),
  (error) => console.warn(`error: ${error}`),
  () => console.info('completado')
);

// otra manera de ejecutar los subcripciones es creando una variable de tipo
// observer y mandarselo coom parametro a la funcion subscribe(observer)
const observer: Observer<string> = {
  next: (rpta) => console.log(`next observer: ${rpta}`),
  error: (error) => console.warn(`error obs: ${error}`),
  complete: () => console.info('Complerto obs'),
};
// aqui empleamos el observer como parametro y seri mas claro
obs$.subscribe(observer);
