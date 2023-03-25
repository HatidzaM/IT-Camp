console.log(document.all);
// let button = document.getElementsByClassName("button");
let button = document.querySelector("button");
let attemptsEl = document.querySelector("#attepts")
let txtNumber = document.querySelector("#inputBr")

let input = document.getElementById("inputBr");
let help = document.getElementsByClassName("pomoc");
let body = document.getElementsByTagName("body");


let score = 20;
let highScore = 0;
let attepmts = 20;


button.addEventListener("click" , function(){
    
    const randomBr = Math.floor(Math.random() * 20) + 1;
    console.log(randomBr);

    if(attepmts > 0){
        attepmts--;
        attemptsEl.textContent = attepmts;
        let guess = Number(txtNumber.value);

        if(guess === randomBr){
            body.style.backroundColour = "green";
            document.getElementsByTagName("h1").textContent = 'WELL DONE!'
            document.getElementsByTagName("h1").textContent.style.colour = "white";
            document.getElementsByTagName("h1").textContent.style.fontSize = "7rem";
            document.all[10].style.display = "none";
        }
        else{
            body.style.backroundColour = "black";
            document.getElementsByTagName("h1").textContent = 'GAME OVER!'
            document.getElementsByTagName("h1").textContent.style.colour = "white";
            document.getElementsByTagName("h1").textContent.style.fontSize = "7rem";
            document.all[10].style.display = "none";
        }
        

        // if(input > randomBr){
        //     attepmts--;
        //     attemptsEl.textContent = attepmts;
        //     // attepmts.append =(pomoci - 1);
        //     help.append = ("too low");
        // }
        // else if(input < randomBr){
        //     attepmts.append =-1;
        //     help.append = ("too high");
        // }
        // else if(input === randomBr){
        //     body.style.backroundColour = "green";

        //     document.getElementsByTagName("h1").textContent = 'WELL DONE!'
        //     document.getElementsByTagName("h1").textContent.style.colour = "white";
        //     document.getElementsByTagName("h1").textContent.style.fontSize = "7rem";
        //     document.all[10].style.display = "none";
        // }
    }
    else{
        body.style.backroundColour = "black";
        document.getElementsByTagName("h1").textContent = 'GAME OVER!'
        document.getElementsByTagName("h1").textContent.style.colour = "white";
        document.getElementsByTagName("h1").textContent.style.fontSize = "7rem";
        document.all[10].style.display = "none";
    }
});
