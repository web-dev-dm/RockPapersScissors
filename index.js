const rock = "✊";
const papers = "🫱";
const scissors = "✌️";
const rockPapersScissors = [rock, papers, scissors];
const wordV = ["ROCK","PAPERS","SCISSORS"]
/*first button*/
document.querySelector(".buttonOne").addEventListener("click",function(){
    document.querySelector(".leftDiv").innerHTML=rock;
    document.querySelector(".yourScore").innerHTML="you choose ROCK";
    document.querySelector(".buttonOne").classList.add("afterPress");
    setTimeout(function(){
        document.querySelector(".buttonOne").classList.remove("afterPress");
    },200);
})
document.querySelectorAll(".buttons")[0].addEventListener("click", rpsGame)
/*second button*/
document.querySelector(".buttonTwo").addEventListener("click",function(){
    document.querySelector(".leftDiv").innerHTML=papers;
    document.querySelector(".yourScore").innerHTML="you choose PAPERS";
    document.querySelector(".buttonTwo").classList.add("afterPress");
    setTimeout(function(){
        document.querySelector(".buttonTwo").classList.remove("afterPress");
    },200);
})
document.querySelectorAll(".buttons")[1].addEventListener("click", rpsGame)

/*third button*/
document.querySelector(".buttonThree").addEventListener("click",function(){
    document.querySelector(".leftDiv").innerHTML=scissors;
    document.querySelector(".yourScore").innerHTML="you choose SCISSORS";
    document.querySelector(".buttonThree").classList.add("afterPress");
    setTimeout(function(){
        document.querySelector(".buttonThree").classList.remove("afterPress");
    },200);
})


document.querySelectorAll(".buttons")[2].addEventListener("click", rpsGame)
/* left side player */
document.querySelector(".buttonOne").addEventListener("click",function(){
    document.querySelector(".leftDiv").classList.add("backLight");
    setTimeout(function(){
        document.querySelector(".leftDiv").classList.remove("backLight");
    },200);
})
document.querySelector(".buttonTwo").addEventListener("click",function(){
    document.querySelector(".leftDiv").classList.add("backLight");
    setTimeout(function(){
        document.querySelector(".leftDiv").classList.remove("backLight");
    },200);
})
document.querySelector(".buttonThree").addEventListener("click",function(){
    document.querySelector(".leftDiv").classList.add("backLight");
    setTimeout(function(){
        document.querySelector(".leftDiv").classList.remove("backLight");
    },200);
})
/* Right Side Computer*/
document.querySelector(".buttonOne").addEventListener("click",function(){
    document.querySelector(".rightDiv").classList.add("backLight");
    setTimeout(function(){
        document.querySelector(".rightDiv").classList.remove("backLight");
    },200);
})
document.querySelector(".buttonTwo").addEventListener("click",function(){
    document.querySelector(".rightDiv").classList.add("backLight");
    setTimeout(function(){
        document.querySelector(".rightDiv").classList.remove("backLight");
    },200);
})
document.querySelector(".buttonThree").addEventListener("click",function(){
    document.querySelector(".rightDiv").classList.add("backLight");
    setTimeout(function(){
        document.querySelector(".rightDiv").classList.remove("backLight");
    },200);
})


/*main function */
function rpsGame() {
    const randomGen = Math.floor(Math.random() * 3);
    document.querySelector(".rightDiv").innerHTML = rockPapersScissors[randomGen];
    document.querySelector(".computerScore").innerHTML ="Computer choose "+wordV[randomGen];
    if(document.querySelector(".leftDiv").innerHTML === papers && document.querySelector(".rightDiv").innerHTML === rock) {
        document.querySelector(".status").innerHTML="YOU WON";
    }
    else if(document.querySelector(".leftDiv").innerHTML === scissors && document.querySelector(".rightDiv").innerHTML === papers) {
        document.querySelector(".status").innerHTML="YOU WON";
    }
    else if(document.querySelector(".leftDiv").innerHTML === rock && document.querySelector(".rightDiv").innerHTML === scissors) {
        document.querySelector(".status").innerHTML="YOU WON";
    }
    else if(document.querySelector(".leftDiv").innerHTML === document.querySelector(".rightDiv").innerHTML ) {
        document.querySelector(".status").innerHTML="DRAW";
    }
    else{
        document.querySelector(".status").innerHTML="you LOST, computer WON";
    }
}


// if(document.querySelector(".rightDiv p").innerHTML===rock){
//     document.querySelector(".rightDiv p").classList.add("computerBox")
// }
// else if(document.querySelector(".rightDiv p").innerHTML===scissors){
//     document.querySelector(".rightDiv p").classList.add("computerBox")
// }

