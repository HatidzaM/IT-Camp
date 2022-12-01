// replace metoda vrsi zamenu nekoliko karaktera datog stringa. ima 2 argumenta
// po defaultu replace() metoda mennja samo ptvo pronalazenje(first match) stringa

const recenica = "danas smo podelili sertifikate za HTML, CSS + JavaScript";

console.log("1")
let recenica2 = recenica.replace("danas","juce");
console.log(recenica2)

console.log("2")
recenica2 = recenica.replace("s","t");
console.log(recenica2);
//za promenljivu svih pronalazenja datog stringa cemo koristiti regular expresions:

// 1. g - global
console.log("3")
recenica2 = recenica.replace(/s/g, "t");
console.log(recenica2);

// 2. i - insensitive
console.log("4")
recenica2 = recenica.replace(/s/i, "A");
console.log(recenica2);

console.log("5")
recenica2 = recenica.replace(/s/gi, "A");
console.log(recenica2);


//toUpperCase()
console.log(recenica.toUpperCase());
//toLowerCase()
console.log(recenica.toLowerCase());
console.log(recenica);

//concat() vrsi ispisivanje 2 ili vise stringova

let a = "danas je16.cas jave.";
let b = "imacemo preko 50 casova jave :O!";
let c = a + " " + b;
console.log(c);

c = a.concat(b);
console.log(c);

c = a.concat(" ", b, "\nnakon toga cemo raditi react.");
console.log(c);

//napomena
//sva string metode prave nepromenljivu ( jer su stringovi immutable vrednosti)



//napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// ako dati string ima vecu duzinu od 9 
// pravi novi string koji ce biti isecak od pola do kraja originalnog stringa. nakon toga u novom stringu
//menjamo sva mala slova a sa velikim slovom B i funkcija ce vratiti novi string koji je sastavljen od sledece recenice i na nju dodajemo isecak sa izmenama : "ovoS je novodobije receneica" i poslednjeg izmenjenog isecka 
//ako string ima duzinu <=9:
//funkcija treba vratiti sledecu poruku:
//argument + {njena duzina} + nedovoljno za dalje ispitivanje


////Math.ceil;  Math.floor;  Math.round;

const funkcija = function (recenica) {
    if (recenica.length > 9 ){
        let polaDuzine;
        // if (recenica.length % 2 === 0){
        //     polaDuzine = recenica.length / 2;
        // }
        // else if (recenica.length % 2 !== 0){
        //     polaDuzine = Math.ceil(recenica.length /2);
        // }

        polaDuzine = 
        recenica.length % 2 === 0
        ? recenica.length / 2
        : Math.ceil(recenica.length / 2);

        const isecak = recenica.slice(polaDuzine, recenica.length);
        const novaRecenica = isecak.replace(/a/g, "B");
        const konacno =   "Ovo je novodobijena recenica,".concat(novaRecenica);
        return konacno;
    }
    else{
        const recenica2 = recenica.concat(recenica.length, "nedovoljno za dalje ispitivanje.");
        return recenica2;
    }
};

console.log(funkcija("kraj casa"));
console.log(funkcija("kraj 2. casa rada sa tringovima."));





