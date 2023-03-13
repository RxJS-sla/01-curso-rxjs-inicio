import { fromEvent, map, tap } from 'rxjs';

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et tincidunt nunc, eget bibendum lacus. Etiam dictum risus non lacinia cursus. Nam at mauris sed augue ornare dictum eget sed ligula. Integer vulputate auctor augue eget elementum. Etiam id eleifend turpis. Morbi ultricies ex et tellus accumsan pellentesque. Integer eleifend dapibus varius. Quisque mattis magna enim, eu rutrum metus pharetra nec. Curabitur justo felis, gravida eget eros eu, bibendum pharetra velit. Mauris blandit mi in mollis dignissim. Cras sollicitudin, lacus vel varius ornare, justo nunc aliquet libero, ut ultrices nisl nulla ut neque. Sed suscipit dignissim convallis. Phasellus interdum commodo dolor a vulputate. Aliquam rhoncus in diam nec eleifend. Cras venenatis eu justo vel mattis.
<br/><br/>
Proin faucibus pharetra augue volutpat viverra. Phasellus magna turpis, ultricies fringilla porta a, luctus at lorem. Quisque nunc quam, molestie quis felis eu, placerat venenatis libero. Maecenas ut turpis vitae nisl mollis finibus eu ac est. Sed accumsan massa ac interdum lobortis. Fusce tempor leo eget ante varius fringilla. Curabitur ullamcorper faucibus ante, ut aliquet diam pellentesque euismod. Duis sodales auctor risus nec malesuada. Suspendisse consectetur, tortor et consectetur pellentesque, metus felis tincidunt neque, in malesuada eros ante nec augue. Nulla vehicula iaculis metus ac rhoncus.
<br/><br/>
Aliquam iaculis tellus id diam scelerisque rhoncus. Quisque fermentum vestibulum magna, nec auctor odio consectetur sed. Pellentesque sed ex eu sem tempus convallis sit amet sed tortor. Nam sit amet libero in ipsum varius tempus ac eget dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nisl felis, bibendum at varius eu, luctus in lectus. Nam lobortis ex vitae semper imperdiet. Maecenas aliquam quam fermentum, facilisis diam faucibus, semper augue. Maecenas accumsan, ipsum quis fringilla aliquam, eros lorem tincidunt est, sed euismod enim purus eget dui. Nunc quis convallis lectus. Donec ligula tortor, tempus a purus ac, fringilla posuere mi.
<br/><br/>
Proin ut efficitur lectus. In ac enim ligula. Maecenas volutpat libero at ligula dignissim iaculis. Nullam id erat posuere, faucibus arcu in, imperdiet neque. Aliquam at lobortis velit. Nulla id tincidunt massa. Donec sit amet fringilla metus. Sed in pulvinar mauris. Curabitur egestas, est sit amet faucibus tincidunt, nisi enim rhoncus tortor, ut interdum leo tellus non ex.
<br/><br/>
Maecenas vestibulum ut augue non scelerisque. Duis augue lectus, scelerisque vitae arcu nec, volutpat efficitur magna. Donec commodo arcu vitae commodo tincidunt. Sed aliquet pellentesque consectetur. Nullam nec urna nisl. Maecenas ut lorem posuere, viverra sapien et, sagittis nisl. Mauris luctus, enim id fermentum porta, metus felis facilisis arcu, non fringilla mauris arcu sit amet purus. Phasellus lobortis orci id dui faucibus, in fermentum nunc auctor. Mauris elementum, est vitae vulputate venenatis, magna dui pretium diam, id tincidunt tellus enim a urna. Nunc id facilisis metus. Pellentesque consectetur semper neque hendrerit venenatis. Aliquam erat volutpat. Duis consectetur lobortis lectus, eget aliquet turpis feugiat vel. Donec quis quam dolor. Ut pulvinar sapien ligula. 
`;


const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

//todo: funcion para hacer calculo
const calculatePercentageScroll = ({target:{documentElement} }: any)=>{
    const {scrollTop, scrollHeight, clientHeight} = documentElement;
    const percentage = (scrollTop/(scrollHeight - clientHeight)) * 100

    return percentage;
}

//streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map(e =>calculatePercentageScroll(e)),
    tap(console.log)
);

progress$.subscribe(porcentage => {
    progressBar.style.width = `${porcentage}%`
})