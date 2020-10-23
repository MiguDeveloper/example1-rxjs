import { ajax } from 'rxjs/ajax';
import {
  map,
  tap,
  mergeMap,
  pluck,
  catchError,
  switchMap,
  exhaustMap,
} from 'rxjs/operators';
import { from, fromEvent } from 'rxjs';

// helper
const peticionLogin = (userPass: any) =>
  ajax.post('https://reqres.in/api/login?delay=1', userPass);

// Ejercicios de comparacion entre  operadores de aplanamiento
const body = document.querySelector('body');

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');

const btnSubmit = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

btnSubmit.innerHTML = 'Login';

form.append(inputEmail, inputPass, btnSubmit);

body.append(form);

const submitForm$ = fromEvent(form, 'submit').pipe(
  tap((evento) => evento.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
  exhaustMap(peticionLogin)
);

submitForm$
  .pipe(
    pluck('response', 'token'),
    catchError((err) => from(['error']))
  )
  .subscribe(console.log);
