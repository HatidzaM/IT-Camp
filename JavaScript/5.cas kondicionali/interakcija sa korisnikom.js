//INTERAKCIJA SA KORISNIKOM

//prompt() metoda nam sluzi za komunikaciju sa korisnikom

const ime = prompt("unesite vase ime:")
console.log(ime)
//sve sto korisnik unese je tipa string
const godine = prompt("unesite vase godine:")
console.log(godine)
console.log(typeof godine)

//sad godine prevodimo u broj
//postoje 2 nacina za prevodjenje string->broj

//1. number(promenljiva)
const brGodina = Number(godine)
console.log(brGodina)
console.log(typeof brGodina)

//2.+promenljiva
const brGodina2 = +godine
console.log(brGodina2)
console.log(typeof brGodina2)

const visina = +prompt("unesite visinu u cm")
console.log(visina)
console.log(typeof visina)