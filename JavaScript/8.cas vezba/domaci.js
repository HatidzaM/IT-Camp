//1.fudbalski teren dimenzija dxs treba ograditi pravougaonom ogradom tako da rastojanje stranica ograde od linije terena r. Napisi program koji odredjuje duzinu ograde.
// Ulaz: U 3 reda standardnog ulaza nalaze se 3 cela broja:
// d - duzina terena u metrima (90 <= d <= 120)
// s - sirina terena u metrima (45 <= s <= 90)
// r - rastojanje ograde od terena u metrima(2 <= r <= 10)
console.log("1. zadatak")


let duzinat = +prompt("unesite duzinu terena 90 - 120")
let sirinat = +prompt("unesite sirinu terena 45 - 90")
let rastojanjeo = +prompt("unsite rastojanje ograde od terena 2 - 10")

if(isNaN(duzinat) || isNaN(sirinat) || isNaN(rastojanjeo)){
    console.log("unete vrednosti moraju biti brojevi.")
}
else if(duzinat >= 90 && duzinat <= 120 && sirinat >= 45 && sirinat <= 90 && rastojanjeo >= 2 && rastojanjeo <= 10){
    console.log("duzina ograde iznosi:" + 2*(duzinat+sirinat) + 8*rastojanjeo +"m")
}
else{console.log("niste uneli pravilne vrednosti")}


//PRAVILNIJE!!!
// const duzina = +prompt("Unesite duzinu terena: ");
// const sirina = +prompt("Unesite sirinu terena: ");
// const rastojanje = +prompt("Unesite rastojanje od ivice terena i ograde: ");
// if (isNaN(duzina) || isNaN(sirina) || isNaN(rastojanje)) {
//   console.log("Unete vrednosti moraju biti brojevi.");
// } else if (duzina < 90 || duzina > 120) {
//   console.log("Duzina terena mora biti izmedju 90m i 120m.");
// } else if (sirina < 45 || sirina > 90) {
//   console.log("Sirina terena mora biti izmedju 45m i 90m.");
// } else if (rastojanje < 2 || rastojanje > 10) {
//   console.log("Rastojanje terena mora biti izmedju 2m i 10m.");
// } else {
//   const obimTerena = 2 * duzina + 2 * sirina;
//   const obimOgrade = obimTerena + 8 * rastojanje;
//   console.log("Potrebno je " + obimOgrade + "m za ogradjivanje terena.");
// }



/*2. Korisnik unosi 2 broja : 
Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5*/
console.log("2. zadatak")


// let br1 = +prompt("unesite 1. broj")
// let br2 = +prompt("unesite 2. broj")
// let brojac = 0
// let suma = 0

// if(isNaN(br1) || isNaN(br2)){
//     console.log("unete vrednosti moraju biti brojevi")
// }
//  else if(br1 < br2){
//     for(let i = br1; i<=br2; i++){
//         if(i % 5 === 0){
//             brojac++
//             suma+=i
//         }
//         console.log(i)
//     }
// }

// /* else if(br1 > br2){
//     for(let i = br2; i >= br1; i--){
//         console.log(i)
//     }
// }*/

// else{
//     for(let i = br1; i<=br2; i--){
//         if(i % 5 === 0){
//             brojac++
//             suma+=i
//         }
//         console.log(i)
//     }
// }
// console.log(suma/brojac)





//2. nacin KOJI RADI
let br1 = +prompt("unesite 1. broj")
let br2 = +prompt("unesite 2. broj")
const br1ZaIspis = br1
const br2ZaIspis = br2
let brojac = 0
let suma = 0
if(br1===br2){
    console.log("uneti brojevi moraju biti razliciti")
}
else if(br1<br2){
    while(br1<=br2){
        if(br1 % 5 === 0){
            brojac++
            suma+=br1
        }
        br1++
    }
    console.log("aritmeticka sredina brojeva od manjeg do veceg: " + suma/brojac)
}

else if(br1>br2){
    while(br1>=br2){
        if(br2 % 5 === 0){
            brojac++
            suma+=br2
        }
        br2++
    }
    console.log("aritmeticka sredina brojeva od veceg do manjeg: " + suma/brojac)
}


/*3. korisnik unosi broj iz intervala [12,16). Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25. */
console.log("3. zadatak")


let broj = +prompt("unesite broj 12-16")
if(broj>=12 && broj<16){
    for(let i = broj; i >= 1; i--){
        console.log(i)
        console.log("njegov kvadrat:"+ i**2)
        console.log(/*"vrednost broja umenjena za 25:"+ */ i-25)
    }
}
else{console.log("niste uneli ispravan broj")}


//2. nacin
for(broj; broj >= 1; broj--){
    console.log(broj)
    console.log(broj**2)
    console.log(broj-25)
}