//split() metoda nam vraca niz na osnovu nekog stringa na koji je primenjen
//ako  se kod split() izostavi argument dobicemo niz od jednog elementa
const recenica = "ja se skuha i boli me glava :<"
const niz = recenica.split();
console.log(niz);

const niz2 = recenica.split("i");
console.log(niz2);

const niz3 = recenica.split("*");
console.log(niz3);



//napraviti niz od stringa tako da se elementi niza prave do svake reci 'decembar' 
//rec 'decembar' ne sme biti deo ni jednog elementa niza
const recenicaa = "decembar je poslednji mesec u godini i mnogo je gadan ovaj decembar bukvalno je mesec decembar najgori i nadosadnniji. Jednom recju decembar.";
// const nizz = recenicaa.split("decembar");
const niz4 = recenicaa.split(/decembar/i);
// console.log(nizz);
console.log(niz4);



//SEARCH METODE
//1. indexOF() metoda nam vraca poziciju gde se zapravo nalaze poslati argument (1 ili vise) kada se radi o nekom stringu

const pozicija = recenicaa.indexOf("j");
console.log(pozicija);

const pozicija2 = recenicaa.indexOf("mesec");
console.log(pozicija2);

const pozicija3 = recenicaa.indexOf("jakna"); //kad ne postoji => -1
console.log(pozicija3);

//drugi argument predstavlja poziciju od koje pocinjemo
const pozicija4 = recenicaa.indexOf("mesec" ,30);
console.log(pozicija4);


//2. lastIndexOF() metoda nam vraca poslednju poziciju gde se zapravo nalazi argument

const pozicija5 = recenicaa.lastIndexOf("meseca");
console.log(pozicija5);



//naprsaviti funkciju koja na osnovu prametra ispituje pojavljiannje reci   ko osvaja
//ako se pojavljuje vise puta dati string , vratiti poziciju i prvog i poslednjeg pojavljivanja, 
//ako se pojavljuje jednom, vratiti poziciju pojavljivanja
//ako se ne pojavljuje dati string vratiti poruku: "nismo pronasli"

// const funkcija = function(rec){
//     const recenica2 = "hidsh dufdus f ko osvaja hfduisfh fuhdsuif";
//     const pos = recenica2.indexOf("ko osvaja");
//     const po2 = recenica2.lastIndexOf("ko osvaja");
//     if (pos === -1 || po2 === -1){
//         return "nismo pronasli";
//     }
//     else{

//     }
// }


function position(sentence){
    const first = sentence.indexOf("ko osvaja");
    const last = sentence.lastIndexOf("ko osvaja");
    if(first === -1){
        return "nismo pronasli";
    }
    else if(first === last){
        return "reci 'ko osvaja' se nalaze jednom u recenici";
    }
    else if(first !== last){
        return "prvo pojavljivanje reci 'ko osvaja' se nalazi na" + first  + " \n . poslednje pojavljivanje reci 'ko osvaja' se nalazi na" + last; 
    }
}
console.log(position("hbdsdha ko osvaja ihakfhas ko osvaja !"));
console.log(position("jhisdhf ko osvaja"));
