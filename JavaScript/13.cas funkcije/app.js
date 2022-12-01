//funkcija predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste
//mozemo je definisati putem :
//1. function keyword
//2. error function

//1.function

//pravimo funkciju koja sabira 3 i 5
function zbir35(){
    const zbir = 3 + 5;
    return zbir;
}
console.log(zbir35());


//pravimo funkciju koja sabira 2 broja
function zbir(par1,par2){ //parametri 
    return par1 + par2
}
console.log(zbir(5,22)) //argumenti


//napraviti funkciju koja vraca zbir kvadrata 2 broja
function zbirr(a,b){ 
    return a**2 + b**2
}
console.log(zbirr(5,10))


//napraviti funkciju koja vraca zbir kvadrata 2 broja. Ako se izostavi 2. argument funkcija ga racuna kao 0

//1.nacin
function zbir2(a,b){
    if(b === undefined){
        return a**2
    }
    else{
        return a**2 + b**2
    }
}
console.log(zbir2(2,3))
console.log(zbir2(2))

//2.nacin
//defaultne vrednosti se stavljaju na kraju!!!
//ne moze neka defaultna vrenost biti definisana pre obavezne.
function zbr(a,b = 0){
    return a**2 + b**2
}
console.log(zbr(5,1))


//jos jedan nacin definisanje funkcije preko function keyword
const aritmetickaSredina = function(a = 1, b = 1, c = 1){
    return (a+b+c)/3;
}
console.log(aritmetickaSredina(4,5,3))
console.log(aritmetickaSredina(4,5))
console.log(aritmetickaSredina())


//povrsina
function povrsina(a,b){
    if(a===b){
        return "povrsina kvadrata " + a**2
    }
    else{
        return a*b + " povrsina pravougaonika iznosi:"
    }
}
console.log(povrsina(4,4))
console.log(povrsina(2,6))
