let boxes =document.querySelectorAll(".box");
let resetb=document.querySelector(".reset");
let newb=document.querySelector(".new");
let msgcontainer=document.querySelector(".mesg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [1,4,7],
    [2,4,6],
];




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const showwinner=(winner)=>{
    msg.innerText=`congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

let checkWinner=()=>{
    for(let pattern of winpatterns){
        pos1val=boxes[pattern[0]].innerText;
        pos2val=boxes[pattern[1]].innerText;
        pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

resetb.addEventListener("click",()=>{
    enableBoxes();
    msgcontainer.classList.add("hide");
});

newb.addEventListener("click",()=>{
    enableBoxes();
    msgcontainer.classList.add("hide");
});