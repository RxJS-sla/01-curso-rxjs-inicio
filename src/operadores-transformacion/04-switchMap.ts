import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, mergeMap, switchMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GithubUser, GithubUsersResp } from '../interfaces';



// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {

    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios) {

        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }

}

//mergeall-> terminar observables

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');




input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map(({ target }) => (target as HTMLInputElement).value),
    mergeMap<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    map(x => x.items)
)
// .subscribe(mostrarUsuarios);


const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map(({ target }) => (target as HTMLInputElement).value),
    switchMap(texto => ajax.getJSON(url + texto)),
).subscribe(console.log)