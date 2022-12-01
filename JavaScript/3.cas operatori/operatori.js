//OPERATORI U JS
/*
1. aritmeticki operatori (aritmetic):  +, -, *, /, **, %,  ++(increment),  --(decrement)
2. operatori dodele vrednosti (assigment):  =,  +=,  -=,  *=,  /=,  %=,  **=
3. string operatori:  +: console.log(typeof("string + broj == string")) a za ostale znake prevodi u broj 
4. operatori poredjenja (comparison): ==,  ===(jednakost tipa i vrednosti), !=,  !==,  >  <  >=  <=  
? (radnnja koja se izvrsava ako je uslov zadovoljen)  :(ako nije)
5. logicki operatori (logical): &&(zahteva zadovoljavanje svih uslova),  ||,  !(not-okrece iz true u false)
6. tip operatori (type):  typeof,  instanceof(da li je instanca objekta)
*/

// console.log(boolean("string neki"))  =>bude true!!!

let issunny = false;
issunny 
? console.log("vreme je suncano" + "ponesite naocare") 
: console.log("vreme je kisovito" + "ponesite kissobran")


let a1 = 4
let b2 = 19
let c3 = -3

a1>0 && b2>0 && c3>0
? console.log("sve tri v. su pozitivni brojevi")
: console.log("sve tri v. nisu pozitivni brojevi")

a1>0 || b2>0 || c3>0
? console.log("nasli smo jednu vecu od nule")
: console.log("dwskjdh")

const obj = {
    ime:"najla", prezime: "subakovic"
}
console.log(obj instanceof Object)