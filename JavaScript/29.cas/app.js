// metode za prikazivanje datuma

const trenutno = new Date();
console.log(trenutno);

//1. toString()
console.log(trenutno.toString());

//2. toUTCString()
console.log(trenutno.toUTCString());

//2. toDateString()
console.log(trenutno.toDateString());

//4. toISOString()
console.log(trenutno.toISOString());

//5. toTimeString()
console.log(trenutno.toTimeString())

//6. toLocaleTimeString()
console.log(trenutno.toLocaleTimeString());

//Get metode:
//za dobijanje informacija iz Date objekta
//getFullYear()
//getMonth()
console.log(trenutno.getMonth()+1);
//getDate()
//getDay() 0-6 ned-sub
let nedelja = new Date("2022 Dec 25");
console.log(nedelja.getDay());
//getHours()
//getMinutes()
//getSeconds()
//getMiliseconds()
//getTime()


//Set metode:
//dozvoljavaju menjanje nekih vrednosti koda Date objekta

// setFullYear()
trenutno.setFullYear(2015);
console.log(trenutno);
// setMonth()
// setDate()
trenutno.setDate(19);
console.log(trenutno);
// setHours()
trenutno.setHours(10);
console.log(trenutno.toTimeString());
// setMinutes()
// setSeconds()
// setMiliseconds()
// setTime()
