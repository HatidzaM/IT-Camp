//objekti su glavna stvar u js
//ptomrnljive koje sadrze vise vrednosti
//predtavljaju se u key:value parovima

const person = {
    firstName: "nikola",
    lastName: "bozovic",
    age: 18,
    adult: true,
}
console.log(person);

//pristupanje odredjenim vrednostima objekta mozemo izvrsiti na 2 nacina
//jedan key:value par  zove se property(svojstvo)

//1. objectName.ptopertyName(person.firstName)
//2. objectName["propertyName"]
// (person["firstName"])

console.log(person.firstName);
const punoletnost = person.adult === true ? "jeste" : "nije";
console.log(`${person['firstName']} ${punoletnost}punoletan`)



// OBJECT METHODS //
//metode su funkcije koje ce se izvrsiti na objektu
//metode su skladistene u svojstvima(prperrty) kao definicije funkcija



const person2 = {
    firstName: "alen",
    lastName: "muslic",
    age: 17,
    adult: false,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person2.fullName());


//u js THIS je keyword koja ukazuje na neki objekat
//this nije promenljiva i ne mozemo promeniti vrednost this

//this ukazuje na razlicit objekat u zavisnosti od toga gde se koristi

//u nekom objektu this ukazuje na taj objekat
//u global scope this ukazuje na global object

