import { GitHubUsersResp, User } from './../interfaces/githubUsers';

import { ajax } from 'rxjs/ajax';
import { pluck, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';

const body = document.querySelector('body');
const input = document.createElement('input');
body.append(input);

// el switchmap recibe como parametro un callback que retorna un observable pero
// con la diferencia que con cada nueva emision cancela la anterior suscripcion
// por ejemplo cuando queremos hacer la busqueda desde un input y queremos
// buscar toda la palabra y no una parte
const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$
  .pipe(
    pluck<KeyboardEvent, string>('target', 'value'),
    distinctUntilChanged(),
    switchMap<string, Observable<GitHubUsersResp>>((val) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${val}`)
    ),
    pluck<GitHubUsersResp, User[]>('items')
  )
  .subscribe(console.log);
