//every() metoda proverava da li su svi elementi niza zadovoljili uslov,  vraca boolean
const niz = ["tarik", "bakir", "haris", "aladin", "hamed", "mehmed", "hatidza", "hasan", "miona", "mitar"];
const svi = niz.every((name)=> name.length>=5);
console.log(svi);


//some() meroda proverava da li bar jedan element niza zadovoljava uslov,  vraca boolean
const neki = niz.some((name)=> name.length===9);
console.log(neki);

function check(){
    for(let i=0; i<=niz.length;i++){
        if(niz[i].length===7){
            return true
        }
        else continue
        
    }
    return false
}
console.log(check(niz));


//find() metoda vraca vrednost prvog elementa koji je prosao test funkcije
//! ako nijedan element niza ne ispunajava uslov =>> undefined
const brojevi = [4,9,7,8,6,1];
//koji je prvi element niza veci od 18
const jel = brojevi.find((broj)=> broj>18);
console.log(jel);



// findIndex() metoda vraca index prvog elementa koji je zadovoljio uslov
// ! =>> -1
const jel2 = brojevi.findIndex((broj)=> broj>18);
console.log(jel2);



//izbrisati duplikate iz niza (ignorisati case i=sensitivity)
const arr=['dsds','dsds','sss', 'fshfj', 'SsS', 'hgdsjgf'];
const dupli=(niz)=>{
    const novi = [];
    for(let el of arr){
        if(
            typeof el === "string" &&
            novi.some((element)=>element.toLowerCase() === element.toLowerCase) ||
            novi.some((element)=> element === el)
        ){
            continue
        }
        else{
            novi.push(el)
        }
    }
return novi
}
console.log(dupli(arr));
console.log(dupli(3,2,4,5,6,5));



//"1st choise is ljubicasta"
const colours = ["ljubicasta", "violet", "plava", "crna", "siva"];
const o = ["st", "nd", "rd", "th"];

function order(niz){
    let novi = []
    for(let i of niz){
        if(i=0){
            novi.push(niz[i].concat("st"))
        }
        else if(i=1){
            novi.push(niz[i].concat("nd"))
        }
        else if(i=2){
            novi.push(niz[i].concat("rd"))
        }
        else{
            novi.push(niz[i].concat("th"))
        }
    }
}
console.log(order());