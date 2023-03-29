import { fromEvent, throttleTime, map, distinctUntilChanged, asyncScheduler } from 'rxjs';


const click$ = fromEvent<MouseEvent>(document, "click");




click$
    .pipe(
        throttleTime(3000)
    )

const input = document.createElement('input');
document.querySelector('body').appendChild(input);


const input$ = fromEvent(input, 'keyup');

input$
    .pipe(
        throttleTime(400,asyncScheduler,{
            leading: false,
            trailing: true,
        }),
        map(({target})=>(target as HTMLInputElement).value),
        distinctUntilChanged()
    )
    .subscribe(console.log)