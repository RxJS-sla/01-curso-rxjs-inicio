import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

// se ejecuta la siguiente hasta que acabe el anterior, no sigue en la cola hasta que finalice

const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );

click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe( console.log );




