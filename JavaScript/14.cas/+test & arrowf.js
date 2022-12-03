//***  3. Zadatak sa testa:
let recenica1;
recenica1 = "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";
//  Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
// (i)	 se svi samoglasnici pretvore u velika slova;
// (ii)	 na kraju se doda ‘.’
// (iii) ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

function novaRecenica(recenica) {
    let recenica2 = "";
    for (let i = 0; i <= recenica.length; i++) {
        if (i === recenica.length) {
            recenica2 += ".";
    }
    else if (
        recenica[i] === "a" ||
        recenica[i] === "e" ||
        recenica[i] === "i" ||
        recenica[i] === "o" ||
        recenica[i] === "u") {
            recenica2 += recenica[i].toUpperCase();}
    else {
            recenica2 += recenica[i];}
}
return recenica2;
}
console.log(novaRecenica("Pocelo je svetsko prvenstvo u fudbalu"));



// !!! 2. Arrow function:

// const myFunction = () => {
// function code
// }

const proizvodDvaBroja = (br1, br2) => {
    return br1 * br2;
};
console.log(proizvodDvaBroja(2, 16));

// Ako Arrow funkcija ima samo jedan parametar, nije neophodno okruziti ga zagradama.
// Ako je funkcija jednostavna, tj. ako odmah vraca neki jednostavan izraz, onda sama sintaksa izgleda kraca
// (nije neophodno koristiti viticaste zagrade i return keyword)

const kvadratBroja = (broj) => broj ** 2;

// Napraviti arrow funkciju koja na ovnovu unete vrednosti vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN BROJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "UNETA JE NULA"
// Ako nije unet broj, ispisuje poruku "UNETA VREDNOST NIJE BROJ"

const unos = () => {
  const broj = Number(prompt("Unesite neki broj: "));
  if (isNaN(broj)) {
    return "UNETA VREDNOST NIJE BROJ";
  }
  else if (broj === 0) {
    return "UNETA JE NULA";
  }
  else if (broj > 0) {
    return "UNET JE POZITIVAN BROJ";
  }
  else {
    return "UNET JE NEGATIVAN BROJ";
  }
};
console.log(unos());



// Mail u toku radnog vremena:
const mail = function (satnica, minutnica) {
  if (satnica >= 9 && satnica < 17 && minutnica >= 0 && minutnica < 60) {
    return "Mail je stigao u toku radnog vremena.";
  }
  else {
    return "Mail nije stigao u toku radnog vremena.";
  }
};
console.log(mail(4, 39));
console.log(mail(14, 39));
// console.log(mail(9, 85));