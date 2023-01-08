import { Observable } from "rxjs";

// const observable$ = Observable.create(); = const observable$ = new Observable(); mismo resultado
const observable$ = new Observable<string>(subscriber => {
    subscriber.next("Hola");
    subscriber.next("Mundo");

    // // Forzar un error
    // const a = undefined;
    // a.nombre = "Fernando";

    //aca se completa el observable
    subscriber.complete();

    subscriber.next("Hola");
    subscriber.next("Mundo");
});

observable$.subscribe(console.log);