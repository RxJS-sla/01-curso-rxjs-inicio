import { filter, from, fromEvent, map, range } from "rxjs";

// range(1,10).pipe(
//     filter(val=>val % 2 ===1)
// ).subscribe(console.log)

range(1, 10).pipe(
    filter((val, i) => {
        console.log('index', i);
        return val % 2 === 1
    }
    )
)
// .subscribe(console.log)

const personajes = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    },
    {
        tipo: 'heroe',
        nombre: 'superman'
    },
]

from(personajes).pipe(
    filter(val=>val.tipo !== 'villano')
)
// .subscribe(console.log)

/**
 * filtrar solo cuando hago o toco el enter, en la primera parte solo cojo el code, en el segundo ya solo key
 */
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
);

keyUp$.subscribe(console.log)

