let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgamebtn");
let msg=document.querySelector("#msg");
let message=document.querySelector(".message");
let turn0= true; // true for player 1, false for player 2

const winningcombinations=
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function resetGame() {
   turn0=true;
   enableboxes();
   message.classList.add("hide");

}



function disableboxes(){
    for(let box of boxes){
        box.disabled=true;
    }
}
function enableboxes()
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText=""; 
    }
}
boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        console.log("Box was clicked");
        if (turn0) {
            box.innerText ="O";
            turn0 = false; // Switch to player 2
        }else {
            box.innerText = "X";
            turn0 = true; // Switch to player 1
        }
        box.disabled=true; // Disable the box after clicking
        checkWinner();
    });
});
function showwinner(winner){

    msg.innerText="Congraulations!" + winner + " is the winner!";//`congrats ${winner} is the winner!`;alternative template literal
    message.classList.remove("hide");
    disableboxes();

}
function checkWinner() { 
    for (let combination of winningcombinations) {
        let pos1 = boxes[combination[0]].innerText;
        let pos2 = boxes[combination[1]].innerText;
        let pos3 = boxes[combination[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner ");
                showwinner(pos1);
            }           
        }
    }
}
newgamebtn.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);