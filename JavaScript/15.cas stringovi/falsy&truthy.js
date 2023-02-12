//thruthy & falsy values
const isSunny = false;
if(isSunny){
    console.log("napolju je suncano.");
}
else{
    console.log("napolju je kisa.");
}

//postoji samo 8 falsy vrednosti:
//1. false
//2. ""
//3. 0
//4. -0
//5. 0n
//6. undefined
//7. null
//8. NaN

//napraviti funkciju gde se trazi unos od korisnika i vraca poruku da li je uneta vrednost thrty ili falsy vrednost

function truty(unos){
    if(unos){
        return "uneta je thruthy vrednost";
    }
    else{
        return "uneta je falsy vrednost";
    }
}
console.log(truty('false'));

