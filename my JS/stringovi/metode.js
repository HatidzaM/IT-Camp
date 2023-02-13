//slice (start, end) =            end nije ukljucen u opseg
//substring (start, end) =        isto al ne prihvata negativne indexe
//substr (start, length)          !!do koliko je dug

//replace('ovo', 'sa ovim') =     menja samo first match
// .replace(/ovo/g, 'sa ovim')    g = global        
// .replace(/OvO/gi, 'sa ovim')   i = insensitive   

// charAt(index) =                vraca karakter nekog stringa sa poslatim indexom. - ""
// charCodeAt(index) =            vraca kod nekog stringa sa poslatim indexom.
// string[index] =                razlika od charAt() - undefined

//toUpperCase() 
//toLowerCase()

//concat() =                      spaja
//trim() =                        brise razmake sa obe strane stringa
//split() =                       vraca niz koji se splita po poslatom karakter
// indexOF() =                    vraca poziciju  - -1  +2.start
//lastIndexOF() =                 vraca poziciju zadnjeg pojavljivanja
// search() =                     daje nam poziciju(index) nekog stringa
// match () =                     vraca niz.
// includes() =                   vraca boolean  +2.start
//startWith() & endsWith() =      vracaju boolean


// toString() -           pretvara bilo koji tip podatka u String
//valueOf() -             vraca vrednost neke promenjiljive
// toExponaential() -     vraca string broja, (zaokruzi) na onoliko decimala koliki je argument metode
// toFixed() -            vraca string broja, daje onoliko (decimala) koliki je zapravo argument
// toPrecistion()         vraca string broja, sa onoliko (cifara) koliki je argument funkcije.

let z = 55.4758;
let w = +z.toExponential(2);
console.log(w);

let a = 12.1234;
let b = a.toExponential(3);
console.log(b);
console.log(typeof b);

a = 12.1234;
b = +a.toFixed(3);
console.log(b);
console.log(typeof b);

a = 12.1234;
b = +a.toPrecision(3);
console.log(b);
console.log(typeof b);



const funkcija = function(recenica){
    let polaDuzine = recenica.lenght % 2 === 0
    ? recenica.lenght / 2
    : Math.ceil(recenica.lenght / 2);

    const prva = recenica.toUpperCase();
    const druga = recenica.toLowerCase();
    const prvaPOl = recenica.slice(0,polaDuzine).toUpperCase();
    const drugaPol = recenica.substring(polaDuzine,recenica.lenght).toLowerCase();
    const treca = prvaPOl.concat(drugaPol);
    const cetvrta = recenica.replace(/skola/gi, "fakultet");
    const peta = recenica.substr(0, 10);
    const sesta = recenica.slice(-10);

    return(
        prva.concat("\n", druga, "\n", treca, "\n", cetvrta, "\n", peta, "\n", sesta)
    );
}
console.log(funkcija("dokle ce ova skola da ubija u pojam"));