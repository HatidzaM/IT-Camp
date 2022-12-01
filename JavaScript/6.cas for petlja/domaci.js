//ispisati sve brojeve od 50-100 koji su deljivi sa 5
console.log("1. zadatak")
for(let i=50; i<=100; i++){
    if(i%5===0){
        console.log(i)
    }
}

//dvostruku vrednost pririodnih brojeva od 6 do 14
console.log("2. zadatak")
for(let i=6; i<15; i++){
    console.log(i*2)
}

//suma neparnih prirodnih brojeva 10-20
console.log("3. zadatak")
let suma = 0
for(let i=10; i<21; i++){
    if(i%2!==0){
        suma+=i
    }
}
console.log(suma)