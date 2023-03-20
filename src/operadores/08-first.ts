import { first, fromEvent, tap, map } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, "click");


click$
    .pipe(
        tap(()=>console.log('tap')),
        map(({clientX,clientY})=>({
            clientX,
            clientY,
        })),
        first(e=>e.clientY >= 150),
    )
    .subscribe({
    next: (value) => console.log('next', value),
    complete: () => console.log('complete'),
})