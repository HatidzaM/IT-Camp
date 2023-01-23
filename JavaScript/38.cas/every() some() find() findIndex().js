//every() metoda proverava da li su svi elementi niza zadovoljili uslov,  vraca boolean

// Da li su svi u grupi punoletni?
const godine = [16, 19, 18, 19, 15, 17, 17, 21, 20];
const isEveryAdult = godine.every((godina) => godina > 17);
console.log(isEveryAdult);

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

//NECE DA RADI???--------------------------------------------------------------------------------
// const dupli=(niz)=>{
//     const novi = [];
//     for(let el of niz){ //PRIJAVLJUJE GRESKU ???!?!?!?!??!?
//         if(
//             (typeof el === "string" &&
//             novi.some((element)=>element.toLowerCase() === el.toLowerCase())) ||
//             novi.some((element)=> element === el)
//         ){
//             continue
//         }
//         else{
//             novi.push(el)
//         }
//     }
// return novi
// }
// console.log(dupli(["alen", "ALEN", "aLen", "Alen", "hatidza"]));
// console.log(dupli(3,2,4,5,6,5));


const duplikati = (niz) => {
    const novi = [];
    for (let el of niz) {
        if(
        (typeof el === "string" &&
        novi.some((element) => element.toLowerCase() === el.toLowerCase())) ||
        novi.some((element) => element === el)
        ){
            continue
        }
        else {
            novi.push(el)
        }
    }
    return novi
};
console.log(duplikati([1, 1, 3, 4, 5, 6, 7, 3]));
console.log(duplikati(["alen", "ALEN", "aLen", "Alen", "hatidza", "<3"]));



// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

colours = ["purple", "violet", "blue", "black", "bordeaux"];
o = ["st", "nd", "rd", "th"];

const newArr = colours.map((element, index) => {
    if(index === 0){
    return "1" + o[index] + " choice is " + element
    }
    else if(index === 1){
    return "2" + o[index] + " choice is " + element
    }
    else if(index === 2){
    return "3" + o[index] + " choice is " + element
    }
    else{
    return `${index + 1}` + o[3] + " choice is " + element
    }
});
console.log(newArr);