let userscore=0;
let compscore=0
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userscore_para=document.querySelector(".user_score");
const compscore_para=document.querySelector(".comp_score");

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const compchoice =gencompchoice();
    console.log("computer choice = ",compchoice);
    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper"? false :true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors"? false :true;
        }else{
            userwin = compchoice === "rock"? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

}
const showwinner = (userwin,userchoice,compchoice) => {
    if (userwin){
        userscore++;
        userscore_para.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win ! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscore_para.innerText=compscore;
        console.log("computer win");
        msg.innerText=`Computer win ! ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const drawgame = () =>{
    console.log("Game was Draw");
    msg.innerText="Game Draw";
    msg.style.backgroundColor = "#1F1A38";
}
const gencompchoice = () => {
    const options =["rock","paper","scissors"];
    const randind=Math.floor(Math.random()*3);
    return options[randind];

}