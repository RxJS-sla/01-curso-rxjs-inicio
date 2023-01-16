import { observeOn, range, asyncScheduler } from 'rxjs';

// asyncScheduler -> lo vuelve asincrono
const src$ = range(1,5).pipe(observeOn(asyncScheduler));

console.log('inicio');
src$.subscribe(console.log)
console.log('fin');