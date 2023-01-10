import { of } from "rxjs";


const observable$ = of(1, 2, 3, 4, 5, 6);
// const observable$ = of(...[1,2,3,4,5,6]);
// const observable$ = of([1,2],{a:1,b:2},true, Promise.resolve(true));

console.log('inicio del observable')
observable$.subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete sequence'),
})
console.log('fin del observable')