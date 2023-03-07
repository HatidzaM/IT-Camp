//promise je JS objekat koji predstavlja mesto za rezultate asinhrone funkcije sve dok traje izvrsavanje asinhrone operacije

const cizburger = new Promise((resolve, reject)=>{
    const response = 200;
    if(response >= 200 && response < 300){
        resolve()
    }
    else{
        reject()
    }
})

cizburger
    .then(()=>console.log("dobio sam cizburger"))
    .catch(()=>console.log("nisam dobio obrok"))
    .finally(()=>console.log("obecanje je zavrseno"))







const niz = new Promise((resolve, reject)=>{
    const response = 200;
    if(response >= 200 && response < 300){
        resolve([1,2,3])
    }
    else{
        reject("ne moze")
    }
})

// niz
//     .then((a)=>console.log(a))
//     .catch((b)=>console.log(b))
//     .finally(()=>console.log("obecanje je zavrseno"))


//chain efekat se postize tako sto vrednost koja treba biti koriscena u nareqdnoj callback funkciji then metode se mora naci u return prethodne callback funkcije, prethodne then metode
niz
    .then((niz)=>{
        console.log(`dobili smo ${niz}`)
        const parni = niz.filter((br)=>br%2===0)
        return parni
    })
    .then((noviNiz)=>console.log(`filtriran niz je ${noviNiz}`))
    .catch((message)=>console.log(message))
