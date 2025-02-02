console.log("Welcome to tic tac toe");
let music = new Audio("Gameover.mp3");
let audioTurn = new Audio("mixkit-game-click-1114.wav");
let gameover = new Audio("Gameover.mp3");
let turn = "X";
let over = false;


//Function to change the turn 
const changeTurn = ()=>{
    return turn === "X"?"O":"X";
}

//Function to check win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');

    let wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]    
    ]
    wins.forEach(e => {
        if(boxtexts[e[0]].innerText === boxtext[e[1]].innerText && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            over = true;
        }

    }) 

}

//Game Logic
// gameover.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin;
            if(!over)
            {
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }


    })


})