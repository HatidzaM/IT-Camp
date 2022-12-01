//while petlja nam omogucava iteraciju kroz neki objekat nekoliko puta uz potencijalno odredjene uslove
// kod ove petlje je neophodno na kraju koda definisati povecanje iteratora

let i = 0;
while(i<11){
    if (i%2===0){
        console.log(i)
    }
    i++
}

console.log("2.zadatak")
const broj = +prompt("unesite neki broj")
let a=1
while(a<=broj){
    console.log(a**2)
    a++
}




console.log("3.zadatak")
// let broj1 = +prompt("unesite prvi broj")
// let broj2 = +prompt("unesite drugi broj")
// if(broj1<0 && broj2<0){
//     console.log("uneti brojevi moraju biti veci od 0")
// }
// while(broj1<broj2){
//     console.log(broj1)
//     broj1++
//     break
// }
// while(broj1>broj2){
//     console.log(broj2)
//     broj2++
// }


let broj1 = +prompt("unesite prvi broj")
let broj2 = +prompt("unesite drugi broj")
if(isNaN(broj1) || isNaN(broj2)){
    console.log("brojevi moraju imati korektne vrednosti")
}
else if(broj1 < broj2){
    while(broj1<=broj2){
        console.log(broj1)
        broj1++
    }
}
else if(broj1 > broj2){
    while(broj1 >= broj2){
        console.log(broj2)
        broj2++
    }
}
else if(broj1 === broj2){
    console.log("uneti brojevi morajju biti razliciti")
}



//do while petlja predstavlja poseban slucaj while petlje, gde se prvo izvrsava kod pa se onda proverava uslov
// do{
//     //blok za izvrsavanje
// }while(uslov)

//ispisati sve brojeve 1-5
console.log("do while")
let br1 = 1
do{
    console.log(br1)
    br1++
}while(br1<6)

//nedostatak npr: sve brojeve manje od 20 krenuvsi od broja kaji unosi korisnik
let x = Number(prompt("unesite neki broj"))
do{
    console.log(x)
    x++
}while(x<20)
//ako uneses 56 ispisace se 57
