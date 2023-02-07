const person = {
    firstname:"hamed",
    lastname:"medjedovic",
    age:16,
}

//object.freeze(obj) = metoda cini objekat nepromenljivim
person.age = 17;
console.log(person);
// Object.freeze(person);
person.age = 22;
console.log(person);


//object.seal(obj) = cini objekat promenljivim s tim sto nema mogucnost dodavanja/brisanja novih svojstava i metoda
// Object.seal(person);
// person.age = 22;
console.log(person);
// delete person.age;
// console.log(person);


//object.keys(obj) = vraca niz kljuceva
console.log(Object.keys(person));


//object.entries(obj) = vraca niz nizova: svaki podniz je niz od 2 elementa
const entries = Object.entries(person);
console.log(entries);


const neww = entries.flat().filter((el)=> typeof el==="string");
console.log(neww);


//object.is(obj1, obj2)  ***objekti su referentni tipovi ppodataka a ne vrednosni 
const obj1 = {
    firstname:"alen",
    lastname:"muslic"
}
const obj2 = {
    firstname:"alen",
    lastname:"muslic"
}
const obj3 = obj1;
console.log(Object.is(obj1, obj2));
console.log(Object.is(obj1, obj3));



const ime = "hatidza";
const prezime = "mahmutovic";
const godine = 17;
const person2 = {
    ime,
    prezime,
    godine,
}
console.log(person2);


//destructuring  = izvlaci tracene vrednosti
const person3 = {
    firstname:"sara",
    lastname:"alic",
    age:"17",
}
// const firstname = person3.firstname;
// console.log(firstname);
const{firstname, age}=person3;
console.log(firstname);
console.log(age);



const godinee = [
    {starost:19},
    {starost:19},
    {starost:15},
    {starost:16},
    {starost:17},
    {starost:14},
    {starost:19},
];

//napraviti novi niz(punoletni) koji ce sadrzati one elemente (objekte) cija je starost veca od 17
const punoletni = godinee.filter((god)=>god.starost>17);
console.log(punoletni);



//1.
var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];










