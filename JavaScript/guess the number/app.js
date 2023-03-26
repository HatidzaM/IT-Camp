console.log(document.all);
// let button = document.getElementsByClassName("button");
let button = document.querySelector("button");
let attemptsEl = document.querySelector("#attempts");
let txtNumber = document.querySelector("#inputBr");
let secretNumEl = document.querySelector(".secret");
let body = document.querySelector("body");
let highscoreEl = document.querySelector("#highscore");
let helpEl = document.querySelector(".pomoc");
let scoreEl = document.querySelector("#score");
let h1El = document.querySelector("h1");

// let input = document.getElementById("inputBr");
// let help = document.getElementsByClassName("pomoc");
// let body = document.getElementsByTagName("body");


let score = 20;
let highScore = 0;
let attepmts = 20;

let randomBr = Math.floor(Math.random() * 20) + 1;
    console.log(randomBr);


button.addEventListener("click" , function(){
    if(attepmts > 0){
        attepmts--;
        attemptsEl.textContent = attepmts;
        let guess = Number(txtNumber.value);
        if(guess === randomBr){
            secretNumEl.textContent = randomBr;
            highScore = score > highScore ? score : highScore;
            highscoreEl.textContent = highScore;
            body.style.backrgroundColor = "#04a504";
            h1El.textContent = "WELL DONE!";
            h1El.style.color = "white";
            h1El.style.fontSize = "7rem";
            document.all[11].style.display = "none";
            helpEl.style.display = "none";
        }
        else if(guess !== randomBr){
            if(score > 0){
                body.style.backgroundColor = "#d3b896";
                setTimeout(()=>{body.style.backgroundColor="#ff0000";},300);
                score--;
                scoreEl.textContent = score;
                let help = guess > randomBr ? "too high" : "too low";
                helpEl.textContent = help;
                // help.style.fontWeight = 600;
            }
            else{
                scoreEl.textContent = 0;
                body.style.backgroundColor = "black";
                h1El.textContent = "GAME OVER!";
                h1El.style.color = "white";
                h1El.style.fontSize = "7rem";
                document.all[11].style.display = "none";
            }
        }
    }
    else{
        body.style.backgroundColor = "black";
        h1El.textContent = "GAME OVER!";
        h1El.style.color = "white";
        h1El.style.fontSize = "7rem";
        document.all[11].style.display = "none";
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
    // 
    // else{
    //     body.style.backroundColour = "black";
    //     document.getElementsByTagName("h1").textContent = 'GAME OVER!'
    //     document.getElementsByTagName("h1").textContent.style.colour = "white";
    //     document.getElementsByTagName("h1").textContent.style.fontSize = "7rem";
    //     document.all[10].style.display = "none";
    // }
});
