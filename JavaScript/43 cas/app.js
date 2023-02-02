const alen = {
    firstname: "alen",
    lastname: "muslic",
    age:17,
    fullname: function(){
        return `${this.firstname} ${this.lastname}`
    }
}

const hatidza = {
    firstname: "hatidza",
    lastname: "mahm",
    age:17,
}

//pozivanjem neke funkcije za odredjeni objekat se moze izvrsiti pomocu funkcije:
// 1. call()
// 2. apply()
// 3. bind()

//prvo treba da pristupimo funkciji , pa onda objasniti na kom se objektu treba primeniti

console.log(alen.fullname.call(hatidza));



const restoran1 = {
    hrana: "spaghetti",
    gosti: "veoma zadovoljni",
    lokacija: "Stevana Nemanje, 64",
}
const restoran2 = {
    hrana: "burek",
    gosti: "zgadjeni",
    lokacija: "Stanice Spasojevic, 62",
}
const poruka = (mesto, drzava)=>{
    return `vecerasnji specijalitet je bio ${this.hrana}. nasi gosti su ${this.gosti}, te srecni zbog toga. \n Nalazimo se u ulici ${this.lokacija}, u ${mesto}, ${drzava}`
}

//call() metoda za prvi argumenr ima objekat na koji se primennjuje, ostali argumenti su argumenti metode koja se izvrsava

console.log(poruka.call(restoran1, "novi pazar", "srbija"));

//apply() metoda za prvi argument ima  objekat na koji se primenjuje, drugi argument je niz gde smestamo argumente metode koja se izvrsava

console.log(poruka.apply(restoran2, ["sarajevo", "BIH"]));


//bind() zahteva prethodno definisanje promenljive (funkcije) za odredjeni objekat pa onda pozivanje funkcije sa eventualnim argumentima

const bindFunction = poruka.bind(restoran1);
console.log(bindFunction("novi sad", "srbija"));



