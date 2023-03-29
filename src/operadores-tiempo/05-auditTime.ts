import { auditTime, fromEvent, map, tap } from 'rxjs';


const click$ = fromEvent<MouseEvent>(document, "click");



click$
    .pipe(
        map(({x,y})=>({x,y})),
        tap(val=>console.log({tap:val})),
        auditTime(2000)
    )
    .subscribe({
    next: (value) => console.log('next', value),
    complete: () => console.log('complete'),
})
