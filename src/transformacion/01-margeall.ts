import { GitHubUsersResp, User } from './../interfaces/githubUsers';

import { ajax } from 'rxjs/ajax';
import {
  pluck,
  debounceTime,
  distinctUntilChanged,
  map,
  mergeAll,
} from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';

const body = document.querySelector('body');
const input = document.createElement('input');
const lista = document.createElement('ol');

body.append(input, lista);

// Helper
const listar = (users: User[]) => {
  users.forEach((user) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const enlace = document.createElement('a');
    enlace.href = user.html_url;
    enlace.text = 'Ver perfil';
    enlace.target = '_blank';
    li.append(img);
    li.append(user.login + ' ');
    li.append(enlace);

    lista.append(li);
  });
};

// el mergeAll permite trabajar con observables que internamente retornan observables
const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$
  .pipe(
    debounceTime(1000),
    pluck<KeyboardEvent, string>('target', 'value'),
    distinctUntilChanged(),
    map<string, Observable<GitHubUsersResp>>((val) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${val}`)
    ),
    mergeAll(),
    pluck<GitHubUsersResp, User[]>('items')
  )
  .subscribe((resp) => {
    listar(resp);
  });
