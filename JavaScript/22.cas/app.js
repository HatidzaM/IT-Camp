//1.



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

// function protectEmail(email){
//     const donja = email.search("_")
//     const tacka = email.search(".")
//     for (let i = 0; i <email.length; i++){
//         // if( email.search("_") || email.search(".")){}
//         if(email[i] !=="_" || email[i] !== "."){
//             novi +=email[i]
//         }
//     }
// }


function protectEmail(email){
    // let novie = "";
    let indeks = 0;
    const donja = email.indexOf("_") !== -1  ? email.indexOf("_") : null;
    const tacka = email.indexOf(".") !== -1  ? email.indexOf(".") : null;
    for(let i = 0; i< email.length; i++){
        if(email[i] === "_" || email[i] === "." || `0` || `1` || `2` || `3` || `4` || `5` || `6` || `7` || `8` || `9`){
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
console.log(protectEmail("hatidza_mahmutovic05@gmail.com"));
