//JS Set je kolekcija unikatnih vrednosti

const mySet = new Set ([14, "it camp", true, [1,2,3]]);
console.log(mySet);

//metode:
//new Set() - za kreirenje seta
//add() - za dodavanje elemenata
//delete() - za brisanje
//has() - za proveru da li set sadrzi odredjenu vrednost
//forEach() - iteracija kroz set
//values() - vraca iterator sa vrednostima iz seta
//.size - property za proveru duzine seta

mySet.add(false);
console.log(mySet);

mySet.delete(true);
console.log(mySet);

console.log(mySet.has(false));

mySet.forEach((el)=>console.log(el));

console.log(mySet.values());

console.log(mySet.size);


//I nacin
const duplikati=function(niz){
    const novi = [];
    for(let i=0; i<niz.length; i++){
        if(!novi.includes(niz[i])){
            novi.push(niz[i])
        }
    }
    return novi
}
console.log(duplikati([1,1,1,2,3,4,1]));

//II nacin
function novi2(niz){
    const newSet = new Set(niz)
    const newArr = [...newSet]
    return newArr
}
console.log(novi2([1,1,1,2,3,4,5]))


//mape u JS sadrze key-value parove gde keys mogu biti bilo kog tipa podatka
//mape pamte originalni redosled elemenata

const myMap = new Map([
    ["apple", 60],
    ["orange", 90],
    [true, 19]
]);
console.log(myMap);

//metode:

//new Map() - za kreiranje nove mape

//set() - za setovanje vrednosti  *izmena,pravljenje novog*
myMap.set("cherry",240);
myMap.set(true, 3);
console.log(myMap);

//get() - za dobijanje vrednosti odredjenog kljuca
console.log(myMap.get("apple"));

//delete() - brise key-value par
myMap.delete("orange");
console.log(myMap);

//has() - proverava na osnovu kljuca da li je odredjeni key-value par prisutan u mapi
console.log(myMap.has(true));
console.log(myMap.has("strawberry"));

//entries() - vraca key=value parove u iteratorima
console.log(myMap.entries());

//.size
console.log(myMap.size);


