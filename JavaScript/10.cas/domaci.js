//1. prebrojti koliko se puta u unetom stringu pojavljuje slovo "M"(i veliko i malo)
//npr za string 'Mama ima momu', dobija se rezultat 5.
console.log("1. zadatak")
let unos = prompt("unesite recenicu:")
let brojacc = 0
for( let i = 0; i < unos.length; i++){
    if(unos[i] === "M" || unos[i] === "m"){
        brojacc++
    }
}
console.log(unos)
console.log("u unetoj recenici je nadjeno " +brojacc+ " m")



//2. prebrojati koliko ima znakova koji su cifre u unetom stringu.
console.log("2. zadatak")
let recenica = prompt("unesite zeljenu recenicu:")
let brojac = 0
for(let i = 0; i < recenica.length; i++){
    if(recenica[i] === "0" || recenica[i] === "1" || recenica[i] === "2" || recenica[i] === "3" || recenica[i] === "4" || recenica[i] === "5" || recenica[i] === "6" || recenica[i] === "7" || recenica[i] === "8" || recenica[i] === "9" ){
        brojac++
    }
}
console.log(recenica)
console.log("u unetoj recenici je nadjeno "+ brojac + " cifara")

//2.nacin
for(let i = 0; i<recenica.length; i++){
    if(isNaN(recenica[i])){
        continue
    }
    else{
        brojac++
    }
}
console.log(brojac)
