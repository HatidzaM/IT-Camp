//flat() metoda se koristi kada unutar niza imamo element koji je niz, i zelimo da sve podelemente izvucemo na isti nacin da oni predstavljaju elemente glavnog niza
const niz = [
    ["jabuka", "ananas", "jagoda", "kruska"],
    ["krompir", "luk", "paradajz"],
    ["pite", "razna jela"],
];
const niz2 = niz.flat();
console.log(niz2);


//1
const a = [[1,2,3],[4,5,6],[7,8,9]];
const sklj = (niz)=>{
    let outpuStr=""
    for(let i=0;i<niz.length;i++){
        outpuStr += `row ${i} \n`
        for(let j of niz[i]){
            outpuStr += `${j} \n`
        }
    }
    
return outpuStr
}
console.log(sklj(a));


//2
const prestupnagod = (from, to)=>{
    const prestupne = [];
    for(let i=from;i<=to;i++){
        if((i%4===0 && i%100!==0) || (i%400===0)){
            prestupne.push(i)
        }
    }
    return prestupne
}
console.log(prestupnagod(2000,2012));