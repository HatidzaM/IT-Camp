//1. var         redeklarisanje i reinicijalizacija dozvoljeno
var x; //deklarisanje (obezbedjivanje lokacijske memorije za x)
x = 15; //inicijalizacija (dodela vrednosti vec deklarisanoj x)
// var x = 15;
console.log(x);


//2. let         postoji mogucnost promene vrednosti
let a, b, c; //korektan nacin deklarisanja

let y;
y = 14;
// let y = 14;  
console.log(y)

y=12;
console.log(y);

//promenljive koje su def. let ili const nam obezbedjuju Block Scope{}!
{
    //console.log(y); //prepoznaje se y iz Global Scope.
    let y = 19;
    console.log(y);
}
console.log(y); //ispisuje se 12, poslednja dodeljena vrednost unutar Global Scope


//3. const         redeklarisanje i reinicijalizacija nije dozvoljeno 
const z = 26; //moraju direktno da se deklarisu i inicijalizuju
console.log(z);

