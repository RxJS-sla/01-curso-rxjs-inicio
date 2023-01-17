import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise , iterable, observable
 */

const observer = {
    next: value => console.log('next: ', value),
    complete: () => console.info('complete')
};

const miGenerador = function*(){
    yield 1;
    yield 2;
}

const miIterable = miGenerador()

from(miIterable).subscribe(observer)

// const source$ =from([1,2,3,4,5,6,7,8,9,10,11,12])
// const source$ =of([1,2,3,4,5,6,7,8,9,10,11,12])

// const source$ =from('panza')

const source$ =from(fetch('https://api.github.com/users/klerith'))
// source$.subscribe(async resp=>{
//     console.log(resp);

//     const dataResp = await resp.json();
//     console.log({dataResp});
// })