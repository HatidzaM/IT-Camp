// Iz datog niza ispitati koliko elemenata je tipa string, number, boolean, koliko elemenata je zapravo niz?
const niz = [ "jagoda", 25, true, "mandarina", [1, 2, 3], "ananas", 49, 694, "tresnja" ];
let stringBr=0;
let numberBr=0;
let booleanBr=0;
let nizBr=0;
for(let i=0; i<niz.length; i++){
    // console.log(typeof niz[i])
    if(typeof niz[i] == String){
        stringBr+=i;
        console.log("stringova ima:" + stringBr)
    }
    else if(niz[i] === Number){
        numberBr++
        console.log(`broj elemenata tipa number:`+ numberBr)
    }
    else if(typeof niz[i] == Boolean){
        booleanBr++
        console.log(`broj elemenata tipa boolean:`+ booleanBr)
    }
    // else if(Array.isArray(i) === true){
    //     nizBr++
    //     console.log(`broj elemenata koji je niz: ${nizBr}`)
    // }
}