//niz predstavlja strukturu podataka koja moze sadrzati vise od jedne vrednosti
//nizovi su heterogeni - mogu sadrzati elemente razlicitih tipova
// pristupanje elementima se vrsi preko indexa

const niz = ["hatidza", "mahmutovic", 17, false];
console.log(niz);

const auto = [];
auto[0] = "BMW";
console.log(auto);
auto[1] = "audi";
console.log(auto);
auto[5]="golf";
console.log(auto);
console.log(auto[3]);
auto[0] = "Bobo";
console.log(auto);

const niz2 = new Array("lala", "ljubicica","maslacak");
console.log(niz2);
//niz = new Array(x)   new Array ce napraviti niz od x praznih mesta   


//postoje 2 nacina za ispitivanje sa li je neka promenljiva niz:
console.log(typeof auto);

//1. Array.isArray(niz)
console.log(Array.isArray(auto));
console.log(Array.isArray("neki string"));

//2.niz instanceof Array
console.log(auto instanceof Array);


//za proveru duzine niza - length
console.log(auto.length);

//za dodavanje elementa na kraju niza - push()
const dani = ["ponedeljak", "utorak"];
dani.push("sreda");
dani.push("cetvrtak", "petak");
console.log(dani);

//bez push
dani[dani.length-1] = "subota";
console.log(dani);

//za pretvaranje niza u string mozemo iskoristi 2 metode:
//1. toString()
//2. join()

//1.
const daniS = dani.toString();
console.log(daniS);
const nizz = daniS.split("a");
console.log(nizz);

//2.  
//classic primer:
const daniS2 = dani.join("😺");
console.log(daniS2);
//dobijanje string i stavljanje nekog znaka izmedju elemenata niza kojji smo pretvorili u string  

// jedenmi se pop kek 
// dani.pop() vraca vrednost izbrisanog elementa
const subota = dani.pop();
console.log(dani);
console.log(subota);






// ja sam Alen Muslic 17 godina imam 