document.getElementById('paragraf').innerHTML = "ovo je paragraf koji je unet naknadno";

paragraf = document.getElementById("paragraf");

paragraf.style.backgroundColor = "violet";

console.log("ovo je nas prvi ispis u konzoli");

//tipovi podataka u javi//
//za proveru tipa neke promenljive(varijable) se koristi typeoof operator

//       PRIMITIVNI TIPOVI PODATAKA
//primitivni tipovi podataka se koriste kada imamo promenljivu tj. varijablu sa samo jednom vrednoscu

//1.stringovi
console.log("ovo je neki string napisan unutar duplih navodnika");
console.log(typeof "ovo je neki string napisan unutar duplih navodnika");

//2. number - broj sa ili bez zareza
console.log(14);
console.log(typeof 14);


//3. BigInt - se koristi za skladistenje brojeva cija granica prelazi granicu number tipa podatka//
console.log(BigInt(18939748771484454848));
console.log(typeof BigInt(18939748771484454848));

//4. boolean - logicki entitet koji moze da ima 2 vrednosti: true i false 
//najcesce se koristii u  kondicionalu (if naredbe) i ima veliku primenu
daLiPadaKisa = false;
console.log(daLiPadaKisa);
console.log(true);

//5. undefined - javlja se kada imamo neku deklarisanu promenljivu ali joj nismo dodelili vredost
//u tom slucaju i vrednost i tip promenljive je undefinet

let prom1; //deklarisanje promenljive
prom1=54; //inicijalizacija tj. promena vrednosti promenljive

//6. null - za postojecu nepromenljivu ili promenljivu kojoj smo dodelili nekorektnu vrednost

skola = null;
console.log(skola)
console.log(typeof skola);

//7. symbol - novi tip podatka koji se koristi za dodeljivanje jedinstvene ili anonimne vrednosti

x= Symbol("Danas je lepo vreme.");
console.log(x);
y= Symbol("Danas je lepo vreme.");
console.log(y);

console.log(x === y);



//       SLOZENI TIPOVI PODATAKA
//za promenljive koje mogu skladistiti vise vrednosti ili neke kompleksne  

//kada ispitujemo tip podatka za neku neprimitivnu varijablu dobijamo OBJECT za tip!

//1. nizovi(arrays) - sluzi za skladistenje vise vrednosti
//moze sadrzati elemente razlicitog tipa
niz1 = ["mitar","dzenan","haris"];
console.log(niz1);

niz2 = ["amer", 15 , false]
console.log(niz2)

niz3 = new Array("mitar","dzenan","haris")
console.log(niz3);

//2. objekti(object) - glavni neprimitivni 
//zapisuju se po principu  name:value pair
obj1 = {
    ime:"mehmed",
    prezime:"kucevic",
    godine:15,
    skola:"dva heroja",
    punoletnost: false
}
console.log(obj1.prezime)

obj2 = new Object({
    ime:"amer",
    prezime:"kucevic",
    godine:15,
    skola:"dunp",
    punoletnost: false})

//3. setovi(sets) - slicni nizovima sa razlikom da set ne moze da sadrze duplikate
set1 = new Set(["alen","hasan", "miona" , "alen"]) //nisu doozvoljeni duplikati
console.log(set1)

//4. mape(maps) - slicne objektima sa nesto drugacjim nacinom definisanja
map1 = new Map([
    ["jabuke", 50],
    ["jagode", 80],
    ["kruske", 60]
])
console.log(map1)