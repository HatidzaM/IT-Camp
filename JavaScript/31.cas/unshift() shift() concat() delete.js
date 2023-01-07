// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata.
// prikazuje novu duzinu niza.

const niz = ["When you're feelin' low ", "I'll be there too"];
niz.unshift("I'll reach for you");
console.log(niz);

console.log(niz.unshift("<3", "When you're all alone"));
console.log(niz);

// shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1.
// vraca izbrisani element. Kao kod pop() metode.

console.log(niz.shift());
console.log(niz);

// delete keyword za prisanje odredjenog elementa unutar niza:
// Preko delete keyword mozemo izbrisati bilo koji element iz niza ali na taj nacin ostavljamo rupe u nizu (undefined vrednosti).

console.log(niz.length);

delete niz[1];
console.log(niz);

// concat() metoda se koristi za spajanje nizova. concat() metoda pravi novi niz. S tim sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz.

const muskarci = ["alen", "leni"];
const devojke = ["hatidza", "tidza", "zaba"];
const grupa = muskarci.concat(devojke, "(^._.^)ﾉ");
console.log(grupa);

// Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Omar ne sme naci nigde.
const podeliNiz = (niz) => {
    const muskarci = [];
    const devojke = [];
    for (let osoba of niz) {
        if (osoba === "(^._.^)ﾉ") {
        continue
        }
        else if (osoba[osoba.length - 1] === "a") {
        devojke.push(osoba);
        }
        else {
        muskarci.push(osoba);
        }
}
return `Muskarci su: ${muskarci} \n
Devojke su: ${devojke}`
}
console.log(podeliNiz(grupa)); 

// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na neparnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [1,3,5,7,9,11,13]

const neparnePozicije = (niz) => {
    const neparni = [];
    for (let i = 0; i < niz.length; i += 2) {
        neparni.push(niz[i]);
    }
return neparni;
}
console.log(neparnePozicije([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));





