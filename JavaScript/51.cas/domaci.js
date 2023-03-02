// 1. Don't give me five!
//In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8

function pet(a,b){
    let brojac=0;
    for(let i=a; i<=b; i++){
        strin = i.toString();
        if(!strin.includes("5")) brojac++
        else continue
    }
    return brojac
}
console.log(pet(1,9));

// function zbir(num1, num2) {
//     suma = 0;
//     for (i = num1; i <= num2; i++) {
//         if (!i % 5 === 0) return suma++;
//         else continue
//     }
//     return suma;
// }
// console.log(zbir(4, 17));




// 2.
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0


function najmanji(niz, parametar){
    // if(niz.length > 1){
    //     unique = [...new Set(niz)];
    // }
    unique = [...new Set(niz)];
    if(parametar === "value"){
        let min=0;
        // for(let i=0; i<unique.length; i++){
        //     if(i>min)
        // }
        return Math.min(unique)
        // const novi = niz.map((el)=>el)
    }
    else if(parametar === "index"){

    }

}