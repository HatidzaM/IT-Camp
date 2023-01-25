// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).

// Zad.
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