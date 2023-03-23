import { debounceTime, fromEvent, map, distinctUntilChanged } from 'rxjs';


const click$ = fromEvent<MouseEvent>(document, "click");


// click$
//     .pipe(
//         debounceTime(3000)
//     )
//     .subscribe({
//     next: (value) => console.log('next', value),
//     complete: () => console.log('complete'),
// })


click$
    .pipe(
        debounceTime(3000)
    )

const input = document.createElement('input');
document.querySelector('body').appendChild(input);


const input$ = fromEvent(input, 'keyup');

input$
    .pipe(
        debounceTime(1000),
        map(({target})=>(target as HTMLInputElement).value),
        distinctUntilChanged()
    )
    .subscribe(console.log)