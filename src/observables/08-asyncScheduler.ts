import { asyncScheduler } from 'rxjs';
// el asynScheduler  nos permite poder aplicar dos acciones muy alineadas
// a lo que conseguimos con las funciones de:
// setTimeOut(()=>{}, 1000)
// setInterval(()=>{},1000)
// pero utilizando una subscripción

const saludar = () => console.log('Hola mi estimado');
const saludar2 = (nombre) => console.log(`Hola mi estimado ${nombre}`);
asyncScheduler.schedule(saludar, 10000);
asyncScheduler.schedule(saludar2, 10500, 'Miguel');

// dandole forma para probar la forma del setInterval
const subs = asyncScheduler.schedule(
  function name(state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// como el asynScheduler me retorna una subscription aprovecharemos eso
// para hacer un unsuscription
asyncScheduler.schedule(() => subs.unsubscribe(), 5000);
