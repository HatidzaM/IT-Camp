// Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju,
// Napraviti funkciju koja vraca najveci element niza,
// Napraviti funkciju koja vraca najmanji element niza (na 2 nacina).
const brojevi = [-5, 6, 10, 45, 99, -44];

//od najveceg
brojevi.sort((a,b) => b-a);
console.log(brojevi);


//od najmanjeg 
brojevi.sort((a,b) => a-b);
console.log(brojevi);


// vraca najveci

//I nacin
function maxel(niz){
    niz.sort((a,b)=> b-a);
    return niz[0]
}
console.log(maxel(brojevi));

//II nacin
console.log(Math.max.apply(null, brojevi));

//III nacin /moj
function najveci(niz){
    // const veciBr = a > b ? a : b;
    //     return veciBr
    let max = niz[0];
    for(let i=1; i<niz.length; i++){
        if(niz[i] > max){
            max = niz[i]
        }
        // else{ continue }
    }
    return max
}
console.log("ja"+najveci(brojevi));

//IV nacin
function maxx(niz){
    let max = Number.NEGATIVE_INFINITY;
    for(let broj of niz){
        if(broj>max){
            max=broj
        }
    }
    return max
}
console.log(maxx(brojevi));



// vraca najmanji
function najmanji(niz){
    let min = niz[0];
    for(let i=0; i<niz.length; i++){
        if(niz[i] < min){
            min = niz[i]
        }
    }
    return min
}
console.log(najmanji([-5, 6, 10, 45, 99, -44]));

