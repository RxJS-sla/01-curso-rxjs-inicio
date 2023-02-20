import {map, fromEvent } from 'rxjs';


// range(1,5).pipe(
//     map<number, number>(val =>val*10)
// )
// .subscribe(console.log)

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyCode$ = keyUp$.pipe(
    map(event => event.code)
)

const keyUpPluck$ = keyUp$.pipe(
    map(x => x.key)
)


const keyUpMapTo$ = keyUp$.pipe(
    map(()=> 'tecla presionada')
)

keyUp$.subscribe(code => console.log('all', code))
keyCode$.subscribe(code => console.log('map', code))
keyUpPluck$.subscribe(code => console.log('pluck', code))
keyUpMapTo$.subscribe(code => console.log('mapTo', code))