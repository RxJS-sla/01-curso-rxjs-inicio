import { fromEvent, interval, skip, takeUntil, tap } from 'rxjs';


// const button = document.createElement('button');
// button.innerHTML = 'Stop Timer';

// document.querySelector('body').append(button);

// const counter$ = interval(1000)
// const clickBtn$ = fromEvent<PointerEvent>(document, "click");


// counter$
//     .pipe(
//         takeUntil(clickBtn$)
//     )
//     .subscribe({
//         next: (value) => console.log('next', value),
//         complete: () => console.log('complete'),
//     })




const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000)
const clickBtn$ = fromEvent<PointerEvent>(document, "click")
    .pipe(
        tap(()=>console.log('tap antes de skip')),
        skip(1),
        tap(()=>console.log('tap despues de skip')),
    );


counter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: (value) => console.log('next', value),
        complete: () => console.log('complete'),
    })