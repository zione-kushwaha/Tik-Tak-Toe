let box=document.querySelectorAll('.box');
let rstbtN=document.querySelector('#reset_game');
let newGame=document.querySelector('#new_button');
let container= document.querySelector('.msg_container');
let message=document.querySelector('#msg');

let turn0=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGames=()=>{
    turn0=true;
    enableBoxes();
    container.classList.add('hides');
}

box.forEach((e)=>{
    
    e.addEventListener('click',()=>{
        console.log('box is clicked');
        if(turn0){
            e.innerText='o';
            e.style.color='orange';
        }else{
            e.innerText='x';
            e.style.color='green';
        }
       e.disabled=true;
        turn0=!turn0;
        checkwinner();
    });
})

enableBoxes=()=>{
    for(let i of box){
        i.disabled=false;
        i.innerText='';
        i.classList.remove('blinking');
        i.classList.remove('line-through')
    }
}

disableboxes=()=>{
    for (let i of box){
        i.disabled=true;
    }
}
show_winner = (winner) => {
    message.innerText = `Congratulations! Winner is ${winner}`;
    container.classList.remove('hides');
    disableboxes();
   
 }
 
const checkwinner = () => {
    for (let i = 0; i < winpattern.length; i++) {
        let pattern = winpattern[i];
        let v1 = box[pattern[0]].innerText;
        let v2 = box[pattern[1]].innerText;
        let v3 = box[pattern[2]].innerText;
        if (v1 !== '' && v2 !== '' && v3 !== '') {
            if (v1 === v2 && v2 === v3) {
               
                 show_winner(v1);
                 box[pattern[0]].classList.add('blinking');
                 box[pattern[1]].classList.add('blinking');
                 box[pattern[2]].classList.add('blinking');
                 box[pattern[0]].classList.add('line-through');
                 box[pattern[1]].classList.add('line-through');
                 box[pattern[2]].classList.add('line-through');
            }
        }
    }
}

rstbtN.addEventListener('click',resetGames);
newGame.addEventListener('click',resetGames);
