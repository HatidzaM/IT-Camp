//1. prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n

const n = +prompt("unesite neki broj")
let brojac = 0
let suma = 0
for(let i=1; i<=n; i++){
    if(i%5===0){
        brojac++
        suma+=i
        
    }
}
console.log("suma brojeva je:"+ suma + "\n a ima ih:" + brojac + " deljivih sa 5")



//2. neka se izvrsi iteracija od broja 99 do -99. Ako je broj deljiv sa 4, saberi ga sa 14.

const broj = +prompt("unesite neki broj")
let i=99
while(i>-100){
    if(i%4===0){
        console.log(i+14)
    }
    i--
}
//2.nacin
for(let i = 99; i>=-99; i--){
    if(i%4===0){
        console.log(i+14)
    }
}



//3. izracunati aritmeticku sredinu brojeva koji su deljivi sa 3. iteracija se vrsi od 3 do 17

let sum=0
let brojc = 0
for(let i = 3; i<18; i++){
    if(i%3===0){
        sum+=i
        brojc++
    }
}
let art = sum/brojc
console.log(art)
