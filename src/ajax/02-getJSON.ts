import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
  'content-type': 'application/json',
  'mi-token': 'ABCDE',
});

obs$.subscribe((data) => console.log('data: ', data));
