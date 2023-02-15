// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.
const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parni = niz.filter((element)=> element % 2 === 0);
const suma = parni.reduce((par1, par2)=> par1 + par2 );
console.log(suma);



// 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

const a1 = niz.filter(function(el){
    return el % 5 !== 0 });
const a2 = a1.map((el)=> el * 2 );
const a3 = a2.reduce((par1, par2)=> par1 + par2 );
console.log(a3);



// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a","a", 2, 4, 9, 3];

let pojavljivanje = 1;
var element;
let brojac = 0;
for(let i=0; i<arr1.length; i++){
    for(let k=i; k<arr1.length; k++){
        if(arr1[i]===arr1[k]){
            brojac++;
            if(brojac>pojavljivanje){
                element = arr1[i];
            }
        }
        
    }
    brojac = 0
}
console.log(`to je element ` + element + `len i pojavljuje se ` + pojavljivanje + ` puta`);



// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const change = (str)=>{
    let newStr = "";
    for(i=0; i<str.length; i++){
        if(str[i]===str[i].toLowerCase()){
            newStr+=str[i].toUpperCase()
        }
        else{
            newStr+=str[i].toLowerCase()
        }
    }
    return newStr
}
console.log(change(`The nela Green Frog`));