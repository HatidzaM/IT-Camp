//osnovni principi objektno orjentisanog programiranja:

//1. enkapsulacija
//princip skrivanja informmacija i funkcionalnosti objekta i pruzanje jednostavnog i jasnog interfejsa za rad sa objektom

//2. nasledjivanje(inheritance)
//ovaj princip omogucava kreiranje novih klasa na osnovu postojecih. Samim tim se nasledjuju sve funkcionalnosti postojecih klasa

//3. polimorfizam
//ovaj princip omogucava koriscenje istog koda za rad sa razlicitim tipovima objekata

//4. apstrakcija
//omogucava nam da izolujemo i identifikujemo bitne karakteristike objekta, a da zanemarimo manje bitne


class Person{
//privatna svojstva unutar klase:
    #ime;
    #prezime;
    constructor(ime, prezime, brgodina){
        this.#ime = ime;
        this.#prezime = prezime;
        this.godine = brgodina
    }
// privatna metoda unutar klase:
    #getInfo(){
        console.log(`${this.#ime} ${this.#prezime} ima ${this.godine} godina.`)
    }
    //get metoda sluzi za prikazivanje nekih svojstava koja su privatna unutatr klase
    get fullname(){
        console.log(`${this.#ime} ${this.#prezime}`)
    }
    //set metoda sluzi za promenu nekih svojstava koja su privatna unutatr klase
    set changename(newName){
        this.#ime = newName;
    }
}

const person1 = new Person("hatidza", "mahmutovic", 17);
console.log(person1);
// console.log(person1.getInfo());

//izvrasvanje get metode je sintaticki isto kao pozivanje nekog svostva, ali bez ()
console.log(person1.fullname);

//setovanje nove vrednosti putem set metode se vrsi na nacin kao da modifikujemo vrednost nekog objekta, s tim sto se pozivamo na naziv set metode.
person1.changename = "miona";
console.log(person1.fullname);




//POLIMORFIZAM

//primer

class Oblik{
    constructor(x,y){
        this.x =x;
        this.y = y;
    }

    povrsina(){
        return 0
    }
}

class pravougaonik extends Oblik {
    constructor(x,y,a,b){
        super(x,y);
        this.a =a;
        this.b = b;
        }
    povrsina(){
        return this.a * this.b;
    }
}
const pravougaonik1 = new pravougaonik(0,0,4,5);
console.log(pravougaonik1); 
console.log(pravougaonik1.povrsina()); 

class Krug extends Oblik {
    constructor(x,y,r){
    super(x,y);
    this.r = r
    }
    povrsina(){
        return Math.PI * this.r ** 2;
    }
}
const krug1 = new Krug(0,0,2);
console.log(krug1.povrsina());


//polimorfna funkcija koju mozemo koristiti za razlicite tipove podataka
function izraacunajPovrsinu(oblik){
    return oblik.povrsina();
}
console.log(izraacunajPovrsinu(pravougaonik1));
console.log(izraacunajPovrsinu(krug1));
