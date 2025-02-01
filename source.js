let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#new-btn");
let msg = document.querySelector(".msg-container");
let para = document.querySelector("#msg");

let playerO = true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

box.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
      if (playerO ===true)
      {
        box.innerText ="O";
        box.style.color="green";
        playerO = false;

      }
      else
      {
        box.innerText = 'X';
        box.style.color="darkblue";
        playerO = true;
      }
      box.disabled = true;

      checkwinner();
    });

});

const boxdisable = (()=>
{
  box.forEach((box)=>
  {
    box.disabled=true;
  });
});

const boxunable =(()=>
{
  box.forEach((box)=>
  {
      box.disabled = false;
      box.innerText ="";
  });
});

const showwinner= (winner)=>
{
  para.innerText=`Congratulation  winner is ${winner}`;
  msg.classList.remove("hide");
  boxdisable();
}

const checkwinner = ()=>
{
    for( let patterns of winpatterns)
    {
   let pos1 =box[patterns[0]].innerText;
   let pos2 =box[patterns[1]].innerText;
   let pos3 =box[patterns[2]].innerText;
   
   if(pos1 !='' && pos2 !="" && pos3 !="" )
   {
    if(pos1 === pos2 && pos2 === pos3)
    {
        console.log("winner",pos1);
        showwinner(pos1);
    }
   }
    }
}

const resetgame = ()=>
{
     playerO =true;
     boxunable();
      msg.classList.add("hide");
};

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);