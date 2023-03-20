import { distinct, of, from } from 'rxjs';



const numbers$ = of(1, 2, 3, 4, 5, 1, 3, 4, 5, 6, 7, 1, 10, 3)


numbers$
    .pipe(
        distinct()
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
        distinct(p=>p.name),
    )
    .subscribe(console.log);