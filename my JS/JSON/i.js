//   JSON - javaScript object Notation   //

// JSON je format za skladistenje i prenos podataka
//najcesce se koristi kada se podaci salju sa servera ka WEB stranici

//JSON podaci su vrlo slicni js objektu i oni se zapisuju :
// const person = {
//     "firstName": "amer",
//     "lastName": "honic",
//     "age":19,
// }

//keys/names zahtevaju duple navodnika, za razliku od js objekta





//dve metode za pretvaranje

//1. JSON.stringify()  = pretvara nas objekat u JSON format pa JSON u string
const strObject = JSON.stringify(person);
console.log(strObject);
console.log(typeof strObject);

//2. JSON.parse() = analizira se neki string i u slucaju mogucnosti pretvara u objekaat(nama citljiv podatak)
const obj = JSON.parse(strObject);
console.log(obj);
console.log(typeof obj);