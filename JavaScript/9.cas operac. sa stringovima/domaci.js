//na osnovu unete recenice ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
//dok ako je neki karakter ="a" neka se ispise br 5, a ako je = "s" da se nista ne ispise

//continue

// let recenica = "javio se zacetak jedne misli koja potom raste, pusta koren i cveta"
const recenica = prompt("unesite neku recenicu: ")
const duzina = recenica.length
for(let i = 0; i < duzina; i++){
    if(recenica[i]==="a"){
        console.log(5)
    }
    else if (recenica[i]==="s") {
        continue
    } 
    else{
        console.log(recenica[i])
    }
}