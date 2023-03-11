//promise je JS objekat koji predstavlja mesto za rezultate asinhrone funkcije sve dok traje izvrsavanje asinhrone operacije

const cizburger = new Promise((resolve, reject)=>{
    const response = 200;
    if(response >= 200 && response < 300){
        resolve()
    }
    else{
        reject()
    }
})

cizburger
    .then(()=>console.log("dobio sam cizburger"))
    .catch(()=>console.log("nisam dobio obrok"))
    .finally(()=>console.log("obecanje je zavrseno"))







const niz = new Promise((resolve, reject)=>{
    const response = 200;
    if(response >= 200 && response < 300){
        resolve([1,2,3])
    }
    else{
        reject("ne moze")
    }
})

// niz
//     .then((a)=>console.log(a))
//     .catch((b)=>console.log(b))
//     .finally(()=>console.log("obecanje je zavrseno"))


//chain efekat se postize tako sto vrednost koja treba biti koriscena u narednoj callback funkciji then metode se mora naci u return prethodne callback funkcije, prethodne then metode
niz
    .then((niz)=>{
        console.log(`dobili smo ${niz}`)
        const parni = niz.filter((br)=>br%2===0)
        return parni
    })
    .then((noviNiz)=>console.log(`filtriran niz je ${noviNiz}`))
    .catch((message)=>console.log(message))




// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je uspesno izvrsena".

function proveraStringa(text) {
    const promis = new Promise((resolve, reject) => {
        const stringg = text.toLowerCase();
        let brojac = 0;
        for (let i = 0; i < stringg.length; i++) {
            if ( stringg[i] === "a" || stringg[i] === "e" || stringg[i] === "i" || stringg[i] === "o" || stringg[i] === "u") {
                brojac++;
            }
        }
        if (brojac > 10){
        resolve("String zadovoljava uslov!");
        }
        else{
        reject("String ne zadovoljava uslov!");
        }
    });

    promis
        .then((poruka) => {
            console.log(poruka)})
        .catch((poruka) => {
            console.log(poruka)});
    return "Proverili smo string!";
}

console.log(proveraStringa("oooaoaoaoaoaoaoaoaooaoaoa"));
console.log(proveraStringa("neki str"));