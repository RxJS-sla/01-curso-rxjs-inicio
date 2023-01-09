import { Observable, Observer, Subject } from "rxjs";



const observer: Observer<number> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
};


const interval$ = new Observable<number>(sub =>{
    const intervalID = setInterval(() => sub.next(Math.random()),1000)

    return ()=>{
        clearInterval(intervalID)
        console.log('intervalo destruido')
    };

})




/**
 * 1 - casteo multiple -> muchas subscripcion estaran sujetos a ese mismo subject y me sirve para suministar la misma informacion
 * 2 - También es un observer -> nos permite como  argumento al subscribe , permite mandar misma información al que esta subscribe como en el ejemplo
 * 3 - Next, error y complete -> Permite ingresar data
 */

const subject$ = new Subject<number>();
const subscription = interval$.subscribe(subject$)


const subscription1 = subject$.subscribe(observer)
const subscription2 = subject$.subscribe(observer)


setTimeout(() => {
    subject$.next(10);

    subject$.complete();

    //aca si manda el return
    subscription.unsubscribe();
}, 3500);