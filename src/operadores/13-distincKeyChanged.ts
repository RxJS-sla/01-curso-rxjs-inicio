import { from, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs';




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
        distinctUntilKeyChanged('name')
    )
    .subscribe(console.log);