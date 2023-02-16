//metode su funkcije koje ce se izvrsiti na objektu
//metode su skladistene u svojstvima(properrty) kao definicije funkcija

const objekat = {
    key:"nana",
    o:123
}
console.log(objekat);
delete objekat.key;  //brise key i value
delete objekat["key"];
console.log(objekat);
