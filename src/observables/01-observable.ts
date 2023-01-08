import { Observable , Observer} from "rxjs";



const observer: Observer<string> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
};

// const observable$ = Observable.create(); = const observable$ = new Observable(); mismo resultado
const observable$ = new Observable<string>(subscriber => {
    subscriber.next("Hola");
    subscriber.next("Mundo");

    // // Forzar un error -> si encuentra un error en el observable, no se ejecuta el complete
    // const a = undefined;
    // a.nombre = "Santiago";

    //aca se completa el observable
    subscriber.complete();

    subscriber.next("Hola");
    subscriber.next("Mundo");
});

// observable$.subscribe(res=>console.log(res));
// observable$.subscribe(console.log);
// observable$.subscribe({
//     next: next => console.log('Next: ', next),
//     error: error => console.warn('Error: ', error),
//     complete: () => console.log('COMPLETE')
// });
observable$.subscribe(observer);