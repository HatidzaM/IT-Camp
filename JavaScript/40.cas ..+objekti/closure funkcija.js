//CLOSURE FUNKCIJA//

//poznata je cinjenica da kada se izvrsi funkcija , sve njene lokalne pomenljive pokupi garbage colector i one prestaju da postoje u memoriji
//medjutim, to nije slucaj za funkciju cija promenj=ljjiva zahteva neja druga funkcija

// closure je funkcija koja ima pravo pristupa promenljivim iz domena druge funkcije
//to se najcesce postize uredjivanjem funkcije unutar druge funkcije nakon cega se postize tzv Block chain

function first(){
    const prom1 = "hi";
    return `${prom1} guys`
}
console.log(first());
// console.log(prom1) //ne moze

function second(){
    const a=5
    const b=9
    function closure(c){
        return a*c
    }
    return closure(3)
}
console.log(second())
