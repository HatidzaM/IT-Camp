// 1.  Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

// const rec = "abcd";
// let novaRec = "";
// for (let i = 0; i < rec.length; i++) {
//   if (i === 0) {
//     novaRec += rec[i + 1];
//   } else if (i === 1) {
//     novaRec += rec[i - 1];
//   } else if (i === 2) {
//     novaRec += rec[i + 1];
//   } else if (i === 3) {
//     novaRec += rec[i - 1];
//   }
// }
// console.log(novaRec);

function menjanje(recenica) {
    let novaRecenica = "";
    for (let i = 0; i < recenica.length; i++) {
        if (recenica.length % 2 !== 0 && i === recenica.length - 1) {
            novaRecenica += recenica[i];
    }
        else if (i % 2 === 0) {
            novaRecenica += recenica[i + 1];
    }
        else if (i % 2 !== 0) {
            novaRecenica += recenica[i - 1];
    }
}
    return novaRecenica;
}

console.log(menjanje("Pera ima devojku"));
console.log(menjanje("Pera ima devojku."));



//2. da se ispisuju 1. index iz prve recenice, 1. index iz iz druge.....5. iz prve 5. iz druge

const drugi = (recenica1, recenica2) =>{
    const duzina1 = recenica1.length;
    const duzina2 = recenica2.length;
    
    // let duzina;
    // if(duzina1>duzina2){
    //     duzina = duzina1;
    // }else{
    //     duzina=duzina2
    // }
    const duzina = duzina1 > duzina2 ? duzina1 : duzina2;

    let recenica3 = "";
    for(let i=0;i<duzina; i++){
        if(recenica1[i] !== undefined && recenica2[i] !== undefined){
            recenica3 += recenica1[i] + recenica2[i]
        }
        else if(recenica1[i] === undefined){
            recenica3 += recenica2[i]
        }
        else if(recenica2[i] === undefined){
            recenica3 += recenica1[i]
        }
    }
    return recenica3
}
console.log(drugi("PERA", "sladoled"));
console.log(drugi("OVO JE SADA DUZI STRING", "sladoled"));



//3. da sakrije email adresu
//console.log(protectEmail("robin_singh@example.com"))
//"robin...@example.com"

function protectEmail(email){
    // let novie = "";
    let indeks = 0;
    const donja = email.indexOf("_") !== -1  ? email.indexOf("_") : null;
    const tacka = email.indexOf(".") !== -1  ? email.indexOf(".") : null;
    for(let i = 0; i< email.length; i++){
        if(
         email[i] === "." ||
         email[i] === "_" ||
         email[i] === "1" ||
         email[i] === "0" ||
         email[i] === "2" ||
         email[i] === "3" ||
         email[i] === "4" ||
         email[i] === "5" ||
         email[i] === "6" ||
         email[i] === "7" ||
         email[i] === "8" ||
         email[i] === "9"){
            indeks = i;
            break
        }
    }
    const indeksAt = email.indexOf("@");
    const deo1 = email.slice(0, indeks);
    const deo2 = email.slice(indeksAt)//ide do kraja. ne mora 2. argument;
    const novie = deo1.concat("...",deo2);
    return novie;
}
console.log(protectEmail("hatidzamahmutovic05@gmail.com"));
