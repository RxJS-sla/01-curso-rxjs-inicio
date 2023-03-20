import { of, take, tap } from 'rxjs';

const numeros$ = of(1,2,3,4,5)


numeros$.pipe(
    tap(t=> console.log('tap',t)),
    take(3)
)
.subscribe({
    next: (value: number) => console.log('next',value),
    complete: () => console.log('complete'),
})