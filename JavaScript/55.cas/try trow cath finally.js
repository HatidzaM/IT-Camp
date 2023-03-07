function devide(a,b){
    try{
        if(b===0){
            throw new Error("deljenje nulom nije moguce.")
        }
        return a/b
    }
    catch(error){
        console.log(error.message)
    }
    finally{
        console.log("ovo je bila funkcija koja deli dva broja.")
    }
}
console.log(devide(10,5));
console.log(devide(10,0));




console.log("1")
console.log("2")
setTimeout(()=>{
    console.log("3")
}, 1000)
console.log("4")
setTimeout(()=>{
    console.log("5")
}, 900)






