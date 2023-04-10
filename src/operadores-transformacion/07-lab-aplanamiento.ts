import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


// Helper
const peticionHttpLogin = (userPass: { email: string; password: string; }) =>
    ajax.post<{ token: string }>('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            map(({ response }) => response.token),
            catchError(err => of('xxx'))
        )



// creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
    .pipe(
        tap(ev => ev.preventDefault()),
        map(({ target }) => ({
            email: target[0].value,
            password: target[1].value
        })),
        exhaustMap(peticionHttpLogin)
    );


submitForm$.subscribe(token => {
    console.log(token);
})
