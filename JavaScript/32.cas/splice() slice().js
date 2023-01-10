//splice() metoda je njamocnija alatka kod nizova u js
//omogucava nam promeneu nizu na zeljenoj poziciji
//mozemo dodati i izbrisati klk hocemo elemenata na nekom mestu

const  niz = ["lala", "hatidz", "bela rada", "ljubicica", "pop kek", "cedevit"];
//uzima najmanje 2 argumenta

//1. argument predstavlja poziciju od koje ce se vrsiti neke promene
//2. argument predstavlja broj elemenata koji ce se izbrisati
// niz.splice(2, 3);
// console.log(niz);
//3.argument predstavlja vrednost koja ce se dodati na mestu koje so definisali 1. argumentom
//svi ostali argumenti su takodje vrednosti koje se dodaju unutar niza
// niz.splice(2, 0, "cvet");
// console.log(niz);


// 1.iz niza izbrisati sve biljke
// 2.iz niza izbrisati sve osim biljke
// 3.na petom elementu dodati "tarik", a na kraju niza dodati "omar"

// 1.
niz.splice(0, 1);
niz.splice(1, 2);
niz.splice(5, 1);
console.log(niz);

// 2.
niz.splice(1,1);
niz.splice(3,2);
console.log(niz);

// 3.
niz.splice(4, 0, "tarik");
niz.splice(niz.length, 0, "omar");
console.log(niz);


//console.log(niz.splice(1, 2)); splice() nam vraca niz sa izbrisanim elementima



//slice() metoda vraca deo niza
const skraceniNiz = niz.slice(2, 4);
console.log(skraceniNiz);
//izostavljanjem 2. argumenta uzima se ostatak niza
const skraceniNiz2 = niz.slice(4);
console.log(skraceniNiz2);
