//1. Zadatak
// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

const objekat = {
    firstName:"hatidza",
    lastName:"mahmutovic",
    language:["turski", "engleski"],
    setLanguage:function(x){
        for(let el of this.language){
            if(el===x){
                return "jezik je vec unet"
            }
            else{
                return this.language.push(x)
            }
        }
    },
    setNickName: function(){
        let prvo = "";
        let drugo = "";
        let sastavljanje="";
        for(let i = 0; i<2; i++){
            prvo += this.firstName[i]
            drugo += this.lastName[i]
        }
        sastavljanje = prvo + drugo
        return sastavljanje
    }
}
console.log(objekat.setNickName());
console.log(objekat.setLanguage("nemacki"));


//2. Zadatak
const radnik = {
    firstName: "Dzenan",
    lastName : "Kosuta",
    fullname:function(){
        return this.firstName +" "+ this.lastName
    },
    adresa:{
        ulica:"avnoja",
        broj:"bb",
        grad:"Novi Pazar",
        getAdress:function(){
            // return `${fullname()} zivi u ulici ${radnik.adresa}`
            return radnik.firstName +" "+ radnik.lastName + ` zivi u ulici ` + this.ulica+" "+ this.broj+" "+ this.grad 
        }
    }
}
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());



//3. Zadatak
const automobil = {
    marka: "Audi",
    model: "Q7",
    boja: "Bela",
    pogon: "quattro",
    menjac: "Automatik",
    km:240000,
    vlasnik:[062321552,063930630],
    garaza:{
        parking:"JKP Servis",
        vikend:"od 17 free",
        satnaKarta: "50",
        dnevnaKarta: "200", 
        mesecnaKarta: "2000",
        platiZa: function(od, do) {

}
    }
}
console.log();