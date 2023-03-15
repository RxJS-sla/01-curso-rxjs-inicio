import { from, map, reduce, scan } from 'rxjs';

const numbers = [1, 2, 3, 4, 5];

const totalReducers = (acc:number, current:number) => acc + current;

// //Reduce
// from(numbers)
//     .pipe(
//         reduce(totalReducers,0)
//     )
//     .subscribe(console.log)

// //scan
// from(numbers)
//     .pipe(
//         scan(totalReducers,0)
//     )
//     .subscribe(console.log)

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];

const state$ = from( user ).pipe(
    scan<Usuario,Usuario>( (acc: any, cur: any) => {
        return { ...acc, ...cur }
    },{edad:33})
);

const id$ = state$.pipe(
    map(x => x)
);
 
id$.subscribe( console.log );