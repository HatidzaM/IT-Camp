// objekti su mutable(promenljivi)
// objekti su referentni tipovi podataka a ne vrednosni 

//*objekat.key=...*     //moze naknadno da se menja i dodaje vrednost, odvojeno od bloka, samo treba da se locira 
//const drugi = prvi;   //oba postaju jedno isto


//pristupanje odredjenim vrednostima objekta mozemo izvrsiti na 2 nacina
//jedan key:value par  zove se  PROPERTY (svojstvo)

//1. objectName.ptopertyName(person.firstName)
//2. objectName["propertyName"]
// (person["firstName"])



//  THIS  je keyword koja ukazuje na neki objekat
//nije promenljiva i ne mozemo promeniti vrednost this

//this ukazuje na razlicit objekat u zavisnosti od toga gde se koristi
//u nekom objektu this ukazuje na taj objekat
//u global scope this ukazuje na global object


//DESTRUCTURING  = izvlaci traZene vrednosti
firstname = person.firstname;
const{firstname, age}=person;


// Svi objekti u JS su povezani sa nekim Prototype Objektom. Tako da mozemo reci da svaki objekat ima Prototype.
// Prototype je objekat koji sadrzi odredjena svojstva i metode.


// Pravljenje objekta preko new keyword
    const obj3 = new Object({})