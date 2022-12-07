// search() daje nam poziciju(index) nekog stringa (argumenta metode)
const recenica = "dosao omar."
const possition = recenica.search("omar");
console.log(possition);

//razlika izmedju indexOf() i search()
//1. indexOf() metoda dozvoljava drugi argument (pozicija odakle krece trazenja stringa)
//2. search () metoda dozvoljava Regular expressions

const recenica2 = "Danas je pobedio maroko,danas igraju Svajcarska i SUIIIII";
const position2 = recenica2.search(/danas/i);
console.log(position2);


// match () metoda nam vraca niz.
const matchingDanas = recenica2.match("danas");
const matchingDanas2 = recenica2.match(/danas/gi);
console.log(matchingDanas);
console.log(matchingDanas2);


// includes() vraca boolean u zavisnosti od toga da li se argument nalazi u stringu na koji primenjujemo metodu
const isPresence = recenica2.includes("Omar");
const isPresence2 = recenica2.includes("danas");
console.log (isPresence);
console.log (isPresence2);

//includes () metoda nam dozvoljava drugi argument sto zapravo predstavlja poziciju od koje ce se traziti dati string
const isPresence3 = recenica2.includes("danas",60);
console.log(isPresence3);


//startWith() & endsWith() vracaju boolean u zavisnosti od toga da li dati string pocinje (zavrsava) argumentom metode.
const startsWithDanas = recenica2.startsWith("Danas");
const endsWithDanas = recenica2.endsWith("danas");
console.log(startsWithDanas);
console.log(endsWithDanas);


//  JS Template Literals //

//  Bolja praksa je kristiti `` za pisanje stringa.
// Prednosti:

// 1.  Mozemo koristiti navodnike (obicne ili duple) unutar stringa 🐸
const recenica3 = `🐸  🐸  🐸  🐸  🐸  🐸  "🐸"  🐸  🐸  🐸  🐸  🐸  🐸  🐸  🐸  🐸  🐸 `

// 2. Template literals dozvoljavaju multiline  stringove
const recenica4= `asdadasdasd
asdasdasdasd
assdads`
console.log(recenica4)

// 3. Interpolacija - Omogucava laksi nacininterpolacije promenjvih unutar nekog stringa 
let a=  31;
let b= 2;
const recenica5 = `Jedna flasa ima zapreminu ${a}l, ukupna kolicina lmunade je ${b}l.Stoga mozemo napuniti ${Math.floor(b/a)}flasa limunade`;
console.log(recenica5);



// Napraviti funkciju koja ispituje argument
//Ako se u recenicu nadje rec "skola",neka se vrati pozicija prvog pojavljanja date reci
//Ako recenica pocinje sa recju "Automobil" neka se ispise true 
// Ako je recenica parne duzine neka se brati broj pojavljivanja reci "kuca "


function task(recenica){
    // const recenica = "automobil se pokvario, pa je skola cekala na mene i onda kuca.";
    if(recenica.includes("skola")){
        return recenica.indexOf("skola")
    }
    else if(recenica.startsWith("Automobil")){
        return true
    }
    else if(recenica.length % 2 === 0){
        let brojac = 0;
        if (recenica.includes("kuca")){
            for(let i = 0; i <= recenica.length -1;){
                if(recenica.includes("kuca" ,i)){
                    brojac++
                    i+=3
                }
                i++
            }
        }
        return `broj pojavljivanja reci "kuca" unutar datog stringa ${brojac}`
    }
}
console.log(task("skola je uticala da alen i hatidza spavaju za vreme casa"));
console.log(task("Automobil je prodat"));
console.log(task("ja zivim u stanu"));
console.log(task("kuca kucakuca kuca kuca."));






















// 🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱
























































// 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸 <3333 🐱 🐱🐱🐱🐱🐱