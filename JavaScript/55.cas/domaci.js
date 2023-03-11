// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

const person = {
    ime: "hatidza",
    prezime: "mahmutovic",
    godine: 17,
}

// person.punoletnost = function(god)
function punoletnost (god){
    const promise = new Promise((res,odb)=>{
        if(god>17){
            res("vi ste punoletni")
        }
        else{
            odb(god)
        }
        // if(this.godine>17){
        //     res("vi ste punoletni")
        // }
        // else{
        //     odb(this.godine)
        // }
    })
    
    promise
    .then((mess)=> console.log(mess))
    .catch((mess)=> console.log(mess))
}

console.log(punoletnost(18));