// function user(ime, prezime){
//     this.ime = ime;
//     this.prezime = prezime;
// }
// const alen = new user("alen","muslic");
// console.log(alen);

class person {
    // ime = "default";
    // prezime;
    // godine;

    constructor(ime, prezime, brgod){
        this.ime = ime;
        this.prezime = prezime;
        this.brgod = brgod;
    }

    imeiprezime(){
        return `${this.ime} ${this.prezime}`
    }
}

// const person1 = new person();
// console.log(person1);
const person1 = new person("hatidza","mahmutovic",17);
console.log(person1);
console.log(person1.imeiprezime());




///staticke metode i staticke promenljive


class Product {
    static increaseForTen = 1.1;
    constructor(name, price, desc, weight) {
      this.name = name;
      this.price = price;
      this.description = desc;
      this.weight = weight;
    }
    static increasePrice() {
      console.log( `This method will increase price for our product for 10%  multiplaying current price by ${this.increaseForTen}` );
    }
}

const socks = new Product("white socks", 120, "100% cotton", 50);
console.log(socks);
  // Ne mozemo pristupiti statickoj metodi iz objekta, vec samo direktno preko klase.
  // console.log(socks.increasePrice());

console.log(Product.increaseForTen);
console.log(Product.increasePrice());


    // INHERITANCE

class Person {
    constructor(ime, prezime, pol, starost) {
      this.ime = ime;
      this.prezime = prezime;
      this.pol = pol;
      this.starost = starost;
    }
    getInfo() {
      console.log(`${this.ime} ${this.prezime} ima ${this.starost} godina.`);
    }
}

const person = new Person("Mitar", "Vranic", "M", 20);
console.log(person);
console.log(person.getInfo());

class Student extends Person {
    constructor(
      ime,
      prezime,
      pol,
      starost,
      brojIndeksa,
      godinaStudija,
      prosecnaOcena
    ) {
        super(ime, prezime, pol, starost);
        this.brojIndeksa = brojIndeksa;
        this.godinaStudija = godinaStudija;
        this.prosecnaOcena = prosecnaOcena;
    }

    getInfo() {
      console.log( `${this.ime} ${this.prezime} ima ${this.starost} godina. Trenutno je na ${this.godinaStudija}. godini studija i prosecna ocena mu je ${this.prosecnaOcena}.`);
    }
}

const student = new Student("Amer", "Honic", "M", 19, 123321, 1, 7.77);
console.log(student);
console.log(student.getInfo());