let gameseq = [];
let userseq = [];
let btns = ["yellow" ,"green" ,"red" ,"purple"];

let level = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function () {
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }

});

function GameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    },250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");

    },250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[ranIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    GameFlash(randBtn);
}

function checkAns(idx) {
    
    if(userseq[idx] === gameseq[idx]){
       if(userseq.length === gameseq.length){
        setTimeout(levelup,1000);
       }
    }else{
        h2.innerHTML = `Game Over! Your Score Was <b>${level} </b> <br> Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor = "Red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        resert();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    
    // console.log(userColor);
    userseq.push(userColor);
    // console.log(userseq);
    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn  of allbtns) {
    btn.addEventListener("click",btnPress);
}

function resert() {
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}