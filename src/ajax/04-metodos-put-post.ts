import { ajax } from 'rxjs/ajax';
const url = 'https://httpbin.org/delay/1';

ajax
  .put(
    url,
    {
      id: 1,
      nombre: 'Miguel',
    },
    {
      'mi-token': 'ABCDE123',
    }
  )
  .subscribe(console.log);

ajax({
  url: url,
  method: 'POST',
  headers: {
    'mi-token': 'ABCDE123',
  },
  body: {
    id: 1,
    nombre: 'Miguel',
  },
}).subscribe(console.log);
