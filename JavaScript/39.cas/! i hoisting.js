const prom1 = 55
const prom2 = !55//false
const prom3 = !!55 //dobijamo tip
const prom4 = !!true//true
const prom5 = !""//true
const prom6 = !(55+"")//false
console.log(prom1)
console.log(prom2)
console.log(prom3)
console.log(prom4)
console.log(prom5)
console.log(prom6)

add(10,15)//moze
function add(a,b){
    console.log(a+b)
}

hello("alene")//Ne moze 
const hello = (par) =>{
console.log(`hello ${par}`)
}

