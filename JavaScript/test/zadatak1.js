// Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost)

let broj = +prompt("unesite realan broj:")
if(isNaN(broj)){
    console.log("niste uneli korektnu vrednost")
}
else{
    console.log(broj**2)
}
