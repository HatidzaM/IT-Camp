//JS objekti su mutable(promenljivi)

const dzenan = {
    ime:"dzenan",
    prezime:"mecinovic",
    godine:19,
}
const dzenan2 = dzenan; //oba postaju jedno isto
console.log(dzenan2);
dzenan2.prezime = "kosuta";
dzenan2.godine = 26;
console.log(dzenan2);
console.log(dzenan);

//brisanje svojstva iz objekta:
const mitar = {
    ime:"mitar",
    prezime:"vranic",
    godine:20,
    skola:"prva tehnicka",
}
delete mitar.skola;  //brise key i value
console.log(mitar);
//2. nacin
// delete mitar["skola"]


//NAPOMENA*****
//vrednosti nekog objekta mogu biti: objekti, nizovi, funkcije...


//konvertovanje objekta u niz
// Object.values(obj)
const niz = Object.values(mitar);
console.log(niz);

//dodavanje novih svojstava:
mitar.punoletnost = true;
console.log(mitar);



