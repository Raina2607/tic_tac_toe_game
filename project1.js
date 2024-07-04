//to access every button
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;  //playerX, player0

//1D array
// let arr=["apple","banana","litchi"];

//2D ARRAY
// let arr2=[["apple","litchi"],["potato","mushroom"],["pants","shirts"]];
//0th index of array2 is itself an array
// to access apple we will write arr2[0][0]
//to access potato->arr2[1][0]

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//button ko click krne pe kuch action hona chahiye toh hum harr ek button pe eventListener lga dete hain
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){      //playerO
           box.innerText="O";
           turnO=false;
        }
        else{     //playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        //disbled a button so that if once cliced, value cannot change again

        checkWinner();
        //function call to check winner
    })
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        
        //to print inner text of each box
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[1]].innerText,
        // );


        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val!="" && pos2Val!="" && pos3Val!= ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                //to show the winner we can make another function
                showWinner(pos1Val);
            }
        }
    }
};


const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    //winner aane ke baad bhi we were able to add O and X, so to disable that, go to disable fn
    disableBoxes();
    //ab winner aane ke baad kisi bhi button ko click nhi kr payenge
}

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

//enable boxes ka fn so that jb new game shuru ho tb sbhi boxes enable hojaye
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const resetGame = ()=>{
   turnO=true;
   enableBoxes();
   //message container ko dubaara hide krna pdega kb reset krenge
   msgContainer.classList.add("hide");
}

//resetgame fn tb trigger hoga jb newgameBtn pe click hoga
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);