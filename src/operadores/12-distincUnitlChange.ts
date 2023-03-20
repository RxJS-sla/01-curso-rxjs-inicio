import { distinct, of, from, distinctUntilChanged } from 'rxjs';



const numbers$ = of(1, 2, 3, 4, 5, 1, 1, 4, 5, 6, 7, 1, 10, 3)


numbers$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe({
    next: (value) => console.log('next', value),
    complete: () => console.log('complete'),
})

interface Person {
    name: string;
}

const persons: Person[] = [
    {
        name: 'John',
    },
    {
        name: 'John',
    },
    {
        name: 'Cao',
    },
    {
        name: 'Cao',
    },
    {
        name: 'Mama',
    },
    {
        name: 'John',
    },
    {
        name: 'George',
    },
    {
        name: 'Cao',
    },
    {
        name: 'Tana',
    },
    {
        name: 'Mama',
    },
];

from(persons)
    .pipe(
        distinctUntilChanged((after,before)=>after.name === before.name),
    )
    .subscribe(console.log);