//sort() sortiranje niza abecedno
const voce = ["jabuka", "jagoda", "tresnja", "kruska", "banana"];
voce.sort();
console.log(voce);

//reverse(z-a) obrnutim redosledom
voce.sort();
voce.reverse();
console.log(voce);

const brojevi = [24, 36, -5, 22, 45, -99, 67];
brojevi.sort();
console.log(brojevi);
brojevi.reverse();
console.log(brojevi);

const brojevi2 = ["21", "1000", "9"];
brojevi2.sort();
console.log(brojevi2);

//sort() metoda ne vrsi ispravno sortiranje brojeva
//za resavanje tog problema se kos=risti callback funkcija unutar sort metoda

//funkcija koja se salje kao argument unutar neke druge funkcije se zove callback funkcija

//1
// function poredjaj(a, b){
//     return a - b
// }
// brojevi2.sort(poredjaj);
// console.log(brojevi2);

//2
// brojevi2.sort(function(a, b){
//     return a - b
// });
// console.log(brojevi2);

//3
brojevi.sort((a,b) => a-b);
console.log(brojevi);

brojevi.sort((a,b) => b-a);
console.log(brojevi);


//ako zelimo da niz sortira brojeve random 
brojevi.sort(()=> 0.5 - Math.random());
console.log(brojevi);