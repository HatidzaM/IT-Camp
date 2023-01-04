// DATE OBJECT //
//kriranje se vrsi preko new keyword
//kreiranje datuma mozemo izvrsiti na 4 nacina:

//1. new Date()
const trenutnoVreme = new Date();
console.log(trenutnoVreme);

//2. new Date(year, month, day, hour, minutes, seconds, miliseconds)
//meseci se racunaju od 0 do 11
//u ovom nacinu moramo da imamo min 2 , a max 7 argumenata
const rodjenje = new Date(2005, 2, 31, 13, 20, 33, 45);
console.log(rodjenje);
let datum = new Date(2013, 7);
console.log(datum);

//3.slanjem jednog argumenta unutar date()
//ovako napravljen datum je zapravo dodat broj milisekundi na 1.1.1970.
//defaultna  
const datumn= new Date(2022);
console.log(datumn);

//4. slanjem string u Date() kao argument.
// string ce biti parsenovan i dobicemo datum na osnovu toga
const datumm = new Date("August 31, 2005");
console.log(datumm);

//jedna i 2 cifre godine ce biti intrepertirane kao:
//19xx ili 190x
datum = new Date(86, 0);
console.log(datum);

datum = new Date(6, 0);
console.log(datum);

