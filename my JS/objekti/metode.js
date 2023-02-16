//metode su funkcije koje ce se izvrsiti na objektu
//metode su skladistene u svojstvima(properrty) kao definicije funkcija

delete obj.key;   //brise key i value
delete obj["key"];

obj.key = "..."   //dodavanje i menjanje

const niz = Object.values(obj);   //konvertovanje objekta u niz
delete
Object.keys(obj)          //vraca niz kljuceva
Object.entries(obj)       //vraca niz nizova: svaki podniz je niz od 2 elementa key,value
Object.freeze(obj)        //cini objekat nepromenljivim
Object.seal(obj)    //cini objekat promenljivim s tim sto nema mogucnost dodavanja/brisanja novih svojstava i metoda
Object.is(obj1, obj2)     //da li su isti  
//ako su obj1 i obj2 definisani, a obj3=ob1  =>  obj1,obj2 = false   obj1,obj3 = true
// ***objekti su referentni tipovi podataka a ne vrednosni = ne gleda vrednosti neko izjednacavanje
(...obj)                  //spread operator (...) kloniramo niz ili objekat.


//pozivanjem neke funkcije za odredjeni objekat se moze izvrsiti pomocu funkcije:
// 1. call()   1 - objekat na koji se primennjuje, ostali - argumnti metode koja se izvrsava
obj_sa_funkcijom.functija.call(obj_za_primenu);
functija.call(obj, 'argumenti','...');

// 2. apply()  1 - objekat na koji se primenjuje, 2 - niz gde smestamo argumente metode koja se izvrsava
functija.apply(obj, ['argumenti','...']);

// 3. bind()   zahteva prethodno definisanje promenljive (funkcije) za odredjeni objekat pa onda pozivanje funkcije sa eventualnim argumentima
const nova = functija.bind(obj);
console.log(nova("argumenti"));



