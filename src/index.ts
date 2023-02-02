import { range , map, fromEvent } from 'rxjs';


// range(1,5).pipe(
//     map<number, number>(val =>val*10)
// )
// .subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyCode$ = keyUp$.pipe(
    map(event => event.code)
)


keyCode$.subscribe(code=> console.log('map',code))
