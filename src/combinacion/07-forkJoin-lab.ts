import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { forkJoin, from } from 'rxjs';

const gitHubAPI_URL = 'https://api.github.com/users';
const gitHubUser = 'migudeveloper';
// a persar de q pueda ocurrir un error en uno de las peticiones los demas
// pueden lograr realizar su ejecucion
forkJoin({
  usuario: ajax.getJSON(`${gitHubAPI_URL}/${gitHubUser}`),
  repos: ajax
    .getJSON(`${gitHubAPI_URL}/${gitHubUser}/repossxsxs`)
    .pipe(catchError((err) => from([[]]))),
  gists: ajax.getJSON(`${gitHubAPI_URL}/${gitHubUser}/gists`),
})
  //.pipe(catchError((err) => from([err])))
  .subscribe(console.log);
