//napisi bez razmaka
let recenica = "alene jesi li spremio test?"
let novarecenica = ""
for(let i = 0; i<recenica.length; i++){
    if(recenica[i] !== " "){
        novarecenica+=recenica[i]
        
    }
}
console.log(novarecenica)

//izbroji razmake
let recenica1 = "alene jesi li spremio test?"
let novarecenica1 = ""
brojac = 0
for(let i = 0; i<recenica1.length; i++){
    if(recenica1[i] === " "){
        brojac++
        
    }
}
console.log(brojac)


//napravi recenicu gde ce se umesto slova  a  ispisati slovo  t  dok ako se posle slova  a  nalazi slovo n pisacemo d umsto a

let recenice = prompt("unesi recenicu:")
let newrecenica = ""
    for(let i = 0; i<recenice.length; i++){
        if(recenice[i] === "a" && recenice[i+1] === "n"){
            newrecenica += "d"
        }
        else if(recenice[i] === "a"){
            newrecenica+="t"
        }
        else{
            newrecenica += recenice[i]
        }
}
console.log(newrecenica)
