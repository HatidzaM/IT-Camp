// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.
const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const elementi = niz.filter((el)=>el%2===0);
let suma = elementi.reduce((a,h)=>a+h);
console.log(suma);


// 2. brojeve koji nisu deljivi sa 5 pomnoziti sa 2 pa ih sabrati

const prvi = niz.filter((el)=>el%5!==0);
const drugi = prvi.map((el)=>el*2);
const treci = drugi.reduce((a,h)=>a+h);
console.log(treci);


// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a","a", 2, 4, 9, 3];




// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const mix = function(recenica){
    let nova = "";
    for(let i = 0; i<recenica.length; i++){
        if(recenica[i]===recenica[i].toUpperCase()){
            nova+=recenica[i].toLowerCase()
        }
        else{
            nova+=recenica[i].toUpperCase()
        }
    }
    return nova
}
console.log(mix("Tidza voLi Alnea"));