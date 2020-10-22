import { catchError, pluck } from 'rxjs/operators';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';
const manejoDeErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};
// usando fetch API
const fetchPromesa = fetch(url);
fetchPromesa
  .then(manejoDeErrores)
  .then((resp) => resp.json())
  .then((resp) => console.log('data: ', resp))
  .catch((err) => console.log('error en usuarios: ', err));

// usando Rxjs
ajax(url)
  .pipe(
    //map(rpta => rpta.response)
    pluck('response'),
    catchError((err) => {
      console.warn('error en: ', err.message);
      return from([]);
    })
  )
  .subscribe((user) => console.log('users: ', user));
