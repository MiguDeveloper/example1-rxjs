import { asyncScheduler, range } from 'rxjs';

// como el observable se comporta de manera sincrona, usaremos el asyncScheduler
// para ver el efecto asincrono
console.log('inicio');
const rang$ = range(1, 5, asyncScheduler);
rang$.subscribe(console.log);
console.log('fin');
