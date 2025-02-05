import { asyncScheduler } from 'rxjs';

// setTimeout(()=>{},3000)


const saludar = () => console.log('hello world');
const saludar2 = (nombre:string) => console.log('hello world ' + nombre);

// asyncScheduler.schedule(saludar,2000)
// asyncScheduler.schedule(saludar2,2000,'cao')


// es = setInterval(()=>{},3000)  y no puede ser async
const subs$ = asyncScheduler.schedule(function(state) {
    console.log({state});

    this.schedule(state + 1 , 1000);
},3000,0)


// setTimeout(()=>{
//     subs$.unsubscribe();
// },6000)

asyncScheduler.schedule(()=>subs$.unsubscribe(),6000)