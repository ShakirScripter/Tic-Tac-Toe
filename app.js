//first we want to access the button

let boxes=document.querySelectorAll(".box");

let reset=document.querySelector("#reset");

let newGamebtn=document.querySelector("#new-btn")
let containerCongt=document.querySelector(".container1");

let winner=document.querySelector("#winner");


let draw=document.querySelector("#Draw");
let newGame=document.querySelector("#newGame");
let container2=document.querySelector(".container2")


let turno=true;//playerx or playero

let winnningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
        drawgame();
    })
    
    
});

const resetGame=()=>{
    turno=true;
    enabledboxes();
    containerCongt.classList.add("hide");
}
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner1)=>{
    winner.innerText = `Congratulation! Winner is ${winner1}`;
    containerCongt.classList.remove("hide");
    disabledboxes();
}

const newGamestart=()=>{
    turno=true;
    enabledboxes();
    container2.classList.add("hide1");
}

let count=0;
const drawgame=()=>{
   count++;
    if(count===9){
        container2.classList.remove("hide1");
    }

}
    

const checkWinner=()=>{
    
    for(let patterns of winnningPattern){
            let pos1val=boxes[patterns[0]].innerText;
            let pos2val=boxes[patterns[1]].innerText;
            let pos3val=boxes[patterns[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                
                showWinner(pos1val);
                
                
            }
        }
    
            
    
    }
    
}
newGamebtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)
newGame.addEventListener("click",newGamestart);