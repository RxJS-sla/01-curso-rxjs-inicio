import { interval, reduce, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalReducers = (acc:number, current:number) => acc + current;

const total = numbers.reduce(totalReducers,0);
console.log({total});

interval(500)
    .pipe(
        //toma los 6 primeros valores
        take(6),
        // mostrar los valores del reduce
        tap(console.log),
        reduce(totalReducers)
    )
    .subscribe({
        next: value => console.log('next',value),
        complete: () => console.log('complete:'),
    });