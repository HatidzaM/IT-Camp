//stringovi za immutable promenljive, nije moguce vrsiti modifikaciju postojeceg stringa
//Alternativa je da napravimo novi string i tada je moguce dodavati vrednosti kad god zelimo

let rec1 = "petak"
console.log(rec1[2])

//toUpperCase()
let PETAK = rec1.toUpperCase()
console.log(PETAK)
//console.log(rec1.toUperCase())

//toLowerCase()
let petak = PETAK.toLowerCase()
console.log(petak)
//console.log(PETAK.toLowrCase())



const recenica0 = "zelimo datu recenIcU PtiKAZAti Malim, Isto tAKO veLikim slOVima"
let recm = recenica0.toUpperCase()
let recv = recenica0.toLowerCase()
console.log(recm)
console.log(recv)



//ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom
const recenica = "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa. nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it campa."

let novaRecenica = ""
for(let i = 0; i<recenica.length; i++){
    if(i === 0){
        novaRecenica += recenica[i].toUpperCase()
    }
    else if(recenica[i-1] === " "){
        novaRecenica += recenica[i].toUpperCase()
    }
    else{
        novaRecenica += recenica[i]
    }
}
console.log(novaRecenica)



const recenica2 = "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa. nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it campa"

let novaRecenica2 = ""
for(let i = 0; i<recenica2.length; i++){
    if(i === recenica2.length-1 || i+1 === "." || i+1 === ","){
        novaRecenica2 += recenica2[i].toUpperCase()
    }
    else if(recenica[i+1] === " "){
        novaRecenica2 += recenica2[i].toUpperCase()
    }
    else{
        novaRecenica2 += recenica2[i]
    }
}
console.log(novaRecenica2)


