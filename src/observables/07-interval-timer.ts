import { interval , timer} from 'rxjs';

//es asincorno
const interval$ = interval(1000)

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds()+5); // le sumo al valor actual 5
// emeite el valor en un intervarlo de tiempo ,
// const timer$ = timer(1000)
// emeite el valor en un intervarlo de tiempo , si tiene 2 argumentos envia la secuencia cada 2 segundos
// const timer$ = timer(2000,1000)
//* posible uso: cuando necesito que el valor se ejecute 5 segundos (en este ejemplo), la tarea en x tiempo
const timer$ = timer(hoyEn5)

const observer = {
    next: value => console.log('next: ', value),
    complete: () => console.info('complete')
}

console.log('inicio');
// interval$.subscribe(observer)
 timer$.subscribe(observer)
console.log('fin');