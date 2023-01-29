// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
    id: 1,
    marka: "Audi",
    model: "a4",
    boja: "Crvena",
    pogon: "prednji",
    menjac: "automatski",
    kontakt: [0622222, 02033322],
    servis: {
      datum: "04,maj",
      km: 23000,
      serviser: "Pasovic",
    },
    udaran: true,
};

myCar.trenutnabrzina = 0;
myCar.maksimalnabrzina = 260;

myCar.povecanjebrzine = function(povecanje){
    if(this.trenutnabrzina + povecanje > this.maksimalnabrzina){
        return "ne more"
    }
    else{
        return this.trenutnabrzina += povecanje
    }
}

myCar.povecanjebrzine(30)
console.log(myCar);
console.log(myCar.povecanjebrzine(240));


myCar.smanjenjebrzine = function(smanjenje){
    if(this.trenutnabrzina - smanjenje < 0){
        return "ne more"
    }
    else{
        this.smanjenjebrzine -= smanjenje
        return {trenutnabrzina: this.trenutnabrzina}
    }
}

console.log(myCar.smanjenjebrzine(40));
console.log(myCar.smanjenjebrzine(25));
console.log(myCar);


myCar.koci = function () {
    this.trenutnaBrzina = 0;
};
myCar.koci();
console.log(myCar);