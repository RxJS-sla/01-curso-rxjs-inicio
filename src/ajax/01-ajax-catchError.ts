import { of, map, catchError } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";


const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([]);
}



const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('data:', data))
//     .catch(err => console.warn('error en usuarios', err))

// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error en usuarios', err ) )

ajax( url ).pipe(
    map(x=>x.response),
    catchError( atrapaError )
)
.subscribe( users => console.log('usuarios:', users) );


