// 1. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine vece od 17.
const niz = [13,4,33,6,17,18,22,25];
const novi = [];
for(let i of niz){
    if(i>17){
        novi.push(i)
    }
}
console.log(novi);

// 2.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

const task = (arr1, arr2) => {
const pomocni = arr1.concat(arr2);
const pomocni2 = [];
for (let br of pomocni){
    if (br % 2 === 0) {
        pomocni2.push(br);
    }
}
pomocni2.unshift(10, 20);
return [pomocni, pomocni2];
};
console.log(task(DATA1, DATA2));