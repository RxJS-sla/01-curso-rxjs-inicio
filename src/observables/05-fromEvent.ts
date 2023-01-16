import { fromEvent, Observer } from "rxjs";


/**
 * enventos del DOM
 */
const src1$ = fromEvent<PointerEvent>(document,'click');
const src2$ = fromEvent<KeyboardEvent>(document,'keyup');

const observer = {
    next: value => console.log('next: ', value),
    // error: error => console.warn('error: ', error),
    // complete: () => console.info('complete')
};


src1$.subscribe(({x,y})=>{
    console.log(x,y)
});
src2$.subscribe(event=>{
    console.log({event: event.key})
});