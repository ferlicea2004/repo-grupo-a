const pizarra=document.querySelector('.board');
const celdas=document.querySelectorAll('.cell');
const display=document.getElementById('winner');

let actualPlayer='X';
let gameActive=true;
let pizarraState=['','','','','','','','','']

function verificarganador(){
    const combinacionganadora=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(const combinaciones of combinacionganadora){
        const [a,b,c]=combinaciones;
        if(pizarraState[a] && pizarraState[a]=== pizarraState[b] && pizarraState[a]===pizarraState[c]){
            return pizarraState[a];
        }
    }
    return null;
}

function verificaclickcelda(event){
    const cell=event.target;
    const index=cell.dataset.index;
    if(!gameActive || pizarraState[index]) return;
    pizarraState[index]=actualPlayer;
    cell.textContent=actualPlayer;
    cell.classList.add('taken');

    const winner= verificarganador();

    if(winner){
        display.textContent=`${winner} ha ganado!!!`;
        gameActive=false
    } else if (!pizarraState.includes("")){
        display.textContent='GATO';
        gameActive=false;
    }else{
        actualPlayer=actualPlayer==='X' ? 'O':'X';
    }
}

celdas.forEach(cell => cell.addEventListener('click', verificaclickcelda));