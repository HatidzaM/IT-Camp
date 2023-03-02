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

class product{
    static increaseForTen = 1.1
    constructor(name,price,desc,weight){
        this.name = name
        this.price = price
        this.desc = desc
        this.weight = weight
    }
    static increasePrice(){
        clg(`this method will increase price for our product for 10% by multiplaying current price by ${this.increaseForTen}`)
    }
}
