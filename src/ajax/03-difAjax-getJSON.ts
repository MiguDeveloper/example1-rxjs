import { from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbinff.org/delay/1';
const manejaError = (error: AjaxError) => {
  console.warn('error: ', error.message);
  return from([{ ok: false, usuarios: [] }]);
};

const obs$ = ajax
  .getJSON(url, {
    'content-type': 'application/json',
    'mi-token': 'ABCDE',
  })
  .pipe(catchError(manejaError));

const obsAjax$ = ajax(url).pipe(catchError(manejaError));

obs$.subscribe((data) => console.log('getJSON: ', data));
obsAjax$.subscribe((data) => console.log('ajax: ', data));
