//1
let a = +prompt("unesite prvi broj:")
console.log(a)
let b = +prompt("unesite drugi broj:")
console.log(b)
if(isNaN(a) || isNaN(b)){
    console.log("unete vrednosti moraju biti brojevi")
}
else if(a===b){
    let kvadrat = a**2
    console.log(kvadrat)
}
else if(a!==b){
    let pravougaonik = a*b
    console.log(pravougaonik)
}
//za proveru da li je vrednost nekog broja NaN se koristi metoda:
// isNaN(vrednost)


alert("                                       DRUGI ZADATAK :D")

//2
let x = +prompt("unesite broj x:")
console.log(x)
let y = +prompt("unesite broj y:")
console.log(y)
if(isNaN(x) || isNaN(y)){
    console.log("unete vrednosti moraju biti brojevi")
}
else if(y===0){
    console.log("deljenje nulom nije moguce")
}
else{
    console.log("kolicnik unetih brojeva je" + x/y)
}

