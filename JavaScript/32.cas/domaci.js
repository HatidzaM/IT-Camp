// Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju,
// Napraviti funkciju koja vraca najveci element niza,
// Napraviti funkciju koja vraca najmanji element niza (na 2 nacina).
const niz = [-5, 6, 10, 45, 99, -44];

//od najveceg
// niz.sort((a,b) => b-a);
// console.log(niz);


//od najmanjeg 
// niz.sort((a,b) => a-b);
// console.log(niz);


// vraca najveci
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
console.log(najveci([-5, 6, 10, 45, 99, -44]))
