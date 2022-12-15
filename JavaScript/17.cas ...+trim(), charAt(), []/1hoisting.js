//   HOISTING
// hoisting predtavlja deklarisanje promenljivih pre same dodele vrednosti (u pozadini)
// prilikom citanja koda se "izvlaci" deklaracija na vrhu

//var a; da mi ne vidimo
a = 23;
console.log(a);

// var a; mozemo izvrsiti naknadnu deklaraciju vec izvrsene  promenljive preko var kezword
// (ali ne mora jer js to radi u pozadini prilikom citanja koda)

// let a; kasnije definisanje promenljive preko let nije moguce.

// const a; nije moguce zato sto sa const moramo i da inicijaliziramo u isto vreme
