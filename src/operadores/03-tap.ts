import { map, range, tap } from "rxjs";

const numeros$ = range(1, 5);

numeros$.pipe(
    tap(x => {
        console.log('antes',{x})
        //no devuelve return
        return 100;
    }),
    map(val=>val*10),
    tap({
        next: value => console.log('despues',value),
        complete: () => console.log('se termino todo cao')
    }),
)
.subscribe((val)=>console.log('sub',{val}))