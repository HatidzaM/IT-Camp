// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]

const parnePozicije = (niz) => {
    const parni = [];
    for (let i = 1; i < niz.length; i += 2) {
        parni.push(niz[i]);
    }
return parni;
}
console.log(parnePozicije([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));


// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)

const parnibr = (niz) => {
    const parni = [];
    for (let broj of niz) {
        if(broj % 2 === 0){
            parni.unshift(broj)
        }
    }
return parni
}
console.log(parnibr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));


// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)

const neparnibr = (niz) => {
    const neparni = [];
    for (let broj of niz) {
        if(broj % 2 !== 0){
            neparni.unshift(broj)
        }
    }
return neparni
}
console.log(parnibr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

function pozitivni(niz){
    const pozitivni = [];
    for (let broj of niz){
        if (broj > 0){
        pozitivni.unshift(broj)
        }
    }
return pozitivni
}
console.log(pozitivni([-5, -7, 0, 3, 6, -6, 4, 10]));