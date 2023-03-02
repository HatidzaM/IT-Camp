//napisati funkciju koja nam vraca reci sa najmanjim brojem slova

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]


function funkcija (niz){
    for(let i=0; i<niz.length - 1; i++){
        for(j=i+1; j<niz.length; j++){
            if(niz[i] > niz[j]){
                pom = niz[j];
                niz[j] = niz[i];
                niz[i] = pom
            }
        }
    }
    console.log(niz)
}
funkcija(["ab","a","abc"]);



// const sortArray = (sampleArray) => {
//   sampleArray.sort((first, second) => {
//     if (first.length > second.length) return 1;
//     return -1;
//   });
// }

const sortArray = (sampleArray) => {
    sampleArray.sort((first, second) => {
        return second.length - first.length });
}
const arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];
sortArray(arr);
console.log(arr);