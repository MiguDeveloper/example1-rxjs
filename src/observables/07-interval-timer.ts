import { interval, Observer, timer } from 'rxjs';
// el tipo de observable interval y timer son por naturaleza asincrono
const observer: Observer<number> = {
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.log('completo'),
};

const interval$ = interval(10000);

// el timer permite ejecutar el complete() del observer en el tiempo indicado
const timer$ = timer(2000);
// asi mismo con el timer podemos generar un tipo de interval indicandole
// el punto de inicio y el step
const timer2$ = timer(10000, 10000);
// ejemplo de notificaciones usando timer
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const notificar$ = timer(hoyEn5);

interval$.subscribe(observer);
timer$.subscribe(observer);
timer2$.subscribe(observer);
notificar$.subscribe(observer);
