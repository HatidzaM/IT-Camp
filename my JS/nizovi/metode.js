//Array.isArray(niz)  da li je niz
//niz instanceof Array

//to string()  /  join("...")
//push(-)  =           dodaje na kraju
//pop()  =            vraca zadnji izbrisani
//shift()  =          vraca prvi izbrisani
//delete  =           ostavlja rupe, pravi se undefined
//unshift(-)  =        dodaje na pocetku
//concat(-)  =         spajanje
//sort()
//reverse()
brojevi.sort((a,b) => a-b);//od najmanjeg
console.log(brojevi);

//splice( start , brisanje , dodavanje , ...)
//slice( start , end)  =      vraca deo niza
//indexOf(el , start)  =      vraca trazenu poziciju  +start
//lastIndexOf(el)  =          vraca poziciju zadnjeg pojavljivanja  - -1

//array.from()  =             pretvara u niz
//includes(el)  =               vraca boolean
//keys()  =                   vraca keys
//entries()  =                vraca key&value
const entries = niz.entries();
console.log(entries);
for(let i of entries){
    console.log(i)
}

// forEach(element, index, all)
// array.map()
// filter()  =                testira
// reduce(prev, curr)  =      vraca jednu vrednost

//every() =                   da li svi ispunjavaju uslov, vraca BOOLEAN
//some() =                    da li neki ispunjava uslov, vraca BOOLEAN
//find() =                    vraca vrednost prvog elementa koji je prosao test funkcije  - undefined
//findIndex() =               vraca index prvog elementa koji je zadovoljio uslov  - -1
