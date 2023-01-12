//indexOf() metoda vraca poziciju elementa koji predstavlja argument date metode

const niz = ["hatidza", "bakir", "amir", "bakir", "alen"];
const bakir = niz.indexOf("bakir");
console.log(bakir + 1);
 const omar = niz.indexOf("omar") === -1 ? "nema ga" : niz.indexOf("omar") +1;
 console.log(omar);
//2. argument predstavlja poziciju od koje trazimo
const hatidza = niz.indexOf("hatidza", 1);
console.log(hatidza);

//lastIndexOf() metoda vraca poziciju poslednjeg pojavljivanja elementa koji predstavlja argument date metode i vraca -1 ako se el. ne nalazi u nizu
const lastBakir = niz.lastIndexOf("bakir");
console.log(lastBakir);

//Array.from() nam vraca niz, koji se pravi od nekog objekta koji ima length
const newniz = Array.from("svako slove ce biti poseban elemenat niza");
console.log(newniz);

// includes() metoda nam vraca boolean u zavisnosti od toga da li se argumenat nalazi u nizu
console.log(niz.includes('emin'));

//keys() metoda vraca Array Iterator Object sa kljucevima(indeksima) nekog niza
const indeksi = niz.keys();
console.log(indeksi);
for(let index of indeksi){
    console.log(index)
}

//entries() vraca Array Iterator Object sa key/value 
const entries = niz.entries();
console.log(entries);
for (let pair of entries) {
    console.log(pair);
}


// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function elements(niz, n){
    if(n>niz.length){
        return niz
    }
    else if(n === undefined){
        return niz[0]
    }
    else{
        return niz.slice(0, n)
    }
}
console.log(elements([2,4,56,3],2));