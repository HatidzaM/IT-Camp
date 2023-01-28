// Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const subStr = (str) => {
    const subStrArr = [];
    for (let i = 0; i < str.length; i++){
        for (let k = i; k < str.length; k++){
            subStrArr.push(str.slice(i, k + 1));
        }
    }
    return subStrArr;
};
console.log(subStr("dog"));



// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
//ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek datih ocena).

const student ={
    ime: "hatidza",
    prezime: "mahmutovic",
    broj_indeksa: 00213120,
    ocene: [10,10,9,10,9,10,10,10,9],
    prosek_ocena: function(){
     const suma = student.ocene.reduce((a,b) =>a+b);
     return +(suma / student.ocene.length).toFixed(2)
    }
}
// console.log(student.prosek_ocena());

