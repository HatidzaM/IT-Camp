//trim() metoda brise razmake sa obe strane stringa.

const recenica = " Da li vam je hladno ovde?    ";
console.log(recenica);
console.log(recenica.length);
const recenica2 = recenica.trim();
console.log(recenica2);
console.log(recenica2.length);

//postoje 3 metode za (uzimanje) jednog kkaraktera nekog stringa:

// 1. charAt(index) - vraca karakter nekog stringa sa poslatim indexom
// 2. charCodeAt(index) - vraca kod nekog stringa sa poslatim indexom
// 3. string[index] - ima jednu razliku od charAt()

const novaRecenica = "Spava mi se."
const char1 = novaRecenica.charAt(2); //(56)=>""
const char2 = novaRecenica.charCodeAt(2);
const char3 = novaRecenica[3]; //[56]=>undefined
console.log(char1);
console.log(char2);
console.log(char3);

//