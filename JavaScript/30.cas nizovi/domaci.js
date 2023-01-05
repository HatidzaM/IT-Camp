// Iz datog niza ispitati koliko elemenata je tipa string, number, boolean, koliko elemenata je zapravo niz?
const niz = [ "jagoda", 25, true, "mandarina", [1, 2, 3], "ananas", 49, 694, "tresnja" ];

//POKUSAJ---------------------------------------------------------------------------------------------
// let stringBr=0;
// let numberBr=0;
// let booleanBr=0;
// let nizBr=0;
// for(let i=0; i<niz.length; i++){
//     // console.log(typeof niz[i])
//     if(String){
//     // if(typeof niz[i] == String){
//         stringBr+=i;
//         console.log("stringova ima:" + stringBr)
//     }
//     else if(Number){
//     // else if(niz[i] === Number){
//         numberBr++
//         console.log(`broj elemenata tipa number:`+ numberBr)
//     }
//     else if(typeof niz[i] == Boolean){
//         booleanBr++
//         console.log(`broj elemenata tipa boolean:`+ booleanBr)
//     }
    // else if(Array.isArray(i) === true){
    //     nizBr++
    //     console.log(`broj elemenata koji je niz: ${nizBr}`)
    // }
// }


//RESENJE--------------------------------------------------------------------------------------
function types(niz) {
    let stringTipa = 0;
    let numberTipa = 0;
    let booleanTipa = 0;
    let nizTipa = 0;
    for (item of niz) {
      if (typeof item === "string") {
        stringTipa++;
      } else if (typeof item === "number") {
        numberTipa++;
      } else if (typeof item === "boolean") {
        booleanTipa++;
      } else if (item instanceof Array) {
        nizTipa++;
      }
    }
    return `U datom nizu su se nasla: \n ${stringTipa} stringova,
     \n ${numberTipa} brojeva, \n ${booleanTipa} booleana,
     \n ${nizTipa} nizova.`;
  }
  
  console.log(types(nizz));
  
  // Novi zapis for petlje, koji se odnosi na sve iterirajuce objekte.
  // for (let i of nizz) {
  //   console.log(i);
  // }