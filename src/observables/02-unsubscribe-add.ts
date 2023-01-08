import { Observable, Observer } from "rxjs";



const observer: Observer<number> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
};

const interval$ = new Observable<number>(subscriber => {
    // Crear un contador 1,2,3,4,5,....
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    //limpiar el intervalo
    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    //cuando se llame al unsubscribe, se ejecuta el return
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1.add(subscription2)
subscription1.add(subscription3)

// cancelar la subscripcion
setTimeout(() => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Completado timeout');
}, 6000);